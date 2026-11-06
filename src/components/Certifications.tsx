interface Certification {
  name: string;
  issuer: string;
  category: string;
  status: string;
  url?: string;
}

const certifications: Certification[] = [
  {
    name: "Advanced Algorithmic Thinking with Python",
    issuer: "LinkedIn Learning",
    category: "Algorithms & Data Structures",
    status: "Verified Credential",
    url: "https://www.linkedin.com/in/niraj-s-b-48a9222a2/details/certifications/",
  },
  {
    name: "SQL Essential Training",
    issuer: "LinkedIn Learning",
    category: "Database & Query Optimization",
    status: "Verified Credential",
    url: "https://www.linkedin.com/in/niraj-s-b-48a9222a2/details/certifications/",
  },
  {
    name: "Java: Advanced Concepts",
    issuer: "LinkedIn Learning",
    category: "Object-Oriented Programming",
    status: "Verified Credential",
    url: "https://www.linkedin.com/in/niraj-s-b-48a9222a2/details/certifications/",
  },
  {
    name: "Communicating with Confidence",
    issuer: "LinkedIn Learning",
    category: "Professional Development & Leadership",
    status: "Verified Credential",
    url: "https://www.linkedin.com/in/niraj-s-b-48a9222a2/details/certifications/",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5C6E3A] mb-2">
            Continuous Learning
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Certifications &amp; Credentials
          </h2>
          <div className="w-12 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="bg-[#EFEDE8] border border-[#E0DDD7] p-6 flex flex-col justify-between gap-4 rounded-sm hover:border-[#C8C4BC] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#5C6E3A]">
                    {cert.issuer}
                  </span>
                  <span
                    className="flex-shrink-0 px-2.5 py-0.5 text-[11px] font-semibold rounded-sm border border-[#D5DDC0]"
                    style={{ background: "#E8EDD8", color: "#3B4A22" }}
                  >
                    {cert.status}
                  </span>
                </div>
                <h3
                  className="text-lg font-bold text-[#1C1C1C] leading-snug"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  {cert.name}
                </h3>
                <p className="text-xs text-[#6B6B6B] mt-1 font-medium">
                  Focus: {cert.category}
                </p>
              </div>

              {cert.url && (
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#5C6E3A] hover:text-[#4a5a2e] transition-colors pt-3 border-t border-[#E0DDD7]"
                >
                  View Credential on LinkedIn
                  <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          ))}
        </div>

        <p className="text-xs text-[#6B6B6B]">
          All certifications verified and issued through accredited continuing professional education platforms.
        </p>
      </div>
    </section>
  );
}
