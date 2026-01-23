import Image from "next/image"
import Link from "next/link"

export default function BattalionBrandingPage() {
  return (
    <div className="min-h-screen bg-[#E1CDAF]">
      {/* Header */}
      <header className="py-8 bg-[#564B49]">
        <div className="container">
          <Link href="/" className="text-white hover:text-[#E1CDAF] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="text-5xl lg:text-7xl font-bold text-[#564B49] mb-6 font-serif">
              66 Battalion - Commandos 25
            </h1>
            <p className="text-xl text-[#564B49] max-w-3xl mx-auto leading-relaxed">
              Complete brand identity system for the elite 66 Battalion Commandos 25 unit, featuring military-inspired
              design elements and a cohesive visual language.
            </p>
          </div>

          {/* Main Logo Display */}
          <div className="max-w-2xl mx-auto mb-20">
            <div className="bg-white p-12 rounded-lg shadow-xl">
              <Image
                src="/images/battalion/logo-full-color.jpg"
                alt="66 Battalion Commandos 25 - Full Color Logo"
                width={1080}
                height={1080}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Logo Variations */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#564B49] mb-12 text-center font-serif">Logo Variations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-[#E1CDAF] p-8 rounded-lg">
              <Image
                src="/images/battalion/logo-grayscale.jpg"
                alt="Grayscale Logo"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Grayscale Version</p>
            </div>
            <div className="bg-[#E1CDAF] p-8 rounded-lg">
              <Image
                src="/images/battalion/shield-sketch.jpg"
                alt="Shield Sketch"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Shield Outline</p>
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="py-20 bg-[#E1CDAF]">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#564B49] mb-12 text-center font-serif">Typography</h2>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-xl">
            <Image
              src="/images/battalion/typography.jpg"
              alt="Typography - RNS Camelia Font Family"
              width={1080}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Color Palette */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#564B49] mb-12 text-center font-serif">Color Palette</h2>
          <div className="max-w-4xl mx-auto bg-[#E1CDAF] p-12 rounded-lg shadow-xl">
            <Image
              src="/images/battalion/color-codes.jpg"
              alt="Color Codes - RGB and CMYK"
              width={1080}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Design Elements */}
      <section className="py-20 bg-[#E1CDAF]">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#564B49] mb-12 text-center font-serif">Design Elements</h2>
          <div className="max-w-4xl mx-auto bg-white p-12 rounded-lg shadow-xl">
            <Image
              src="/images/battalion/illustrations.jpg"
              alt="Individual Design Elements"
              width={1080}
              height={1080}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-4xl font-bold text-[#564B49] mb-12 text-center font-serif">Brand Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#E1CDAF] p-8 rounded-lg shadow-lg">
              <Image
                src="/images/battalion/banner.jpg"
                alt="Banner Application"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Banner Design</p>
            </div>
            <div className="bg-[#E1CDAF] p-8 rounded-lg shadow-lg">
              <Image
                src="/images/battalion/flag.jpg"
                alt="Flag Application"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Flag Design</p>
            </div>
            <div className="bg-[#E1CDAF] p-8 rounded-lg shadow-lg">
              <Image
                src="/images/battalion/pattern.jpg"
                alt="Pattern Application"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Pattern Design</p>
            </div>
            <div className="bg-[#E1CDAF] p-8 rounded-lg shadow-lg">
              <Image
                src="/images/battalion/background.jpg"
                alt="Background Application"
                width={1080}
                height={1080}
                className="w-full h-auto mb-4"
              />
              <p className="text-center text-[#564B49] font-semibold">Background Treatment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#564B49]">
        <div className="container">
          <p className="text-center text-white text-lg">66 Battalion - Commandos 25 Brand Identity © 2025</p>
        </div>
      </footer>
    </div>
  )
}
