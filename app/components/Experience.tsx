export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full relative font-sans"
    >
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24 text-black">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          Work Experience
        </h1>

        <div className="space-y-20">

          {/* ================= CMC HOSPITALS ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Analyst Intern | CMC Hospitals, Vellore
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Aug 2025 – Dec 2025
            </p>

            <p className="font-semibold mb-2">Task</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Improved coordination and reporting visibility across clinical and operations teams within an internal healthcare workflow system.
            </p>

            <p className="font-semibold mb-2">My Contribution</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>
                Analyzed multi department workflow data to identify recurring delays, escalation gaps, and breakdown points across time sensitive clinical processes.
              </li>
              <li>
                Defined and tracked operational metrics including turnaround time, update latency, and case visibility to improve performance transparency.
              </li>
              <li>
                Evaluated coordination inefficiencies using structured data analysis and translated findings into prioritized system adjustments aligned with operational impact.
              </li>
              <li>
                Supported leadership discussions by summarizing workflow data into concise insights that informed process optimization decisions.
              </li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What I Learned</p>
            <p className="text-gray-900 max-w-3xl">
              Gained hands on experience applying data analytics to real operational systems, understanding how business metrics must reflect real workflow behavior to drive measurable improvement.
            </p>
          </div>

          {/* ================= NUS ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              AI and Market Intelligence Analyst Intern | National University of Singapore
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Dec 2024 – Jan 2025
            </p>

            <p className="font-semibold mb-2">Task</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Contributed to building an AI driven market intelligence system enabling small enterprises to make data informed product and strategic decisions.
            </p>

            <p className="font-semibold mb-2">My Contribution</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>
                Aggregated and analyzed social, news, and industry datasets to detect demand trends, behavioral shifts, and emerging market signals.
              </li>
              <li>
                Applied forecasting methods and comparative trend modeling to differentiate sustained growth patterns from short term volatility.
              </li>
              <li>
                Developed structured product evaluation metrics derived from external data signals to support feature prioritization and positioning decisions.
              </li>
              <li>
                Integrated AI assisted signal processing to enhance pattern detection across fragmented market data sources.
              </li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What I Learned</p>
            <p className="text-gray-900 max-w-3xl">
              Strengthened the ability to combine AI techniques with structured data analysis to support product analytics and strategic decision making under uncertainty.
            </p>
          </div>

          {/* ================= GEMINI ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Open Source Contributor | Gemini API and Agents Toolkit
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Remote | 2025
            </p>

            <p className="font-semibold mb-2">Task</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Improved technical reliability and documentation clarity of AI agent tooling within the Gemini API ecosystem.
            </p>

            <p className="font-semibold mb-2">My Contribution</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>
                Implemented a batched embeddings workflow using the genai.embed_content() API, improving documentation quality and reproducibility for developers integrating embedding pipelines.
              </li>
              <li>
                Refactored agent execution logic by introducing dynamic path resolution, improving cross environment stability and reducing configuration errors.
              </li>
              <li>
                Enhanced developer onboarding by contributing clear, tested examples that simplified adoption of AI based workflows.
              </li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What I Learned</p>
            <p className="text-gray-900 max-w-3xl">
              Developed deeper understanding of API design, execution flow reliability, and how documentation quality directly impacts developer adoption and ecosystem growth.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}