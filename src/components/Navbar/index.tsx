import { navbarItems } from "@/mock";
import Link from "next/link";
import { Fragment } from "react"; // Importe Fragment para evitar um erro de renderização
import { MdSearch } from "react-icons/md";

export function Navbar() {
  return (
    <nav className="w-full flex flex-col">
      <div className="flex items-center justify-between py-5 px-10 font-poppins">
        <h1 className="text-2xl">Nosso blog</h1>
        <ul className="flex items-center gap-4 text-lg">
          {navbarItems.map((item) => (
            <li key={item.id}>
              <Link href={item.path} className="flex items-center gap-1">
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <MdSearch />
          </li>
        </ul>
      </div>
      <hr className="w-full border-0 border-b border-b-black/20" />
    </nav>
  );
}
