export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="min-h-screen w-full relative font-sans"
    >
      <div className="max-w-5xl mx-auto px-6 pt-10 pb-24 text-black">

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          Experience
        </h1>

        <div className="space-y-20">

          {/* ================= CMC HOSPITALS ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Operations Analyst Intern | CMC Hospitals, Vellore
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Aug 2025 – Dec 2025
            </p>

            <p className="font-semibold mb-2">Context</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Worked within operations at CMC Vellore (#3 Medical Institution in India, NIRF 2025) supporting an internal platform designed to improve coordination, escalation tracking, and workflow visibility across clinical teams operating in high dependency environments.
            </p>

            <p className="font-semibold mb-2">What I Worked On</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>Analysed coordination breakdowns across clinical and operations teams to identify where handoffs failed, escalations stalled, and case visibility dropped across time sensitive workflows.</li>
              <li>Built centralised tracking and reporting structures that gave leadership a more consolidated view of operational delays, unresolved cases, and recurring coordination gaps across departments.</li>
              <li>Translated workflow data into structured management summaries highlighting root causes, operational bottlenecks and process improvement priorities used in review discussions.</li>
              <li>Worked closely with frontline staff and hospital operations teams to ensure platform decisions reflected actual workflow constraints rather than assumed processes.</li>
              <li>Helped surface gaps between operational realities and system implementation, improving visibility into how coordination failures affected execution across teams.</li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What This Taught Me</p>
            <p className="text-gray-900 max-w-3xl">
              The experience gave me a much stronger understanding of how operational systems break down when communication, ownership, and visibility stop scaling together. It also reinforced the importance of building processes that people can realistically operate within under pressure not just processes that appear efficient on paper.
            </p>
          </div>

          {/* ================= NUS ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Data & AI Insights Analyst Intern | National University of Singapore
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Dec 2024 – Jan 2025
            </p>

            <p className="font-semibold mb-2">Context</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Research internship at NUS (#8 globally, QS 2026; #1 in Asia) focused on building an AI powered demand intelligence system designed to help small businesses make more structured inventory and product decisions using fragmented market data.
            </p>

            <p className="font-semibold mb-2">What I Worked On</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>Built a structured analytical workflow combining social media APIs, industry reports, and news feeds to identify emerging demand patterns across product categories.</li>
              <li>Developed a cross category evaluation framework covering demand and engagement metrics, enabling more consistent comparison of product performance signals.</li>
              <li>Translated AI generated outputs into decision ready recommendation briefs designed for non technical business users.</li>
              <li>Helped bridge the gap between raw market data and actionable business decisions by turning scattered external signals into structured insights that could be evaluated and acted on more systematically.</li>
              <li>Deployed the workflow on AWS, allowing the pipeline to scale across additional product categories without rebuilding the system architecture.</li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What This Taught Me</p>
            <p className="text-gray-900 max-w-3xl">
              The experience strengthened my interest in decision making under ambiguity, especially in environments where information exists but lacks structure. I became increasingly interested in how analytical systems can simplify complexity, surface meaningful patterns, and help people make clearer operational and strategic choices.
            </p>
          </div>

          {/* ================= GEMINI ================= */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">
              Open Source Contributor | Gemini API & Agents Toolkit
            </h2>
            <p className="text-gray-600 mt-1 mb-6">
              Remote · 2025
            </p>

            <p className="font-semibold mb-2">Context</p>
            <p className="text-gray-900 mb-6 max-w-3xl">
              Contributed to improving reliability, usability, and developer onboarding within AI agent tooling and API implementation workflows.
            </p>

            <p className="font-semibold mb-2">What I Worked On</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-900 max-w-3xl">
              <li>Implemented a batched embeddings workflow using the Gemini API to improve reproducibility and integration clarity for developers working with embedding pipelines.</li>
              <li>Refactored agent execution logic by introducing dynamic path resolution, improving stability across different development environments and reducing configuration-related failures.</li>
              <li>Contributed structured implementation examples and tested documentation designed to simplify onboarding for developers integrating AI-assisted workflows into their applications.</li>
              <li>Focused on improving usability and execution reliability rather than simply adding functionality, ensuring tools behaved more consistently across varying environments.</li>
            </ul>

            <p className="font-semibold mt-6 mb-2">What This Taught Me</p>
            <p className="text-gray-900 max-w-3xl">
              I developed a deeper appreciation for how reliability, documentation quality, and implementation clarity directly influence adoption. The experience reinforced that scalable systems are often defined less by complexity and more by how intuitively and consistently people can use them.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}