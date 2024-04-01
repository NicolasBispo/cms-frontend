import { noImage } from "@/globals/imagePaths";
import { stringToSlug } from "@/helpers";
import { humanizeDate } from "@/helpers";
import { Category } from "@/interfaces/category";
import { getCategories } from "@/requests/categoryRequests";
import { getPosts, getTrendingPost } from "@/requests/postsRequests";

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const { results: lastPosts } = await getPosts({ raw: "true" });
  const { results: categories } = await getCategories();
  const trendingPost = await getTrendingPost();

  const lastPost = lastPosts[0];

  return (
    <main className="w-full h-full bg-white text-black min-h-screen min-w-screen">
      <main className="flex flex-col w-full gap-2">
        <section className="w-full px-24 text-6xl text-black/80 font-bold font-bebas flex justify-center bg-blue-500/20 py-10">
          <span className="text-center">
            Explore um universo de conhecimento e inspiração no nosso blog{" "}
            <br /> onde cada palavra é uma porta para novas descobertas e ideias
            transformadoras.
          </span>
        </section>
        <section className="w-full flex flex-col px-16 pt-10">
          <span className="text-3xl font-bold">Postagem em destaque</span>
          <div className="px-16 py-5 flex gap-2 justify-center">
            <div className="relative aspect-video w-4/12 shadow-lg">
              <Image
                src={trendingPost?.postBanner || noImage}
                fill
                alt="marked-post-thumb"
                className="rounded-lg"
              />
            </div>
            <div className="w-6/12 flex flex-col p-2 rounded-lg border border-black/20 shadow-md">
              <span className="text-xl truncate font-bebas px-2">
                {trendingPost?.title}
              </span>
              <hr className="border-0 border-b border-b-black/20" />
              <p className="line-clamp-6 mt-2 leading-8 text-sm">
                {trendingPost?.content}
              </p>
              <Link
                href={`/post/${trendingPost?.id}/${stringToSlug(
                  trendingPost.title
                )}`}
                className="text-xs text-blue-500 rounded-lg bg-blue-200/50 w-fit px-2 py-1"
              >
                Ler postagem
              </Link>
              <div className="flex justify-end flex-grow">
                <span className="text-xs text-black/50 self-end">
                  Por: {trendingPost?.author?.name}
                </span>
              </div>
            </div>
          </div>
        </section>
        {lastPosts && lastPosts.length > 0 && (
          <section id="last-posts-section" className="flex flex-col px-16">
            <span className="text-3xl font-bold py-5">Ultimas postagens</span>
            <div className="flex">
              <article className="w-3/5 flex flex-col">
                <div className="w-full h-96 relative shadow-md">
                  <Image
                    src={lastPost?.postBanner || noImage}
                    className="rounded-md"
                    fill
                    alt="last-post-thumb"
                  />
                </div>
                <div className="w-full px-10 py-4 flex flex-col">
                  <div className="w-full flex justify-between">
                    <span className="text-xs text-black/50">
                      {lastPost?.author.name}
                    </span>
                    <span className="text-xs text-black/50">
                      {lastPost?.createdAt && humanizeDate(lastPost.createdAt)}
                    </span>
                  </div>
                  <span className="w-fit text-xl">{lastPost?.title}</span>

                  <span className="w-full line-clamp-3 relative text-base">
                    {lastPost?.content}
                    <Link
                      href="#"
                      className="absolute right-0 bottom-0 text-blue-500 bg-blue-200/50 rounded-lg px-2 py-1 z-50"
                    >
                      Ver mais
                    </Link>
                    <span className="absolute h-full w-full top-0 left-0 bg-gradient-to-b from-transparent to-white z-20"></span>
                  </span>
                </div>
              </article>
              <aside className="w-2/5 flex flex-col px-2 gap-y-3">
                {lastPosts?.slice(1, 5).map((post) => (
                  <Link
                    href={`/post/${post?.id}/${stringToSlug(post.title)}`}
                    key={post.id}
                    className="w-full flex gap-1 border rounded-lg border-black/20 p-2 cursor-pointer"
                  >
                    <div className="w-[50px] h-[50px] relative">
                      <Image
                        src={post.postBanner || noImage}
                        className="rounded-md"
                        fill
                        alt="post-thumb-image"
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="truncate w-full">{post.title}</div>
                      <small className="w-full text-black/50">
                        {humanizeDate(post.createdAt)}
                      </small>
                    </div>
                  </Link>
                ))}
                <Link
                  href="/posts"
                  className="px-2 py-1 rounded-sm bg-blue-200 hover:bg-blue-300 duration-100 w-fit"
                >
                  Ver mais
                </Link>
              </aside>
            </div>
          </section>
        )}
        <section
          id="category-post-section"
          className="px-16 pt-2 pb-24 flex flex-col bg-blue-200/20"
        >
          <span className="text-2xl font-bold text-center py-10">
            Encontrar por categorias
          </span>
          <div className="w-full grid grid-cols-5 gap-10">
            {categories.map((category) => (
              <CategoryCard category={category} key={category.id} />
            ))}
          </div>
          <div className="w-full flex justify-center pt-10">
            <Link
              href={"#"}
              className="w-fit bg-black hover:bg-black/80 text-white rounded-md px-4 py-1"
            >
              Ver mais
            </Link>
          </div>
        </section>
      </main>
    </main>
  );
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <div className="flex flex-col w-full gap-1 rounded-lg border border-black/20 shadow-lg hover:shadow-blue-300 duration-150 group">
      <div className="w-full aspect-square relative overflow-hidden">
        <Image
          src={category.thumbImage || noImage}
          fill
          alt="category-thumb-image"
          className="group-hover:scale-150 duration-1000 group-hover:grayscale"
        />
      </div>
      <span className=" px-5 text-center py-3 text-wrap truncate w-full">
        {category.name}
      </span>
    </div>
  );
}
