import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Ether Guild?",
    answer: "Ether Guild is a community-driven initiative focused on supporting and strengthening ETH's role in the Ethereum ecosystem."
  },
  {
    question: "How can I participate?",
    answer: "You can participate by joining our community, contributing to discussions, and taking part in Guild Quests."
  },
  {
    question: "What are Guild Quests?",
    answer: "Guild Quests are community challenges and initiatives that support ETH through direct funding and collaborative efforts."
  }
];

export function FAQ() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
