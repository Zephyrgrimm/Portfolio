interface SkillGroup {
  label: string;
  skills: string[];
}

const skillCategories: SkillGroup[] = [
  {
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript (ES6+)", "SQL"],
  },
  {
    label: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "DOM Manipulation"],
  },
  {
    label: "Backend & APIs",
    skills: ["Node.js", "FastAPI", "RESTful APIs", "API Integration"],
  },
  {
    label: "Databases",
    skills: ["MySQL", "MongoDB", "Relational Schema Design"],
  },
  {
    label: "Data Science & AI",
    skills: ["NumPy", "Pandas", "Google Gemini API", "Graph Neural Networks (GNN)", "Bayesian Inference"],
  },
  {
    label: "Developer Tools & Cloud",
    skills: ["Git", "GitHub", "Multi-Cloud (AWS, Azure, GCP)", "NetworkX", "SciPy"],
  },
  {
    label: "Enterprise CRM & Automation",
    skills: ["Zoho CRM", "Deluge Scripting", "Workflow Automation", "Custom CRM Widgets"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5C6E3A] mb-2">
            Technical Capabilities
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Skills &amp; Expertise
          </h2>
          <div className="w-12 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.label}
              className="bg-[#EFEDE8] border border-[#E0DDD7] p-6 flex flex-col gap-4 rounded-sm hover:border-[#C8C4BC] transition-colors"
            >
              <h3 className="text-xs font-bold tracking-widest uppercase text-[#5C6E3A]">
                {cat.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-medium rounded-sm border border-[#D5DDC0]"
                    style={{
                      background: "#E8EDD8",
                      color: "#3B4A22",
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
