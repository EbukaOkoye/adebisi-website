import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ClientTestimonials() {
  const testimonials = [
    {
      text: "Financial planners help people to gain their financial goals. They can help you manage the most efficient way you can save money and help you to achieve your financial goals.",
      author: "John Smith",
      role: "CEO at TechCorp",
      avatar: "/professional-male-headshot.png",
    },
    {
      text: "Financial planners help people to gain their financial goals. They can help you manage the most efficient way you can save money and help you to achieve your financial goals.",
      author: "Sarah Johnson",
      role: "Founder at StartupCo",
      avatar: "/professional-female-headshot.png",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 border-0 shadow-lg">
              <div className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">"{testimonial.text}"</p>

                <div className="flex items-center space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
