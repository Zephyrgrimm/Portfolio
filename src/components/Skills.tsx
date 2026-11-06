const skillCategories = [
  {
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "SQL"],
  },
  {
    label: "Web Technologies",
    skills: ["HTML", "CSS", "Node.js"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    label: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "FastAPI"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Zoho CRM", "Deluge"],
  },
  {
    label: "APIs & Integration",
    skills: ["REST API", "FastAPI", "Google Gemini API"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Technical Skills
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-[#EFEDE8] p-6 flex flex-col gap-4"
            >
              <h3
                className="text-xs font-bold tracking-widest uppercase text-[#5C6E3A]"
              >
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-full"
                    style={{
                      background: "#E8EDD8",
                      color: "#4A5A2E",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
