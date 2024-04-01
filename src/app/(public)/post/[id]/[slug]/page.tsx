import { getPostById } from "@/requests/postsRequests";
import { redirect } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
import Link from "next/link";
import dayjs from "dayjs";

type PostPageProps = {
  params: {
    id: string;
    slug: string;
  };
};
async function getPostData(postId: number) {
  try {
    const post = await getPostById(postId);
    if (post) return post;
  } catch (error) {
    return null;
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = params;

  const post = await getPostData(Number(id));

  if (!post) {
    redirect("/post/nao-encontrado");
  } else {
    const cleanContent = DOMPurify.sanitize(post.content!);
    return (
      <div className="w-full h-full min-h-screen px-24 py-12 grid grid-cols-12 gap-5">
        <main className="col-span-9 flex flex-col gap-5">
          <div className="w-full border border-black/10 rounded-lg p-4 flex flex-col gap-1">
            <h1 className="text-5xl">{post.title}</h1>
            <div className="w-full flex justify-between">
              <span className="text-black/50">
                Autor:{" "}
                <Link href={"#"} className="hover:underline">
                  {post.author.name}
                </Link>
              </span>
              <span className="text-black/50">
                Postado em:{dayjs(post.createdAt).format("DD/MM/YYYY")}
              </span>
            </div>
          </div>
          <article
            dangerouslySetInnerHTML={{ __html: cleanContent }}
            className="p-4 border border-black/10 rounded-lg min-h-[500px] shadow-lg"
          ></article>
        </main>
        <aside className="col-span-3 flex flex-col p-3 border border-black/10 rounded-lg shadow-lg h-fit">
          <span className="text-xl">Categorias</span>
          <div className="w-full flex flex-wrap gap-1">
            {post.categories &&
              post.categories.length > 0 &&
              post?.categories?.map((category) => (
                <Link
                  href={"#"}
                  key={category.id}
                  className="text-left text-base truncate w-fit px-2 py-1 rounded-lg bg-blue-400 text-black"
                >
                  {category.name}
                </Link>
              ))}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-col">
              <div className="w-full">
                {post?.tags?.map((tag) => (
                  <Link
                    href={"#"}
                    key={tag.id}
                    className="text-left text-base truncate w-fit px-2 py-1 rounded-lg bg-gray-200 border-gray-500/20 text-black"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </aside>
      </div>
    );
  }
}
