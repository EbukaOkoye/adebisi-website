"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react"

// Regular YouTube videos
const videos = [
  { id: "v1d3CY0agaA", title: "Video 1" },
  { id: "bkxA0NOPNgg", title: "Video 2" },
  { id: "F56nlXHpUYQ", title: "Video 3" },
  { id: "NSorEhog1hQ", title: "Video 4" },
  { id: "yy6sTyzonEc", title: "Video 5" },
  { id: "oNdM45Nz6aE", title: "Video 6" },
  { id: "Bv2Aa5oGd18", title: "Video 7" },
]

// YouTube Shorts
const shorts = [
  { id: "fQLetSyk-FQ", title: "Short Animation 1" },
  { id: "PM9VQ1qqlqo", title: "Short Animation 2" },
  { id: "GaY6L4kjB7o", title: "Short Animation 3" },
  { id: "STgvHh65po8", title: "Short Animation 4" },
  { id: "anMCjRpQ7bk", title: "Short Animation 5" },
  { id: "lYpVmeDZYJQ", title: "Short Animation 6" },
  { id: "4VyozJp0jPg", title: "Short Animation 7" },
  { id: "wXe9cRhUNws", title: "Short Animation 8" },
]

function VideoModal({
  videoId,
  isShort,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  videoId: string
  isShort: boolean
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowLeft" && hasPrev) onPrev()
      if (e.key === "ArrowRight" && hasNext) onNext()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose, onPrev, onNext, hasPrev, hasNext])

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      {/* Previous button */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-[#ff4f01] rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Next button */}
      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/10 hover:bg-[#ff4f01] rounded-full flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Video container */}
      <div
        className={`relative ${isShort ? "w-[350px] max-w-[90vw]" : "w-full max-w-4xl mx-4"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`relative ${isShort ? "aspect-[9/16]" : "aspect-video"} bg-black rounded-lg overflow-hidden`}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-none"
          />
        </div>
      </div>
    </div>
  )
}

export default function VideosMotionPage() {
  const [modalVideo, setModalVideo] = useState<{ id: string; index: number; type: "video" | "short" } | null>(null)

  const openVideoModal = (id: string, index: number) => {
    setModalVideo({ id, index, type: "video" })
  }

  const openShortModal = (id: string, index: number) => {
    setModalVideo({ id, index, type: "short" })
  }

  const closeModal = () => {
    setModalVideo(null)
  }

  const goToPrev = () => {
    if (!modalVideo) return
    const list = modalVideo.type === "video" ? videos : shorts
    if (modalVideo.index > 0) {
      setModalVideo({
        ...modalVideo,
        id: list[modalVideo.index - 1].id,
        index: modalVideo.index - 1,
      })
    }
  }

  const goToNext = () => {
    if (!modalVideo) return
    const list = modalVideo.type === "video" ? videos : shorts
    if (modalVideo.index < list.length - 1) {
      setModalVideo({
        ...modalVideo,
        id: list[modalVideo.index + 1].id,
        index: modalVideo.index + 1,
      })
    }
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
            <Link href="/" className="text-black-100 hover:text-orange transition-colors flex items-center gap-2">
              <i className="ri-arrow-left-line"></i>
              <span>Back to Categories</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-semibold text-black-100 mb-4 font-bricolage">Videos & Motion</h1>
          <p className="text-xl text-black-100/70">
            A collection of video productions and motion graphics showcasing creative storytelling and visual effects.
          </p>
        </div>
      </section>

      {/* Videos Section */}
      <section className="pb-16">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black-100 mb-8 font-bricolage flex items-center gap-3">
            <span className="w-2 h-8 bg-[#ff4f01] rounded-full"></span>
            Videos
          </h2>
          <div className="grid-layout-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#ff4f01] transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-video overflow-hidden">
                  <button
                    onClick={() => openVideoModal(video.id, index)}
                    className="absolute inset-0 w-full h-full border-none p-0 cursor-pointer bg-transparent"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 bg-[#ff4f01] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Short Animations Section */}
      <section className="py-16 border-t border-[#e5e5e5]">
        <div className="container">
          <h2 className="text-2xl lg:text-3xl font-semibold text-black-100 mb-8 font-bricolage flex items-center gap-3">
            <span className="w-2 h-8 bg-[#ff4f01] rounded-full"></span>
            Short Animations
          </h2>
          <div className="grid-layout-4 gap-6">
            {shorts.map((short, index) => (
              <div
                key={short.id}
                className="group bg-white rounded-2xl overflow-hidden border border-[#e5e5e5] hover:border-[#ff4f01] transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative aspect-square overflow-hidden">
                  <button
                    onClick={() => openShortModal(short.id, index)}
                    className="absolute inset-0 w-full h-full border-none p-0 cursor-pointer bg-transparent"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${short.id}/hqdefault.jpg`}
                      alt={short.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Play button overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-12 h-12 bg-[#ff4f01] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalVideo && (
        <VideoModal
          videoId={modalVideo.id}
          isShort={modalVideo.type === "short"}
          onClose={closeModal}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={modalVideo.index > 0}
          hasNext={modalVideo.index < (modalVideo.type === "video" ? videos : shorts).length - 1}
        />
      )}
    </div>
  )
}
