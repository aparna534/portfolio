export default function Projects() {
  const projects = [
    {
      title: "Forest Fire Prediction System",
      image: "/projects/fire.jpg",
      link: "https://github.com/aparna534/Forest-Fire-Prediction-System",
      content: (
        <>
          <p>
            <strong>What it does</strong><br />
            A machine learning based early warning tool that predicts forest fire probability using environmental and weather data.
          </p>

          <p className="mt-6">
            <strong>How I built it</strong>
          </p>

          <p className="mt-3">
            <strong>Data cleaning and feature engineering</strong><br />
            Processed raw weather datasets including temperature, humidity, wind speed, moisture levels, and drought indices using Pandas and NumPy to create structured model ready features.
          </p>

          <p className="mt-3">
            <strong>Model training and evaluation</strong><br />
            Trained supervised classification models using Scikit learn and evaluated performance using validation splits to ensure generalization rather than overfitting to historical fire data.
          </p>

          <p className="mt-3">
            <strong>Model persistence and deployment</strong><br />
            Serialized trained models using Joblib and integrated prediction logic into a Flask application for real time inference.
          </p>

          <p className="mt-3">
            <strong>Decision focused output design</strong><br />
            Translated probability outputs into structured risk categories and alert signals to improve interpretability for non technical users.
          </p>
        </>
      ),
    },

    {
      title: "CarbonIQ Emissions Forecasting Platform",
      image: "/projects/carbon.jpg",
      link: "https://github.com/aparna534/carboniq-prototype",
      content: (
        <>
          <p>
            <strong>What it does</strong><br />
            A data analytics platform that visualizes historical CO2 emissions and forecasts future trajectories to support sustainability planning.
          </p>

          <p className="mt-6">
            <strong>How I built it</strong>
          </p>

          <p className="mt-3">
            <strong>Data processing and preparation</strong><br />
            Ingested and cleaned emissions datasets using Pandas and NumPy, structuring time series data for reliable modeling and analysis.
          </p>

          <p className="mt-3">
            <strong>Forecast modeling</strong><br />
            Applied regression based models using Scikit learn to estimate emission trajectories and evaluated forecasts against historical patterns.
          </p>

          <p className="mt-3">
            <strong>Visualization and interface</strong><br />
            Built visualizations using Matplotlib and integrated modeling logic into a Flask application to display historical trends alongside projected changes.
          </p>

          <p className="mt-3">
            <strong>Analytics driven framing</strong><br />
            Highlighted deviations, growth inflection points, and trajectory shifts to transform raw forecasts into interpretable decision support insights.
          </p>
        </>
      ),
    },

    {
      title: "Medifind Healthcare Patient Insights Assistant",
      image: "/projects/medifind.jpg",
      link: "https://huggingface.co/spaces/theaparna123/medifind",
      content: (
        <>
          <p>
            <strong>What it does</strong><br />
            A multimodal AI assistant that interprets symptom text and optional image inputs to provide structured health guidance.
          </p>

          <p className="mt-6">
            <strong>How I built it</strong>
          </p>

          <p className="mt-3">
            <strong>Multimodal embedding pipeline</strong><br />
            Integrated CLIP based vision language embeddings, Sentence Transformers, and FAISS for similarity search and semantic retrieval across symptom inputs.
          </p>

          <p className="mt-3">
            <strong>AI reasoning layer</strong><br />
            Leveraged generative AI integration along with Torch and TorchVision pipelines to interpret contextual symptom information beyond rule based matching.
          </p>

          <p className="mt-3">
            <strong>Structured response design</strong><br />
            Normalized outputs into condition possibilities, urgency indicators, and recommended next steps to improve clarity and reduce ambiguity.
          </p>

          <p className="mt-3">
            <strong>Safety constraints</strong><br />
            Implemented escalation logic for high risk symptom categories to ensure guidance remains responsible and non diagnostic.
          </p>
        </>
      ),
    },

    {
      title: "Product Recommendation and Space Optimization System",
      image: null,
      link: "https://github.com/aparna534/Product-Recommendation-and-Space-Optimization-System-for-Small-Businesses",
      content: (
        <>
          <p>
            <strong>What it does</strong><br />
            A retail analytics system that recommends product stocking and shelf placement decisions using historical sales data.
          </p>

          <p className="mt-6">
            <strong>How I built it</strong>
          </p>

          <p className="mt-3">
            <strong>Exploratory data analysis</strong><br />
            Conducted structured EDA using Pandas and NumPy to identify demand patterns, sales velocity trends, and product performance distributions.
          </p>

          <p className="mt-3">
            <strong>Recommendation logic and optimization</strong><br />
            Developed ranking and allocation logic to prioritize products based on measurable performance metrics and space constraints.
          </p>

          <p className="mt-3">
            <strong>Application layer</strong><br />
            Built a Flask based interface enabling dataset upload, analytics execution, and prioritized stocking and placement outputs.
          </p>

          <p className="mt-3">
            <strong>Business aligned outputs</strong><br />
            Structured recommendations around profit contribution and performance visibility rather than abstract model scores.
          </p>
        </>
      ),
    },
  ];

  return (
    <section id="projects" className="min-h-screen w-full relative font-sans">
      <div className="max-w-6xl mx-auto px-6 pt-10 pb-24 text-black">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-12 text-center">
          PROJECTS
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-semibold mb-6 tracking-tight">
                {project.title}
              </h3>

              {project.image && (
                <div className="mb-10 flex justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-[520px] max-h-[300px] object-contain rounded-xl border border-black/20 shadow-sm"
                  />
                </div>
              )}

              <div className="space-y-4 leading-relaxed text-gray-900 max-w-3xl">
                {project.content}
              </div>

              <a
                href={project.link}
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