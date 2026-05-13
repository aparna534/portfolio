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
          Data & Analytical Capabilities
        </h2>

        <SkillBar title="Structured Problem Solving" value={85} />
        <SkillBar title="Data Analysis & Insight Generation" value={85} />
        <SkillBar title="SQL & Structured Querying" value={78} />
        <SkillBar title="Dashboarding & Metrics Reporting" value={75} />
        <SkillBar title="AI-Assisted Research & Analysis" value={78} />

        {/* developing skill */}
        <SkillBar
          title="Experimentation & Metrics Design"
          value={60}
          note="Developing"
          isDeveloping={true}
        />

        {/* ================= PRODUCT & BUSINESS SKILLS ================= */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-gray-900">
          Business & Operations
        </h2>

        <SkillBar title="Process Analysis & Workflow Improvement" value={85} />
        <SkillBar title="KPI Design & Performance Tracking" value={80} />
        <SkillBar title="Decision Framing & Prioritization" value={72} />
        <SkillBar title="Cross-Functional Coordination" value={80} />
        <SkillBar title="Operational Problem Diagnosis" value={84} />

        {/* ================= COMMUNICATION & EXECUTION ================= */}
        <h2 className="text-2xl font-bold mt-16 mb-6 text-gray-900">
          Communication & Execution
        </h2>

        <SkillBar title="Executive Summarization" value={84} />
        <SkillBar title="Stakeholder Communication" value={82} />
        <SkillBar title="Research Synthesis" value={85} />
        <SkillBar title="Presentation & Storylining" value={90} />
        <SkillBar title="Project Ownership & Execution" value={80} />

      </div>
    </section>
  );
}

/* ---------------- COMPONENT ---------------- */

interface SkillBarProps {
  title: string;
  value: number;
  note?: string;
  isDeveloping?: boolean;
}

function SkillBar({ title, value, note, isDeveloping }: SkillBarProps) {
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
            <span
              className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                isDeveloping
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
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
          className={`h-full rounded-full transition-all duration-500 ${
            isDeveloping ? "bg-yellow-500" : "bg-gray-600"
          }`}
          style={{ width: `${value}%` }}
        />
      </div>

    </div>
  );
}