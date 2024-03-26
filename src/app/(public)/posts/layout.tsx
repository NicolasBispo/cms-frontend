import { DatePicker } from "@/components/ui/datepicker";
import { Input } from "@/components/ui/input";
import { categories } from "@/mock";
import { MdSearch } from "react-icons/md";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full flex py-24 px-16">
      <main className="w-3/4 h-full">
        <div className="w-full flex justify-end px-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Mais relevancia</SelectItem>
              <SelectItem value="dark">Publicado recentemente</SelectItem>
              <SelectItem value="system">Mais visualizado</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <section className="w-full">{children}</section>
      </main>
      <form className="w-1/4 flex flex-col gap-2 p-4 border border-black/20 rounded-lg shadow-lg">
        <div className="w-full flex gap-1 items-center">
          <Input placeholder="Pesquisar por post" />
          <button className="text-xl rounded-full  bg-black text-white flex p-1 items-center justify-center">
            <MdSearch className="p-0" />
          </button>
        </div>
        <span className="text-xl">Categorias</span>
        <div className="w-full flex flex-col max-h-40 overflow-auto p-1 border border-black/4 rounded-lg gap-2">
          {categories.map((category) => (
            <div
              className="flex gap-2 items-center border-b border-b-black/20 pb-2"
              key={category.id}
            >
              <input type="checkbox" id={`${category.id}-input`} name="" />
              <label htmlFor={`${category.id}-input`}>{category.name}</label>
            </div>
          ))}
        </div>
        <div className="w-full flex flex-col gap-1">
          <span className="text-lg">Filtrar pela data</span>
          <div className="flex flex-col gap-2">
            <DatePicker placeholder="Inicio do periodo" />
            <DatePicker placeholder="Fim do periodo" />
          </div>
        </div>
      </form>
    </div>
  );
}
