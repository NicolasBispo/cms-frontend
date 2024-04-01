import Image from "next/image";
import Link from "next/link";
import { PiNumberFourBold, PiNumberZeroBold } from "react-icons/pi";

export default function PostNotFound() {
  return (
    <div className="w-full h-full min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center">
      <span className="text-[60px] font-inter">Post não encontrado</span>
        <div className="flex">
          <Image 
          src={"/not-found.svg"}
          
          width={500}
          height={500}
          alt="not-found-image"/>
        </div>
        
        <Link href={"/"} className="px-2 py-1 w-fit hover:underline text-blue-500">Voltar a pagina inicial</Link>
      </div>
    </div>
  );
}
