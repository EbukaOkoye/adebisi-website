"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Create Winning Proposals in Minutes",
      image: "/business-proposal-creation-tool-interface.jpg",
      color: "bg-slate-900",
    },
    {
      title: "Empowering The Decentralized Future",
      image: "/blockchain-decentralized-platform-design.jpg",
      color: "bg-blue-500",
    },
    {
      title: "Turn Meetings Into Action",
      image: "/meeting-productivity-dashboard.jpg",
      color: "bg-slate-800",
    },
    {
      title: "Unique Playlist with AI",
      image: "/ai-music-streaming-interface.jpg",
      color: "bg-purple-600",
    },
    {
      title: "E-Commerce Platform Redesign",
      image: "/modern-e-commerce-platform-interface.jpg",
      color: "bg-emerald-600",
    },
    {
      title: "Healthcare App Interface",
      image: "/healthcare-medical-app-dashboard.jpg",
      color: "bg-teal-500",
    },
    {
      title: "Real Estate Listing Platform",
      image: "/real-estate-website.png",
      color: "bg-orange-500",
    },
    {
      title: "Fitness Tracking Dashboard",
      image: "/fitness-workout-tracking-app-interface.jpg",
      color: "bg-red-500",
    },
    {
      title: "Food Delivery App Design",
      image: "/food-delivery-restaurant-app.jpg",
      color: "bg-yellow-600",
    },
    {
      title: "Travel Booking Platform",
      image: "/travel-booking-vacation-planning-website.jpg",
      color: "bg-indigo-600",
    },
    {
      title: "Financial Dashboard",
      image: "/financial-analytics-dashboard-interface.jpg",
      color: "bg-cyan-600",
    },
    {
      title: "Social Media Management Tool",
      image: "/social-media-management-dashboard.jpg",
      color: "bg-pink-600",
    },
  ]

  return (
    <>
      <section id="projects" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">Featured Projects</h2>
            <p className="text-muted-foreground">Some of our recent work that we're proud of.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg cursor-pointer aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => setSelectedProject(index)}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {selectedProject !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-6xl w-full max-h-[90vh] animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute -top-12 right-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors backdrop-blur-sm"
              aria-label="Close modal"
            >
              <i className="ri-close-line text-2xl"></i>
            </button>

            <img
              src={projects[selectedProject].image || "/placeholder.svg"}
              alt={projects[selectedProject].title}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}
