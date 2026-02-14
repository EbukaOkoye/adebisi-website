import data from '@/lib/projects.json'

export interface Project {
  id: string
  title: string
  category: string
  description: string
  client?: string
  year?: string
  services?: string[]
  images: string[]
  thumbnail: string
  challenge?: string
  solution?: string
  process?: string[]
  results?: string
  tools?: string[]
  testimonial?: {
    quote: string
    author: string
    role: string
  }
  liveUrl?: string
  pdfUrl?: string // Added for PDF links
}

export const projects: Project[] = data

export function getProjectsByCategory(category: string): Project[] {
  return projects.filter((project) => project.category === category)
}

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}

export function getAllCategories(): string[] {
  return Array.from(new Set(projects.map((project) => project.category)))
}


// {
//     "id": "product-photography",
//     "title": "Product Photography Session",
//     "category": "photography",
//     "description": "Professional product photography for e-commerce",
//     "client": "E-commerce Store",
//     "year": "2024",
//     "services": ["Product Photography", "Photo Editing", "Retouching"],
//     "thumbnail": "/placeholder.svg?height=400&width=600",
//     "images": [
//       "/placeholder.svg?height=600&width=800",
//       "/placeholder.svg?height=600&width=800",
//       "/placeholder.svg?height=600&width=800"
//     ],
//     "challenge": "Create high-quality product photography that showcases e-commerce products in the best light, maintains consistency across the catalog, and drives conversions through professional presentation.",
//     "solution": "Executed a professional photography session with controlled lighting, multiple angles, and lifestyle shots. Applied consistent editing and retouching to create a cohesive product catalog that elevates the brand's perceived value.",
//     "process": [
//       "Pre-Production - Planned shot list and lighting setups",
//       "Photography Session - Captured products from multiple angles",
//       "Selection - Curated best shots for each product",
//       "Editing - Color correction and background removal",
//       "Retouching - Final polish and consistency checks"
//     ],
//     "results": "The professional product photography increased conversion rates by 45%, reduced return rates by 30%, and elevated the brand's premium positioning in the market.",
//     "tools": [
//       "Canon EOS R5",
//       "Profoto Lighting",
//       "Adobe Lightroom",
//       "Adobe Photoshop"
//     ],
//     "testimonial": {
//       "quote": "The product photos transformed our online store. Sales increased immediately and customers comment on how professional everything looks.",
//       "author": "Jennifer Martinez",
//       "role": "Owner, E-commerce Store"
//     }
//   },