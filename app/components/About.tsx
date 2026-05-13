"use client";

import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center pt-20 pb-12 font-sans"
    >
      <div className="w-full max-w-7xl px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8 items-center">

        {/* LEFT — TEXT */}
        <div>

          <p className="text-sm tracking-widest text-gray-500 mb-3">
            ABOUT ME
          </p>

          {/* TAGLINE */}
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-6">
            Bringing Thoughtful Structure To Real Impact
          </h1>

          {/* TEXT — WIDER FRAME */}
          <div className="max-w-3xl">

            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-5">
              I enjoy turning complex, fragmented problems into clarity. I thrive in environments where information is scattered, ownership is unclear, and critical decisions are being made without clear structure. I naturally take responsibility for understanding the full context, mapping hidden gaps, and creating solutions that actually work in practice.
            </p>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-5">
              I approach every challenge with persistence and attention to detail. I ask questions others might skip, validate assumptions rigorously, and test solutions iteratively until they are practical, reliable, and implementable.
            </p>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              I combine analytical rigor, operational insight, and disciplined execution. I communicate findings clearly, bridge gaps between technical and non-technical stakeholders, and deliver actionable recommendations. I work best in teams that value curiosity, ownership, and structured thinking, and my goal is to transform ambiguity into clear, impactful decisions.
            </p>

          </div>
        </div>

        {/* RIGHT — IMAGE (PUSHED RIGHT) */}
        <div className="flex justify-end -mt-12">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/me.jpg"
              alt="Aparna"
              width={230}
              height={300}
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}