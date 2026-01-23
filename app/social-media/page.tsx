"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

// Social media gallery images
const socialMediaImages = [
  {
    id: 1,
    src: "/images/artboard-2-copy-403x-1639x2048.png",
    alt: "Masaha - Self-Propelled Telescopic Boom Lifts",
  },
  {
    id: 2,
    src: "/images/artboard-2-403x-1638x2048.png",
    alt: "Masaha - Self-Propelled Electrical Scissor Lifts",
  },
  {
    id: 3,
    src: "/images/dubai-1536x1536.jpg",
    alt: "Ribdex - Travel to Dubai",
  },
  {
    id: 4,
    src: "/images/artboard-1-copyads-1536x1536.png",
    alt: "Al-Ameen Integrated College - Admission",
  },
  {
    id: 5,
    src: "/images/artboard-1-403x-1638x2048.png",
    alt: "Masaha - Diesel Operated Forklifts",
  },
  {
    id: 6,
    src: "/images/artboard-4-403x-1639x2048.png",
    alt: "Masaha - Self-Propelled Articulating Boom Lifts",
  },
  {
    id: 7,
    src: "/images/1c54d0133061217.png",
    alt: "Snidel Travels - Visit European Countries",
  },
  {
    id: 8,
    src: "/images/1c85aa133061217.png",
    alt: "Snidel Travels - Bank on Snidel",
  },
  {
    id: 9,
    src: "/images/uk-scotland-visa.png",
    alt: "Snidel Travels - UK Scotland Visa",
  },
  {
    id: 10,
    src: "/images/usa-visa.png",
    alt: "Snidel Travels - USA Visa",
  },
  {
    id: 11,
    src: "/images/schengen-visa.png",
    alt: "Snidel Travels - Schengen Visa",
  },
  {
    id: 12,
    src: "/images/kuwait-visa.png",
    alt: "Snidel Travels - Kuwait Visa",
  },
  {
    id: 13,
    src: "/images/study-ukraine.png",
    alt: "Snidel Travels - Study in Ukraine",
  },
  {
    id: 14,
    src: "/images/dubai-ribdex.jpg",
    alt: "Ribdex - Travel to Dubai",
  },
]

export default function SocialMediaGalleryPage() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? socialMediaImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === socialMediaImages.length - 1 ? 0 : prev + 1))
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
          <h1 className="text-4xl lg:text-6xl font-semibold text-black-100 mb-4">Social Media</h1>
          <p className="text-xl text-black-100">
            {socialMediaImages.length} {socialMediaImages.length === 1 ? "design" : "designs"}
          </p>
        </div>
      </section>

      {/* Image Gallery Grid */}
      <section className="pb-20">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(1, 1fr)",
              gap: "1.5rem",
            }}
            className="sm:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4"
          >
            {socialMediaImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => openLightbox(index)}
                className="group block bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-primary transition-all duration-300 hover:shadow-lg w-full cursor-pointer"
              >
                <div className="relative aspect-[4/5] overflow-hidden w-full">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Next button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 p-2 bg-black/50 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>

          {/* Image */}
          <div className="relative w-full h-full max-w-4xl max-h-[90vh] mx-4">
            <Image
              src={socialMediaImages[currentIndex].src || "/placeholder.svg"}
              alt={socialMediaImages[currentIndex].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {currentIndex + 1} / {socialMediaImages.length}
          </div>
        </div>
      )}
    </div>
  )
}
