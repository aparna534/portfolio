"use client";

export default function Education() {
  return (
    <section
      id="education"
      className="min-h-[70vh] w-full flex items-center justify-center pt-24 pb-16 font-sans"
    >
      <div className="w-full max-w-4xl px-8">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          EDUCATION
        </h1>

        <div className="space-y-12">

          {/* VIT */}
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Vellore Institute of Technology ,Vellore
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

          {/* DPS */}
          <div>
            <h2 className="text-2xl font-semibold text-black">
              Delhi Public School (DPS) East,Bangalore
            </h2>
            <p className="text-gray-500 mt-1">
              PCM + Computer Science
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
