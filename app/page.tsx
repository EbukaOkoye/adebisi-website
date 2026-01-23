import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  const categories = [
    {
      slug: "branding",
      icon: "ri-book-2-line",
      title: "Branding",
      description: "Brand guidelines, style guides, and brand documentation.",
    },
    {
      slug: "print-design",
      icon: "ri-printer-line",
      title: "Print Design",
      description: "Brochures, flyers, posters, and print materials.",
    },
    {
      slug: "social-media",
      icon: "ri-instagram-line",
      title: "Social Media",
      description: "Posts, stories, covers, and social media graphics",
    },
    {
      slug: "presentations",
      icon: "ri-slideshow-line",
      title: "Presentations",
      description: "Pitch decks, slide decks, and presentation design.",
    },
    {
      slug: "videos-motion",
      icon: "ri-play-circle-line",
      title: "Videos & Motion",
      description: "Video editing, motion graphics, and animated content.",
    },
    {
      slug: "photography",
      icon: "ri-image-2-line",
      title: "Photography",
      description: "Portrait, Landscape, Aerial Views, and lot more",
    },
    {
      slug: "web-design",
      icon: "ri-computer-line",
      title: "Web Design",
      description: "Landing Pages, Responsive web designs, Ecommerce",
    },
    {
      slug: "elearning",
      icon: "ri-book-open-line",
      title: "eLearning Course Designs",
      description: "Articulate, Rise 36, LMS and lot more",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with centered logo */}
      <header className="py-12 lg:py-20">
        <div className="container">
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/images/design-mode/logo(2).png"
                alt="debisi designs"
                width={300}
                height={60}
                className="max-w-[300px]"
              />
            </Link>
          </div>
        </div>
      </header>

      {/* Category Cards */}
      <section className="pb-20">
        <div className="container">
          <div className="grid-layout-4 gap-6 max-w-7xl mx-auto">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/${category.slug}`}
                className="group p-8 bg-white rounded-2xl border border-[#e5e5e5] hover:border-primary transition-all duration-300 hover:shadow-lg w-full"
              >
                <div className="flex flex-col items-start">
                  <div className="w-16 h-16 flex items-center justify-center mb-6">
                    <i className={`${category.icon} text-5xl text-primary`}></i>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-black-100 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-base text-black-100 leading-relaxed">{category.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
