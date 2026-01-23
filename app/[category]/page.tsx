import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getProjectsByCategory } from "@/lib/projects-data"

const categoryNames: Record<string, string> = {
  branding: "Branding",
  "print-design": "Print Design",
  "social-media": "Social Media",
  presentations: "Presentations",
  "videos-motion": "Videos & Motion",
  photography: "Photography",
  "web-design": "Web Design",
  elearning: "eLearning Course Designs",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const projects = getProjectsByCategory(params.category)
  const categoryName = categoryNames[params.category]

  if (!categoryName) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="py-8 border-b border-[#e5e5e5]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src="/images/design-mode/logo(2).png"
                alt="debisi designs"
                width={160}
                height={48}
                className="max-w-[160px]"
              />
            </Link>
            <Link href="/" className="text-black-100 hover:text-primary transition-colors flex items-center gap-2">
              <i className="ri-arrow-left-line"></i>
              <span>Back to Categories</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-semibold text-black-100 mb-4">{categoryName}</h1>
          <p className="text-xl text-black-100">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-20">
        <div className="container">
          {projects.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-black-100">No projects available in this category yet.</p>
              <Link href="/" className="inline-block mt-6 text-primary hover:underline">
                Browse other categories
              </Link>
            </div>
          ) : (
            <div className="grid-layout-3 gap-8">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/${params.category}/${project.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-primary transition-all duration-300 hover:shadow-lg w-full"
                >
                  <div className="relative aspect-[4/3] overflow-hidden w-full">
                    <Image
                      src={project.thumbnail || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-black-100 mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-black-100 leading-relaxed line-clamp-2">{project.description}</p>
                    {project.year && <p className="text-sm text-black-100 mt-3 opacity-60">{project.year}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
