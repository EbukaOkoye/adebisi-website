"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectById, getProjectsByCategory } from "@/lib/projects-data";
import logo3 from "@/public/images/design-mode/logo(3).png";

const categoryNames: Record<string, string> = {
  branding: "Branding",
  "print-design": "Print Design",
  "social-media": "Social Media",
  presentations: "Presentations",
  "videos-motion": "Videos & Motion",
  photography: "Photography",
  "web-design": "Web Design",
  elearning: "eLearning Course Designs",
};

export default function ProjectDetailPage({
  params,
}: {
  params: { category: string; project: string };
}) {
  const project = getProjectById(params.project);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project || project.category !== params.category) {
    notFound();
  }

  const categoryProjects = getProjectsByCategory(params.category);
  const currentIndex = categoryProjects.findIndex(
    (p) => p.id === params.project,
  );
  const prevProject =
    currentIndex > 0 ? categoryProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < categoryProjects.length - 1
      ? categoryProjects[currentIndex + 1]
      : null;

  const categoryName = categoryNames[params.category];

  return (
    <div className="min-h-screen bg-background">
      {/* Header with logo */}
      <header className="py-8 border-b border-[#e5e5e5]">
        <div className="container">
          <div className="flex justify-between items-center">
            <Link href="/">
              <Image
                src={logo3}
                alt="debisi designs"
                width={190}
                height={48}
                className="max-w-[190px]"
              />
            </Link>
            <Link
              href={`/${params.category}`}
              className="text-black-100 hover:text-primary transition-colors flex items-center gap-2"
            >
              <i className="ri-arrow-left-line"></i>
              <span>Back to {categoryName}</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Project Header */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Link
                href={`/${params.category}`}
                className="inline-flex items-center gap-2 text-primary hover:underline mb-4"
              >
                <i className="ri-arrow-left-line"></i>
                {categoryName}
              </Link>
            </div>
            <h1 className="text-4xl lg:text-6xl font-semibold text-black-100 mb-6 font-bricolage">
              {project.title}
            </h1>
            <p className="text-lg text-black-100 leading-relaxed mb-8">
              {project.description}
            </p>

            {/* Project Info Grid */}
            <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-b border-[#e5e5e5]">
              {project.client && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black-100 opacity-60 mb-2 font-sans">
                    Client
                  </h3>
                  <p className="text-base font-medium text-black-100">
                    {project.client}
                  </p>
                </div>
              )}
              {project.year && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black-100 opacity-60 mb-2 font-sans">
                    Year
                  </h3>
                  <p className="text-base font-medium text-black-100">
                    {project.year}
                  </p>
                </div>
              )}
              {project.services && project.services.length > 0 && (
                <div>
                  <h3 className="text-sm uppercase tracking-wider text-black-100 opacity-60 mb-2 font-sans">
                    Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <span
                        key={index}
                        className="text-sm px-3 py-1 bg-white border border-[#e5e5e5] rounded-full text-black-100"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {params.category === "web-design" && project.liveUrl && (
              <div className="mt-8">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  <i className="ri-external-link-line"></i>
                  <span>View Live Site</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PDF Viewer Section */}
      {project.pdfUrl && (
        <section className="py-12 lg:py-20 bg-white">
          <div className="container">
            <h2 className="text-3xl lg:text-4xl font-semibold text-black-100 mb-8 font-bricolage">
              View Calendar
            </h2>
            <div className="max-w-5xl mx-auto">
              <div className="bg-background rounded-2xl border border-[#e5e5e5] overflow-hidden shadow-lg">
                <iframe
                  src={`${project.pdfUrl}#toolbar=1&navpanes=0&scrollbar=1`}
                  className="w-full h-[600px] md:h-[800px] lg:h-[900px]"
                  title={`${project.title} PDF`}
                />
              </div>
              <div className="mt-6 flex justify-center">
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  // download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors font-medium"
                >
                  <i className="ri-download-line"></i>
                  <span>Download PDF</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Project Images Gallery */}
      <section className="py-12 lg:py-20">
        <div className="container">
          <h2 className="text-3xl lg:text-4xl font-semibold text-black-100 mb-12 font-bricolage">
            Project Gallery
          </h2>
          <div
            className={
              params.category === "branding"
                ? "flex flex-col items-center gap-6 max-w-4xl mx-auto"
                : "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            }
          >
            {project.images.map((image, index) => (
              <div
                key={index}
                className={
                  params.category === "branding"
                    ? "relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-shadow"
                    : "relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-md hover:shadow-lg transition-shadow"
                }
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-black-100 text-xs font-medium flex items-center gap-1.5">
                    <i className="ri-zoom-in-line"></i>
                    View
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      {(project.challenge ||
        project.solution ||
        project.process ||
        project.results) && (
        <section className="py-12 lg:py-20 bg-white">
          <div className="container">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-semibold text-black-100 mb-12 font-bricolage">
                Design Process
              </h2>

              <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                {/* Challenge */}
                {project.challenge && (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-black-100 mb-4 flex items-center gap-3 font-bricolage">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className="ri-question-line text-xl"></i>
                      </span>
                      The Challenge
                    </h3>
                    <p className="text-base text-black-100 leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Solution */}
                {project.solution && (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-black-100 mb-4 flex items-center gap-3 font-bricolage">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className="ri-lightbulb-line text-xl"></i>
                      </span>
                      The Solution
                    </h3>
                    <p className="text-base text-black-100 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                )}

                {/* Process Steps */}
                {project.process && project.process.length > 0 && (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-black-100 mb-6 flex items-center gap-3 font-bricolage">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className="ri-route-line text-xl"></i>
                      </span>
                      Process
                    </h3>
                    <div className="space-y-6">
                      {project.process.map((step, index) => (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold text-sm">
                            {index + 1}
                          </div>
                          <p className="text-base text-black-100 leading-relaxed pt-1">
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Results */}
                {project.results && (
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-black-100 mb-4 flex items-center gap-3 font-bricolage">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className="ri-trophy-line text-xl"></i>
                      </span>
                      Results
                    </h3>
                    <p className="text-base text-black-100 leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                )}

                {/* Tools Used */}
                {project.tools && project.tools.length > 0 && (
                  <div className="flex flex-col md:col-span-2">
                    <h3 className="text-xl font-semibold text-black-100 mb-4 flex items-center gap-3 font-bricolage">
                      <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <i className="ri-tools-line text-xl"></i>
                      </span>
                      Tools & Technologies
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.tools.map((tool, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-background border border-[#e5e5e5] rounded-full text-black-100 text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial Section */}
      {project.testimonial && (
        <section className="py-12 lg:py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-3xl p-8 lg:p-12 border border-[#e5e5e5]">
                <i className="ri-double-quotes-l text-5xl text-primary mb-6 block"></i>
                <blockquote className="text-xl lg:text-2xl text-black-100 leading-relaxed mb-8 font-bricolage">
                  {project.testimonial.quote}
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <i className="ri-user-line text-xl text-primary"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-black-100">
                      {project.testimonial.author}
                    </p>
                    <p className="text-black-100 opacity-60 text-sm">
                      {project.testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 lg:py-16 border-t border-[#e5e5e5]">
        <div className="container">
          <div className="flex items-center justify-between gap-4">
            {/* Previous Project */}
            {prevProject ? (
              <Link
                href={`/${params.category}/${prevProject.id}`}
                className="group flex items-center gap-4 flex-1 max-w-md p-4 rounded-2xl hover:bg-white transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-[#e5e5e5] flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors flex-shrink-0">
                  <i className="ri-arrow-left-line text-xl text-black-100 group-hover:text-primary transition-colors"></i>
                </div>
                <div className="overflow-hidden">
                  <span className="text-sm text-black-100/60 block">
                    Previous
                  </span>
                  <span className="font-medium text-black-100 group-hover:text-primary transition-colors truncate block">
                    {prevProject.title}
                  </span>
                </div>
              </Link>
            ) : (
              <div className="flex-1 max-w-md" />
            )}

            {/* Back to Category */}
            <Link
              href={`/${params.category}`}
              className="hidden md:flex flex-col items-center gap-2 px-6 py-3 rounded-xl hover:bg-white transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-[#e5e5e5] flex items-center justify-center">
                <i className="ri-grid-line text-lg text-black-100"></i>
              </div>
              <span className="text-sm text-black-100/60">All Projects</span>
            </Link>

            {/* Next Project */}
            {nextProject ? (
              <Link
                href={`/${params.category}/${nextProject.id}`}
                className="group flex items-center gap-4 flex-1 max-w-md p-4 rounded-2xl hover:bg-white transition-colors justify-end text-right"
              >
                <div className="overflow-hidden">
                  <span className="text-sm text-black-100/60 block">Next</span>
                  <span className="font-medium text-black-100 group-hover:text-primary transition-colors truncate block">
                    {nextProject.title}
                  </span>
                </div>
                <div className="w-12 h-12 rounded-full border border-[#e5e5e5] flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-colors flex-shrink-0">
                  <i className="ri-arrow-right-line text-xl text-black-100 group-hover:text-primary transition-colors"></i>
                </div>
              </Link>
            ) : (
              <div className="flex-1 max-w-md" />
            )}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center bg-white rounded-full hover:bg-gray-100 transition-colors z-10"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-2xl text-black-100"></i>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
}
