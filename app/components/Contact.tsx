export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full relative font-sans"
    >
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-24 text-black">

        {/* HEADING */}
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-center">
          Let’s Connect
        </h1>

        <p className="text-center text-gray-700 mb-16 max-w-2xl mx-auto">
          I’m always open to conversations around product, analytics, and strategy.  
          Whether it’s an opportunity, a collaboration, or just a quick hello, feel free to reach out.
        </p>

        {/* CONTACT CARDS */}
        <div className="grid gap-8 sm:grid-cols-2 max-w-3xl mx-auto">

          {/* EMAIL */}
          <div className="rounded-2xl border border-black/20 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-gray-600 mb-2">Email</p>
            <a
              href="mailto:aparnasivakumar135@gmail.com"
              className="text-lg font-medium text-black hover:text-blue-700 transition"
            >
              aparnasivakumar135@gmail.com
            </a>
          </div>

          {/* PHONE */}
          <div className="rounded-2xl border border-black/20 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-gray-600 mb-2">Phone</p>
            <a
              href="tel:9731719947"
              className="text-lg font-medium text-black hover:text-blue-700 transition"
            >
              +91 97317 19947
            </a>
          </div>

          {/* LINKEDIN */}
          <div className="rounded-2xl border border-black/20 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-gray-600 mb-2">LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/aparnasivakumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-black hover:text-blue-700 transition"
            >
              linkedin.com/in/aparnasivakumar
            </a>
          </div>

          {/* GITHUB */}
          <div className="rounded-2xl border border-black/20 bg-white/70 backdrop-blur p-6 shadow-sm hover:shadow-md transition">
            <p className="text-sm font-semibold text-gray-600 mb-2">GitHub</p>
            <a
              href="https://github.com/aparna534?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium text-black hover:text-blue-700 transition"
            >
              github.com/aparna534
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
