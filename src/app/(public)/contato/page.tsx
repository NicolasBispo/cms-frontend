import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contato() {
  return (
    <main className="w-full p-28 bg-gray-200/10">
      <form action="" className="w-1/2 flex flex-col gap-1">
        <span className="text-6xl font-bold text-center p-3">Entre em contato conosco!</span>
        <div className="flex flex-col gap-5 p-5 border border-black/20 rounded-lg shadow-lg">
          <div className="w-full flex flex-col">
            <label htmlFor="">Seu nome</label>
            <Input placeholder="Digite seu nome" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Seu email</label>
            <Input placeholder="Digite seu email" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Seu telefone</label>
            <Input placeholder="Digite seu telefone" />
          </div>
          <div className="w-full flex flex-col">
            <label htmlFor="">Motivo de contato</label>
            <Textarea placeholder="Escreva aqui o motivo do seu contato" />
          </div>
          <div className="w-full flex justify-end">
              <Button variant="link" className="w-fit">Enviar</Button>
          </div>
        </div>
      </form>
    </main>
  );
}
