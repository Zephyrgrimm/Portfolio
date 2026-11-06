"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-6 py-24 max-w-6xl mx-auto"
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24">
        {/* Text Column */}
        <div className="flex-1 flex flex-col items-start gap-6">
          {/* Decorative line */}
          <div className="w-12 h-px bg-[#5C6E3A]" />

          {/* Eyebrow */}
          <p
            className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5C6E3A]"
          >
            B.Tech — Information Technology
          </p>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl font-bold text-[#1C1C1C] leading-tight"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Niraj SB
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium text-[#6B6B6B]">
            Software Engineer &amp; Applied AI Enthusiast
          </p>

          {/* Intro */}
          <p className="text-base text-[#4A4A4A] leading-relaxed max-w-lg">
            Final-year IT student at Rajalakshmi Engineering College with
            hands-on experience building AI-powered systems and CRM automation
            tools. Currently seeking software engineering and applied AI roles.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-6 py-3 bg-[#5C6E3A] text-[#F7F5F0] text-sm font-semibold hover:bg-[#4a5a2e] transition-colors rounded-sm"
            >
              View Projects
            </a>
            <a
              href="/Portfolio/Resume_Niraj_SB.pdf"
              download="Resume_Niraj_SB.pdf"
              className="px-6 py-3 border border-[#1C1C1C] text-[#1C1C1C] text-sm font-semibold hover:bg-[#1C1C1C] hover:text-[#F7F5F0] transition-colors rounded-sm"
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5 mt-1">
            <a
              href="https://github.com/Zephyrgrimm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors"
              aria-label="GitHub"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.797 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://linkedin.com/in/niraj-s-b-48a9222a2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6B6B6B] hover:text-[#1C1C1C] transition-colors"
              aria-label="LinkedIn"
            >
              <svg
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Photo Column */}
        <div className="flex-shrink-0 flex justify-center md:justify-end">
          <div className="relative">
            {/* Olive ring */}
            <div
              className="absolute inset-0 rounded-full"
              style={{
                background: "transparent",
                boxShadow: "0 0 0 3px #5C6E3A, 0 0 0 7px #F7F5F0, 0 0 0 9px #E8E5DF",
              }}
            />
            <img
              src="/Portfolio/profile.jpg"
              alt="Niraj SB"
              width={220}
              height={220}
              className="rounded-full object-cover"
              style={{ width: 220, height: 220 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
