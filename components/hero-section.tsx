import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="px-6 py-20 lg:py-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Hire Full-Service Design Agency For A Simple Monthly Fee.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Create stunning designs and grow your business with our unlimited design subscription. Get access to
                expert designers, fast turnarounds, and unlimited revisions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                View Plans
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center">
              <div className="w-64 h-64 bg-white rounded-xl shadow-lg flex items-center justify-center">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" className="text-primary">
                  <path d="M60 20L80 40H40L60 20Z" fill="currentColor" opacity="0.8" />
                  <path d="M20 60L40 80V40L20 60Z" fill="currentColor" opacity="0.6" />
                  <path d="M100 60L80 40V80L100 60Z" fill="currentColor" opacity="0.6" />
                  <path d="M60 100L40 80H80L60 100Z" fill="currentColor" opacity="0.8" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
