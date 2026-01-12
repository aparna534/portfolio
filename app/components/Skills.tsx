"use client";

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen w-full flex flex-col items-center justify-center py-20 font-sans"
    >
      <div className="w-full max-w-5xl px-6">

        {/* TITLE */}
        <p className="text-sm tracking-widest text-gray-500 mb-2">
          MY SKILLS
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-10 text-black">
          WHAT I BRING TO THE TABLE
        </h1>

        {/* ================= TECHNICAL SKILLS ================= */}
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Technical Skills
        </h2>

        <SkillBar title="Applied AI & Intelligent Systems" value={85} />
        <SkillBar title="Data Analysis & Product Analytics" value={70} />
        <SkillBar title="Prototyping & UX Tools" value={70} />
        <SkillBar title="Workflow Automation & Tools" value={70} />

        {/* ================= PRODUCT & BUSINESS SKILLS ================= */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-gray-900">
          Product & Business Skills
        </h2>

        <SkillBar title="Problem Framing & Structured Thinking" value={75} />
        <SkillBar title="Requirements Gathering & PRD Writing" value={70} />
        <SkillBar title="User Research & Insight Synthesis" value={70} />
        <SkillBar title="Stakeholder Management" value={72} />
        <SkillBar title="Product Strategy & Prioritization" value={70} />

        {/* developing skill */}
        <SkillBar
          title="Experimentation & Metrics Design"
          value={55}
          note="Developing"
        />

      </div>
    </section>
  );
}

/* ---------------- COMPONENT ---------------- */

function SkillBar({
  title,
  value,
  note,
}: {
  title: string;
  value: number;
  note?: string;
}) {
  return (
    <div className="mb-8">

      {/* LABEL ROW */}
      <div className="flex justify-between mb-2 items-center">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-800">
            {title}
          </span>

          {/* OPTIONAL NOTE */}
          {note && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-gray-200 text-gray-700">
              {note}
            </span>
          )}
        </div>

        <span className="text-sm text-gray-600">
          {value}%
        </span>
      </div>

      {/* BAR */}
      <div className="w-full h-3 bg-gray-300 rounded-full overflow-hidden">
        <div
          className="h-full bg-gray-600 rounded-full transition-all duration-500"
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}
