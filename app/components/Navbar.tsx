"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-8 px-10 py-3 rounded-full
          border border-black
          bg-[url('/bg.jpg')] bg-cover bg-center
          shadow-md
          whitespace-nowrap
        "
      >
        <a href="#about" className="text-sm font-medium text-black hover:text-blue-700 transition">
          About
        </a>

        <a href="#skills" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Skills
        </a>

        <a href="#projects" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Projects
        </a>

        <a href="#experience" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Experience
        </a>

        <a href="#case-studies" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Case Studies
        </a>

        <a href="#education" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Education
        </a>

        <a href="#contact" className="text-sm font-medium text-black hover:text-blue-700 transition">
          Contact
        </a>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="
            ml-4 px-5 py-1.5 rounded-full
            border border-black
            text-black text-sm font-semibold
            hover:bg-black hover:text-white
            transition
          "
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
