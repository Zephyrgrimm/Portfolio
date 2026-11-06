export default function About() {
  return (
    <section id="about" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            About
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Two-column editorial layout */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          {/* Left — pull quote / large initial */}
          <div className="md:w-64 flex-shrink-0">
            <p
              className="text-6xl md:text-8xl font-bold leading-none select-none"
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                color: "#E8E5DF",
              }}
            >
              &ldquo;
            </p>
            <p
              className="text-sm font-semibold tracking-widest uppercase text-[#5C6E3A] mt-2"
            >
              Software &amp; AI
            </p>
          </div>

          {/* Right — body text */}
          <div className="flex-1 flex flex-col gap-5">
            <p className="text-base md:text-lg text-[#1C1C1C] leading-relaxed">
              I&apos;m Niraj SB, an Information Technology undergraduate at
              Rajalakshmi Engineering College (graduating 2027), building at the
              intersection of software engineering and applied artificial
              intelligence.
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              My technical work spans AI-powered risk evaluation for multi-cloud
              environments, natural-language processing with large language
              models, and enterprise CRM automation with Zoho. I approach
              engineering problems with a focus on systems thinking and practical
              implementation.
            </p>
            <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
              I&apos;m actively seeking internship and full-time opportunities in
              software engineering and applied AI — roles where I can contribute
              meaningfully from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
