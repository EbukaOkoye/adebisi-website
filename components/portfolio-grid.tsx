import { Card } from "@/components/ui/card"

export function PortfolioGrid() {
  const projects = [
    {
      title: "Create Winning Proposals in Minutes",
      category: "Web Design",
      image: "/modern-web-design-proposal-tool.jpg",
      color: "bg-slate-900",
    },
    {
      title: "Empowering The Decentralized Future",
      category: "Branding",
      image: "/blockchain-decentralized-future-branding.jpg",
      color: "bg-blue-500",
    },
    {
      title: "Turn Meetings Into Action",
      category: "App Design",
      image: "/meeting-productivity-app-interface.jpg",
      color: "bg-slate-800",
    },
    {
      title: "Unique Playlist with AI",
      category: "UI/UX",
      image: "/ai-music-playlist-interface-design.jpg",
      color: "bg-purple-600",
    },
  ]

  return (
    <section className="px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className={`${project.color} h-48 relative overflow-hidden`}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-sm leading-tight text-balance">{project.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
