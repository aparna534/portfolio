"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div
        className="
          flex items-center gap-6 px-6 py-3 rounded-full
          border border-black
          bg-[url('/bg.jpg')] bg-cover bg-center
          shadow-md
        "
      >
        <a href="#about" className="text-sm font-medium text-black hover:text-blue-700">
          About
        </a>
        <a href="#skills" className="text-sm font-medium text-black hover:text-blue-700">
          Skills
        </a>
        <a href="#projects" className="text-sm font-medium text-black hover:text-blue-700">
          Projects
        </a>
        <a href="#experience" className="text-sm font-medium text-black hover:text-blue-700">
          Experience
        </a>
        <a href="#case-studies" className="text-sm font-medium text-black hover:text-blue-700">
          Case Studies
        </a>
        <a href="#contact" className="text-sm font-medium text-black hover:text-blue-700">
          Contact
        </a>

        {/* RESUME BUTTON */}
        <a
          href="/resume.pdf"          // 👈 file must be in /public
          target="_blank"            // 👈 opens in new tab
          rel="noopener noreferrer"  // 👈 security best practice
          className="
            ml-2 px-4 py-1.5 rounded-full
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
