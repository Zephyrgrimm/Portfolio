const certifications = [
  "Advanced Algorithmic Thinking with Python",
  "SQL Essential Training",
  "Java: Advanced Concepts",
  "Communicating with Confidence",
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Certifications
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert}
              className="bg-[#EFEDE8] border border-[#E0DDD7] p-6 flex items-start justify-between gap-4"
            >
              <p className="text-sm font-semibold text-[#1C1C1C] leading-snug">
                {cert}
              </p>
              <span
                className="flex-shrink-0 px-2.5 py-0.5 text-xs font-bold rounded-full"
                style={{ background: "#E8EDD8", color: "#4A5A2E" }}
              >
                Completed
              </span>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-[#6B6B6B]">
          Certifications completed via LinkedIn Learning and professional training platforms.
        </p>
      </div>
    </section>
  );
}
