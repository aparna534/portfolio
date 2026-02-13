"use client";

import Image from "next/image";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-screen w-full flex items-center justify-center pt-20 pb-12 font-sans"
    >
      <div className="w-full max-w-7xl px-8 grid grid-cols-1 md:grid-cols-[1.3fr_0.7fr] gap-8 items-start">

        {/* LEFT — TEXT */}
        <div>

          <p className="text-sm tracking-widest text-gray-500 mb-3">
            EDUCATION
          </p>

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-10">
            Academic Foundation<br />
            Built on Curiosity<br />
            and Discipline
          </h1>

          <div className="max-w-3xl space-y-8">

            {/* VIT */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Vellore Institute of Technology (VIT)
              </h2>
              <p className="text-gray-500 mt-1">
                2022 – 2026
              </p>
              <p className="text-gray-800 mt-3">
                B.Tech in Computer Science
              </p>
              <p className="text-gray-800">
                CGPA: 8.19
              </p>
            </div>

            {/* High School */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-black">
                Delhi Public School (DPS) East
              </h2>
              <p className="text-gray-500 mt-1">
                PCM + Computer Science
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT — IMAGE */}
        <div className="flex justify-end pt-2">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/bg2.jpg"   // You can change this to any image
              alt="Education"
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
