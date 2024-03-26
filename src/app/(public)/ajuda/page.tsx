import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { accordions } from "@/mock";

export default function Ajuda() {
  return (
    <main className="w-full bg-gray-200/10 p-28 flex flex-col gap-2">
      <span className="text-5xl py-5 font-bold">Ajuda</span>
      {accordions.map((accordion, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{accordion.title}</AccordionTrigger>
            <AccordionContent>{accordion.content}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </main>
  );
}
