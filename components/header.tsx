import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Header() {
  return (
    <header className="w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Image
            src="/debisidesigns-logo.png"
            alt="debisidesigns"
            width={200}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Home
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Services
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Portfolio
          </a>
          <a href="#" className="text-foreground hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Get Started</Button>
        </div>
      </div>
    </header>
  )
}
