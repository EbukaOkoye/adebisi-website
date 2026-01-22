import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-900 text-white p-8 lg:p-12 text-center border-0">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-balance">Book a 15-minute intro call</h2>
            <p className="text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Learn more about how it works and how I can help you scale your business with great design.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Book a call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  )
}
