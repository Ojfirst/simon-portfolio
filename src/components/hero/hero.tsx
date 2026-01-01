"use client"

import Image from "next/image"
import heroPhoto from "../../../public/images/simon-profile.jpg";

const Hero = () => {


  return (
    <section
      id="about"
      className="relative flex flex-col-reverse lg:flex-row items-center justify-between gap-8 max-w-7xl mx-auto px-6 py-20"
    >
      {/* Left Content */}
      <div className="flex-1 space-y-6">
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-50">
          Simon Abiodun Aina
        </h1>
        <p className="text-lg text-gray-400 max-w-xl">
          Automobile Operations Veteran & Full-Stack Developer. Building modern
          automotive retail, dealership, and service management software.
        </p>

        <div className="flex gap-4">
          <a
            href="/SimonAina_Resume.pdf"
            download
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 transition text-white font-medium glass-hover"
          >
            Download Resume
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800 transition font-medium glass-hover"
          >
            View Projects
          </a>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex-1 relative w-full max-w-sm lg:max-w-md">
        <div className="rounded-2xl overflow-hidden border border-gray-800 glass p-1">
          <Image
            src={heroPhoto}
            alt="Simon Abiodun Aina"
            className="rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default Hero;
