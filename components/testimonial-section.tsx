import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function TestimonialSection() {
  return (
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Card className="bg-slate-900 text-white p-8 lg:p-12 border-0">
          <div className="space-y-6">
            <p className="text-lg lg:text-xl leading-relaxed text-balance">
              "nolimit designs took my vision design ideas, making them design magic and it was boom! 🚀 Getting my
              brand to the top leagues. They're not just designers, they're brand architects."
            </p>

            <div className="flex items-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarImage src="/professional-headshot.png" />
                <AvatarFallback>FH</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">Favour Henshaw</p>
                <p className="text-sm text-gray-300">CEO at Henshaw</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
