import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingSection() {
  const plans = [
    {
      name: "Standard",
      price: "$3,995",
      period: "/month",
      description: "One request at a time. Pause or cancel anytime.",
      features: [
        "One request at a time",
        "Average 48 hour delivery",
        "Unlimited brands",
        "Unlimited users",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
      buttonText: "Get started",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Pro",
      price: "$7,995",
      period: "/month",
      description: "Double the requests. Perfect for companies with ongoing design needs.",
      features: [
        "Two requests at a time",
        "Average 48 hour delivery",
        "Unlimited brands",
        "Unlimited users",
        "Easy credit-card payments",
        "Pause or cancel anytime",
      ],
      buttonText: "Get started",
      buttonVariant: "default" as const,
      popular: true,
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Membership</h2>
          <p className="text-muted-foreground">Choose the perfect plan for your design needs.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`p-8 border-2 ${plan.popular ? "border-primary shadow-xl" : "border-border shadow-lg"} relative`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline mt-2">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  variant={plan.buttonVariant}
                  className={`w-full ${plan.buttonVariant === "default" ? "bg-primary hover:bg-primary/90 text-primary-foreground" : ""}`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
