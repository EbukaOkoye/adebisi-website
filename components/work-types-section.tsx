import { Card } from "@/components/ui/card"

export function WorkTypesSection() {
  const workTypes = [
    {
      title: "Product Design",
      description: "Mobile apps, web apps, dashboards, you name it. We design it all.",
      image: "/mobile-app-product-design-interface.jpg",
      color: "bg-green-100",
    },
    {
      title: "Graphic Design",
      description: "Social media graphics, print design, presentations, and more.",
      image: "/graphic-design-business-card-mockup.jpg",
      color: "bg-slate-900",
    },
    {
      title: "Marketing Design",
      description: "Landing pages, email templates, ads, and marketing materials.",
      image: "/marketing-landing-page.png",
      color: "bg-green-400",
    },
  ]

  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
            Apps, websites & branding
          </h2>
          <p className="text-muted-foreground">Our expert services for every design need.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {workTypes.map((type, index) => (
            <Card
              key={index}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className={`${type.color} h-48 relative`}>
                <img src={type.image || "/placeholder.svg"} alt={type.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">{type.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{type.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
