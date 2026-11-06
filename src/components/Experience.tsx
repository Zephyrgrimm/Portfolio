const techTags = ["Zoho CRM", "Deluge", "JavaScript", "HTML"];

const bullets = [
  "Developed and customized Zoho CRM modules to support business workflows during a 2-month internship.",
  "Automated business workflows using Deluge scripting and JavaScript, reducing manual operations.",
  "Built interactive CRM widgets with custom functionality to improve user experience and workflow efficiency.",
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Experience
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Timeline */}
        <div className="flex gap-8 md:gap-12">
          {/* Left: vertical olive line + dot */}
          <div className="flex flex-col items-center">
            <div className="w-3 h-3 rounded-full bg-[#5C6E3A] mt-1 flex-shrink-0" />
            <div className="flex-1 w-px bg-[#E8E5DF] mt-2" />
          </div>

          {/* Right: content */}
          <div className="flex-1 pb-12">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-4">
              <div>
                <h3
                  className="text-2xl font-bold text-[#1C1C1C]"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  Zoho
                </h3>
                <p className="text-base font-semibold text-[#5C6E3A] mt-0.5">
                  CRM Development Intern
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm text-[#6B6B6B] font-medium">
                  June 2025 – July 2025
                </p>
                <p className="text-sm text-[#6B6B6B]">Remote</p>
              </div>
            </div>

            {/* Bullets */}
            <ul className="flex flex-col gap-3 mb-6">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-[#4A4A4A] leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#5C6E3A] flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {techTags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-semibold rounded-full"
                  style={{ background: "#E8EDD8", color: "#4A5A2E" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
