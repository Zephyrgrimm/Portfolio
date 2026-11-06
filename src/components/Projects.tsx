interface Project {
  number: string;
  name: string;
  github?: string;
  tech: string[];
  description: string;
  bullets: string[];
}

const projects: Project[] = [
  {
    number: "01",
    name: "AI-Based Framework for Security Risk Evaluation in Multi-Cloud Environments",
    github:
      "https://github.com/Zephyrgrimm/AI-Based-Framework-for-Security-Risk-Evaluation-in-Multi-Cloud-Environments",
    tech: ["Python", "NetworkX", "NumPy", "SciPy", "GNN", "Bayesian Inference"],
    description:
      "A research-oriented AI framework that models and evaluates security risks across AWS, Azure, and Google Cloud using graph-based attack modeling and probabilistic reasoning.",
    bullets: [
      "Designed an AI-based framework to evaluate security risks across 3 major cloud platforms: AWS, Microsoft Azure, and Google Cloud.",
      "Built a unified attack graph modeling cloud assets, vulnerabilities, access permissions, and network relationships.",
      "Implemented Graph Neural Networks (GNN) and Bayesian inference for contextual risk scoring and attack-path prioritization.",
    ],
  },
  {
    number: "02",
    name: "LifeSync",
    github: "https://github.com/Zephyrgrimm/Life-Sync",
    tech: ["Python", "Google Gemini API", "JSON"],
    description:
      "A Python CLI tool that uses the Google Gemini API to parse free-form natural-language descriptions of daily routines into structured JSON profiles with intelligent follow-up questioning.",
    bullets: [
      "Built a Python CLI application that converts natural-language daily routines into structured JSON using the Google Gemini API.",
      "Implemented AI-based information extraction that asks follow-up questions to identify missing details.",
      "Developed structured user routine profiles generated directly from free-form text input.",
    ],
  },
  {
    number: "03",
    name: "Smart Bus Booking System",
    tech: ["Zoho CRM", "Deluge", "JavaScript", "HTML"],
    description:
      "A full-featured bus booking management system built on Zoho CRM, featuring custom modules, automated seat allocation, and an interactive seat-selection interface.",
    bullets: [
      "Built a bus booking management system on Zoho CRM with 3 custom modules for buses, routes, and passengers.",
      "Automated seat allocation, booking validation, and real-time booking updates using Deluge scripting and JavaScript.",
      "Created an interactive seat-selection interface with gender-based adjacency rules to improve the booking experience.",
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-14">
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Featured Projects
          </h2>
          <div className="w-10 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.number}
              className="bg-[#EFEDE8] border border-[#E0DDD7] p-7 flex flex-col gap-5"
            >
              {/* Number */}
              <span className="text-xs font-bold tracking-widest text-[#5C6E3A] uppercase">
                {project.number}
              </span>

              {/* Name */}
              <h3
                className="text-lg font-bold text-[#1C1C1C] leading-snug"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#4A4A4A] leading-relaxed">
                {project.description}
              </p>

              {/* Bullets */}
              <ul className="flex flex-col gap-2">
                {project.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex gap-2.5 text-xs text-[#4A4A4A] leading-relaxed"
                  >
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5C6E3A] flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 text-xs font-semibold rounded-full"
                    style={{ background: "#E8EDD8", color: "#4A5A2E" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto text-sm font-semibold text-[#5C6E3A] hover:text-[#4a5a2e] transition-colors inline-flex items-center gap-1"
                >
                  View on GitHub
                  <span aria-hidden="true">→</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
