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
