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
            Bringing Thoughtful<br />
            Structure to<br />
            Real Impact
          </h1>

          {/* TEXT — WIDER FRAME */}
          <div className="max-w-3xl">

            <p className="text-gray-800 text-base md:text-lg leading-relaxed mb-5">
              I’m someone who pays close attention to how things really work not how
              they’re supposed to work on paper but how decisions actually get made
              how people navigate constraints and where systems quietly fall short.
              I tend to notice the in between moments when information doesn’t travel
              cleanly when ownership feels fuzzy or when effort is high but impact
              stays low. That’s where my thinking naturally goes not to surface level
              fixes but to the patterns underneath that shape outcomes.
            </p>

            <p className="text-gray-800 text-base md:text-lg leading-relaxed">
              What I bring is a way of making those patterns visible and usable. I’m
              strong at stepping into unclear situations and creating structure that
              helps people move forward with confidence clearer framing sharper
              priorities and better signals about what really matters. I don’t rely
              only on logic or only on instinct I work at the intersection of both
              using disciplined thinking while staying grounded in real world
              context. My goal is always the same help teams make better decisions
              earlier and with less friction because that’s where meaningful progress
              actually comes from.
            </p>

          </div>
        </div>

        {/* RIGHT — IMAGE (PUSHED RIGHT) */}
        <div className="flex justify-end -mt-6">

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
