import { Card } from "@/components/ui/card"

export function MembershipBenefits() {
  const benefits = [
    {
      icon: "🚀",
      title: "Unlimited requests",
      description: "Add as many design requests to your board as you'd like.",
    },
    {
      icon: "⚡",
      title: "Lightning fast",
      description: "Get your design one at a time in just a few days on average.",
    },
    {
      icon: "💰",
      title: "No contracts",
      description: "No contracts or commitments. Scale up or down as needed.",
    },
    {
      icon: "🎨",
      title: "No extra charges",
      description: "Unlimited brands, unlimited users, unlimited everything.",
    },
    {
      icon: "🏆",
      title: "Top-notch quality",
      description: "Insane design quality at your fingertips whenever you need it.",
    },
    {
      icon: "📱",
      title: "Risk-free revisions",
      description: "Don't like the design? We'll continue to revise until you're 100% satisfied.",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Membership benefits</h2>
          <p className="text-muted-foreground">
            Perks so good you'll never need to go anywhere else for your design needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="space-y-4">
                <div className="text-4xl">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-foreground">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
