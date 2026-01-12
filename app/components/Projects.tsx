export default function Projects() {
  const projects = [
    {
      title: "Project 1 — Forest Fire Prediction System",
      image: "/projects/fire.jpg",
      link: "https://github.com/aparna534/Forest-Fire-Prediction-System",
      content: (
        <>
          <p><strong>What it does</strong><br />
            A machine learning system that predicts the probability of forest fire occurrence using weather, fuel moisture, wind, and drought indices. The goal is to give early warnings so authorities can act before fires become uncontrollable.
          </p>

          <p className="mt-4"><strong>Why I built it</strong><br />
            In early 2025, the Southern California wildfires displaced thousands of families and caused multiple fatalities. Watching entire neighborhoods evacuate made me realize that most responses happen after damage begins. I wanted to build something that focuses on prevention, not reaction, a system that helps communities prepare before disaster strikes.
          </p>

          <p className="mt-6"><strong>How I planned it (detailed)</strong><br />
            I approached this like a real world risk product, not just a model.
          </p>

          <p className="mt-3"><strong>Framed the core decision first</strong><br />
            Instead of asking “How do I build a fire model?” I asked “What decision should this product improve?”<br />
            The answer: when authorities should issue early warnings.
          </p>

          <p className="mt-3"><strong>Defined the user under pressure</strong><br />
            Designed for emergency teams who don’t have time to interpret dashboards. They need clear risk signals.
          </p>

          <p className="mt-3"><strong>Converted data into action</strong><br />
            Mapped every variable such as wind, drought index, and moisture to a single outcome.<br />
            A probability score that leads to a yes or no alert decision.
          </p>

          <p className="mt-3"><strong>Built for trust, not complexity</strong><br />
            Chose a simpler, interpretable model first before exploring advanced ones so stakeholders could understand why a prediction was made.
          </p>

          <p className="mt-3"><strong>Validated against real events</strong><br />
            Compared outputs with historical wildfire patterns to ensure the system aligned with real world outcomes, not just statistical accuracy.
          </p>
        </>
      ),
    },

    {
      title: "Project 2 — CarbonIQ: Emissions Forecasting Platform",
      image: "/projects/carbon.jpg",
      link: "https://github.com/aparna534/carboniq-prototype",
      content: (
        <>
          <p><strong>What it does</strong><br />
            A forecasting system that predicts future carbon emissions for countries using historical climate data. It helps policymakers and sustainability teams visualize trends and measure the impact of interventions.
          </p>

          <p className="mt-4"><strong>Why I built it</strong><br />
            Climate conversations are often emotional but lack decision ready data. I wanted to create something that turns complex climate datasets into clear forecasts leaders can actually act on, not just dashboards but direction.
          </p>

          <p className="mt-6"><strong>How I planned it (detailed)</strong><br />
            I treated this like a decision support product, not a data project.
          </p>

          <p className="mt-3"><strong>Started with the user’s confusion, not the dataset</strong><br />
            Policymakers don’t need more numbers. They need to know “Are we on track or falling behind?”
          </p>

          <p className="mt-3"><strong>Defined the primary insight</strong><br />
            Reduced hundreds of metrics into one core narrative.<br />
            Future emissions trajectory.
          </p>

          <p className="mt-3"><strong>Separated signal from noise</strong><br />
            Evaluated which indicators actually influenced long term emissions and removed everything that only added visual clutter.
          </p>

          <p className="mt-3"><strong>Designed for comparison, not just viewing</strong><br />
            Built the product so users could compare today versus tomorrow versus scenarios, turning charts into decisions.
          </p>

          <p className="mt-3"><strong>Planned for scale early</strong><br />
            Structured the system to work for multiple countries from day one so it wouldn’t stay a one off prototype.
          </p>
        </>
      ),
    },

    {
      title: "Project 3 — Multimodal AI Diagnosis and Medical Enquiry Assistant",
      image: "/projects/medifind.jpg",
      link: "https://huggingface.co/spaces/theaparna123/medifind",
      content: (
        <>
          <p><strong>What it does</strong><br />
            An AI assistant that combines text and image inputs to help users understand symptoms, possible conditions, and next steps, making healthcare guidance more accessible.
          </p>

          <p className="mt-4"><strong>Why I built it</strong><br />
            In many households, people delay care because they’re unsure whether a symptom is serious. I saw family members hesitate to visit doctors due to uncertainty and cost. This project started from a simple question. What if people could get clarity before fear sets in?
          </p>

          <p className="mt-6"><strong>How I planned it (detailed)</strong><br />
            This project was designed around human hesitation, not technology.
          </p>

          <p className="mt-3"><strong>Started with emotional mapping</strong><br />
            Identified the real problem as fear before certainty. People hesitate because they don’t know whether they’re overreacting.
          </p>

          <p className="mt-3"><strong>Defined boundaries of responsibility</strong><br />
            From the beginning, I decided this product would guide, not diagnose. Clarity over authority.
          </p>

          <p className="mt-3"><strong>Designed trust layers</strong><br />
            Built explanations into every response so users understand why a suggestion is made.
          </p>

          <p className="mt-3"><strong>Tested with non technical users</strong><br />
            Observed how real people phrase symptoms and adjusted flows to match natural language, not medical terminology.
          </p>

          <p className="mt-3"><strong>Prioritized safety over automation</strong><br />
            Added guardrails for serious symptoms so the system always escalates rather than speculates.
          </p>
        </>
      ),
    },

    {
      title: "Project 4 — Product Recommendation and Space Optimization System",
      image: null,
      link: "https://github.com/aparna534/Product-Recommendation-and-Space-Optimization-System-for-Small-Businesses",
      content: (
        <>
          <p><strong>What it does</strong><br />
            A data driven system that helps small retail businesses decide what products to stock, where to place them, and how to use limited shelf space for maximum revenue.
          </p>

          <p className="mt-4"><strong>Why I built it</strong><br />
            Small stores lose money not because of bad products but bad placement. Watching local shop owners struggle with inventory decisions inspired me to build something that brings enterprise level analytics to small businesses.
          </p>

          <p className="mt-6"><strong>How I planned it (detailed)</strong><br />
            I treated this like a revenue product for small businesses, not a tech demo.
          </p>

          <p className="mt-3"><strong>Started on the shop floor, not in code</strong><br />
            Observed how store owners make placement decisions, mostly by intuition, not data.
          </p>

          <p className="mt-3"><strong>Defined the business metric first</strong><br />
            Chose profit per square foot as the north star instead of generic sales numbers.
          </p>

          <p className="mt-3"><strong>Mapped decisions, not just data</strong><br />
            Focused on the real questions owners ask. What should I remove? What deserves prime shelf space?
          </p>

          <p className="mt-3"><strong>Translated analytics into actions</strong><br />
            Designed outputs like “Move this product to eye level” instead of “This SKU has a 12 percent uplift probability.”
          </p>

          <p className="mt-3"><strong>Built for adoption, not perfection</strong><br />
            Prioritized simplicity so even non technical owners could act immediately.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full relative font-sans">
      {/* reduced top padding so content starts higher */}
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 text-black">

        {/* CENTERED MAIN HEADING */}
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          PROJECTS
        </h2>

        {/* tighter spacing between projects */}
        <div className="space-y-20">
          {projects.map((p, i) => (
            <div key={i}>
              {/* PROJECT TITLE */}
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                {p.title}
              </h3>

              {/* IMAGE — centered + clean size */}
              {p.image && (
                <div className="mb-10 flex justify-center">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-[520px] max-h-[300px] object-contain rounded-xl border border-black/20 shadow-sm"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="space-y-4 leading-relaxed text-gray-900 max-w-3xl">
                {p.content}
              </div>

              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-7 py-3 rounded-full border border-black text-black bg-white hover:bg-black hover:text-white transition"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
