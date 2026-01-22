import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Why wouldn't I just hire a full-time designer?",
      answer:
        "Good question! For starters, the annual cost of a full-time senior-level designer now exceeds $100,000, plus benefits (and good luck finding one available). Aside from that, you may not always have enough work to keep them busy at all times, so you're stuck paying for time you aren't able to utilize.",
    },
    {
      question: "Is there a limit to how many requests I can have?",
      answer:
        "Once subscribed, you're able to add as many design requests to your queue as you'd like, and they will be delivered one by one.",
    },
    {
      question: "How fast will I receive my designs?",
      answer:
        "On average, most requests are completed in just two days or less. However, more complex requests can take longer.",
    },
    {
      question: "Who are the designers?",
      answer:
        "You might be surprised to hear this, but nolimit designs is actually an agency of one. This means you'll work directly with me, founder of nolimit designs.",
    },
    {
      question: "How does the pause feature work?",
      answer:
        "We understand you may not have enough design work to fill up entire month. Perhaps you only have one or two design requests at the moment. That's where pausing your subscription comes in handy.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">Everything you need to know about our design services.</p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-foreground">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
