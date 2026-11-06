const educationItems = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Rajalakshmi Engineering College",
    years: "2023 – 2027 (Expected)",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Vidya Mandir Estancia",
    years: "2021 – 2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Education
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          {educationItems.map((item) => (
            <div
              key={item.institution}
              className="flex-1 bg-[#EFEDE8] border border-[#E0DDD7] p-8 flex flex-col gap-3"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#5C6E3A]">
                {item.years}
              </p>
              <h3
                className="text-xl font-bold text-[#1C1C1C]"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {item.degree}
              </h3>
              <p className="text-sm text-[#6B6B6B] font-medium">
                {item.institution}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
