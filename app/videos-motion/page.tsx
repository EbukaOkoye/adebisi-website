"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";

// Regular YouTube videos
const videos = [
  { id: "v1d3CY0agaA", title: "Video 1", type: "youtube" },
  { id: "bkxA0NOPNgg", title: "Video 2", type: "youtube" },
  { id: "F56nlXHpUYQ", title: "Video 3", type: "youtube" },
  { id: "NSorEhog1hQ", title: "Video 4", type: "youtube" },
  { id: "yy6sTyzonEc", title: "Video 5", type: "youtube" },
  { id: "oNdM45Nz6aE", title: "Video 6", type: "youtube" },
  { id: "Bv2Aa5oGd18", title: "Video 7", type: "youtube" },
];

// YouTube Shorts
const shorts = [
  { id: "fQLetSyk-FQ", title: "Short Animation 1", type: "youtube" },
  { id: "PM9VQ1qqlqo", title: "Short Animation 2", type: "youtube" },
  { id: "GaY6L4kjB7o", title: "Short Animation 3", type: "youtube" },
  { id: "STgvHh65po8", title: "Short Animation 4", type: "youtube" },
  { id: "anMCjRpQ7bk", title: "Short Animation 5", type: "youtube" },
  { id: "lYpVmeDZYJQ", title: "Short Animation 6", type: "youtube" },
  { id: "4VyozJp0jPg", title: "Short Animation 7", type: "youtube" },
  { id: "wXe9cRhUNws", title: "Short Animation 8", type: "youtube" },
  {
    id: "https://www.dropbox.com/scl/fo/2wp7ac57b1auansiaj3ug/AI4DB03zYom7b23zA6VrM08/Adailiya/Videos/2nd%20video.mp4?rlkey=7bdjpscfuo6pa0c8tss54a51n&st=agpcqrg8&raw=1",
    title: "Short 9",
    type: "dropbox",
  },
  {
    id: "https://www.dropbox.com/scl/fo/2wp7ac57b1auansiaj3ug/AIfV0CWY6B44IVeMtmnTAYA/Adailiya/Videos/1st%20video.mp4?rlkey=7bdjpscfuo6pa0c8tss54a51n&st=k5i11gfw&raw=1",
    title: "Short 10",
    type: "dropbox",
  },
];

function VideoModal({
  video,
  isShort,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: {
  video: { id: string; type: string };
  isShort: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && hasPrev) onPrev();
      if (e.key === "ArrowRight" && hasNext) onNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext, hasPrev, hasNext]);

  const renderVideo = () => {
    if (video.type === "youtube") {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full border-none"
        />
      );
    } else if (video.type === "dropbox") {
      // Convert Dropbox link to direct download link if needed
      const videoUrl = video.id.includes("dropbox.com")
        ? video.id.replace("www.dropbox.com", "dl.dropboxusercontent.com")
        : video.id;

      return (
        <video
          src={videoUrl}
          controls
          autoPlay
          className="absolute inset-0 w-full h-full"
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      );
    }
    return null;
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
      onClick={onClose}
    >
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
            e.stopPropagation();
            onPrev();
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
            e.stopPropagation();
            onNext();
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
        <div
          className={`relative ${isShort ? "aspect-[9/16]" : "aspect-video"} bg-black rounded-lg overflow-hidden`}
        >
          {renderVideo()}
        </div>
      </div>
    </div>
  );
}

export default function VideosMotionPage() {
  const [modalVideo, setModalVideo] = useState<{
    id: string;
    type: string;
    index: number;
    listType: "video" | "short";
  } | null>(null);

  const openVideoModal = (
    video: { id: string; type: string },
    index: number,
  ) => {
    setModalVideo({ ...video, index, listType: "video" });
  };

  const openShortModal = (
    short: { id: string; type: string },
    index: number,
  ) => {
    setModalVideo({ ...short, index, listType: "short" });
  };

  const closeModal = () => {
    setModalVideo(null);
  };

  const goToPrev = () => {
    if (!modalVideo) return;
    const list = modalVideo.listType === "video" ? videos : shorts;
    if (modalVideo.index > 0) {
      const prevItem = list[modalVideo.index - 1];
      setModalVideo({
        ...prevItem,
        index: modalVideo.index - 1,
        listType: modalVideo.listType,
      });
    }
  };

  const goToNext = () => {
    if (!modalVideo) return;
    const list = modalVideo.listType === "video" ? videos : shorts;
    if (modalVideo.index < list.length - 1) {
      const nextItem = list[modalVideo.index + 1];
      setModalVideo({
        ...nextItem,
        index: modalVideo.index + 1,
        listType: modalVideo.listType,
      });
    }
  };

  // Helper function to get thumbnail
  const getThumbnail = (item: { id: string; type: string }) => {
    if (item.type === "youtube") {
      return `https://img.youtube.com/vi/${item.id}/hqdefault.jpg`;
    } else if (item.type === "dropbox") {
      // Return a placeholder or video thumbnail for Dropbox videos
      return "/14 Large.jpeg"; // Add a placeholder image to your public folder
    }
    return "/images/video-placeholder.jpg";
  };

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
            <Link
              href="/"
              className="text-black-100 hover:text-orange transition-colors flex items-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Back to Categories</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Category Header */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <h1 className="text-4xl lg:text-6xl font-semibold text-black-100 mb-4 font-bricolage">
            Videos & Motion
          </h1>
          <p className="text-xl text-black-100/70">
            A collection of video productions and motion graphics showcasing
            creative storytelling and visual effects.
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
                    onClick={() => openVideoModal(video, index)}
                    className="absolute inset-0 w-full h-full border-none p-0 cursor-pointer bg-transparent"
                  >
                    <img
                      src={getThumbnail(video)}
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
                    onClick={() => openShortModal(short, index)}
                    className="absolute inset-0 w-full h-full border-none p-0 cursor-pointer bg-transparent"
                  >
                    <img
                      src={getThumbnail(short)}
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
          video={{ id: modalVideo.id, type: modalVideo.type }}
          isShort={modalVideo.listType === "short"}
          onClose={closeModal}
          onPrev={goToPrev}
          onNext={goToNext}
          hasPrev={modalVideo.index > 0}
          hasNext={
            modalVideo.index <
            (modalVideo.listType === "video" ? videos : shorts).length - 1
          }
        />
      )}
    </div>
  );
}
