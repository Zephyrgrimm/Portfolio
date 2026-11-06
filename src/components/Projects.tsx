interface Project {
  number: string;
  name: string;
  tagline: string;
  github?: string;
  demo?: string;
  tech: string[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  contribution: string;
}

const projects: Project[] = [
  {
    number: "01",
    name: "AI-Based Framework for Security Risk Evaluation in Multi-Cloud Environments",
    tagline: "Cross-cloud graph threat modeling & probabilistic attack-path scoring",
    github:
      "https://github.com/Zephyrgrimm/AI-Based-Framework-for-Security-Risk-Evaluation-in-Multi-Cloud-Environments",
    tech: ["Python", "NetworkX", "NumPy", "SciPy", "Graph Neural Networks", "Bayesian Inference", "AWS / Azure / GCP"],
    problem:
      "Modern enterprises deploy distributed workloads across multiple cloud providers (AWS, Azure, GCP). Security teams struggle to quantify aggregate attack exposure because vulnerabilities, IAM permissions, and network topologies are siloed across disconnected provider consoles.",
    solution:
      "Constructed a unified heterogeneous attack graph modeling cloud assets, misconfigurations, and privilege escalation paths. Applied Graph Neural Networks (GNNs) and Bayesian inference to dynamically prioritize risk and forecast realistic multi-stage breach trajectories.",
    keyFeatures: [
      "Cross-platform topology synthesis across AWS, Microsoft Azure, and Google Cloud.",
      "Attack-graph generation correlating asset metadata, CVE vulnerabilities, and IAM access controls.",
      "Bayesian probabilistic inference engine for predictive attack-path scoring.",
      "Graph Neural Network (GNN) embeddings for contextual risk classification.",
    ],
    contribution:
      "Sole developer: Architected graph parsing pipeline using NetworkX, implemented probabilistic Bayesian propagation algorithms, and trained graph representations for threat severity evaluation.",
  },
  {
    number: "02",
    name: "LifeSync — Intelligent Routine Extraction Engine",
    tagline: "Natural-language daily routine structuring powered by Gemini LLM",
    github: "https://github.com/Zephyrgrimm/Life-Sync",
    tech: ["Python", "Google Gemini API", "JSON Schema", "CLI"],
    problem:
      "Daily routines described in informal human language are inherently ambiguous, incomplete, and non-deterministic, making them difficult for automated calendar or productivity systems to ingest without tedious manual data entry.",
    solution:
      "Engineered an interactive Python CLI that leverages the Google Gemini API with conversational prompting. It parses unconstrained natural language narratives, identifies temporal omissions, and executes follow-up clarification prompts to output strictly validated JSON profiles.",
    keyFeatures: [
      "Zero-shot unstructured text parsing into structured time-series schedules.",
      "Active missing-information detection with intelligent conversational follow-up questions.",
      "Schema-enforced JSON validation for direct downstream application interoperability.",
      "Clean command-line interface with interactive feedback loop.",
    ],
    contribution:
      "Built end-to-end Python CLI application, structured Gemini system prompts for zero-hallucination routine extraction, and developed schema validation logic.",
  },
  {
    number: "03",
    name: "Enterprise Smart Bus Booking System",
    tagline: "Full-lifecycle reservation platform on Zoho CRM with automated workflows",
    tech: ["Zoho CRM", "Deluge Scripting", "JavaScript", "HTML", "CSS"],
    problem:
      "Manual bus transit coordination suffered from double-booking conflicts, lack of real-time passenger tracking, and inability to enforce passenger-specific seat allocation policies.",
    solution:
      "Architected a scalable booking management architecture natively on Zoho CRM. Developed custom data models for fleets, routes, and passenger tickets, paired with an interactive visual seat-selection widget and real-time validation via Deluge workflows.",
    keyFeatures: [
      "3 interconnected custom relational modules: Fleet/Buses, Route Schedules, and Passenger Manifests.",
      "Custom interactive seat-selection widget with real-time seat availability.",
      "Rule engine enforcing gender-based adjacency constraints and priority seating.",
      "Automated ticket status updates and notification triggers via Deluge backend scripts.",
    ],
    contribution:
      "Designed CRM data architecture, authored Deluge backend workflow functions, and engineered client-side seat layout interface with validation rules.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 border-t border-[#E8E5DF]">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#5C6E3A] mb-2">
            Selected Work
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-3"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Featured Projects
          </h2>
          <div className="w-12 h-0.5 bg-[#5C6E3A]" />
        </div>

        {/* Projects List */}
        <div className="space-y-12">
          {projects.map((project) => (
            <article
              key={project.number}
              className="bg-[#EFEDE8] border border-[#E0DDD7] p-8 md:p-10 transition-all hover:border-[#C8C4BC]"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 pb-6 border-b border-[#E0DDD7]">
                <div className="flex items-center gap-4">
                  <span className="text-sm font-mono font-bold tracking-widest text-[#5C6E3A]">
                    {project.number}
                  </span>
                  <h3
                    className="text-2xl md:text-3xl font-bold text-[#1C1C1C]"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {project.name}
                  </h3>
                </div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5C6E3A] hover:text-[#4a5a2e] transition-colors mt-2 md:mt-0 flex-shrink-0"
                  >
                    GitHub Repository
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </div>

              <p className="text-sm md:text-base font-medium text-[#6B6B6B] mt-4 mb-6 italic">
                {project.tagline}
              </p>

              {/* Problem & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-sm text-[#4A4A4A]">
                <div className="bg-[#F7F5F0] p-5 border border-[#E8E5DF] rounded-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E3A]" />
                    Problem Addressed
                  </h4>
                  <p className="leading-relaxed text-xs md:text-sm">{project.problem}</p>
                </div>
                <div className="bg-[#F7F5F0] p-5 border border-[#E8E5DF] rounded-sm">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5C6E3A]" />
                    Engineered Solution
                  </h4>
                  <p className="leading-relaxed text-xs md:text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Key Features & Contribution */}
              <div className="space-y-4 my-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1C] mb-3">
                    Key Technical Features
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    {project.keyFeatures.map((f, i) => (
                      <li key={i} className="flex gap-2.5 text-xs md:text-sm text-[#4A4A4A] leading-relaxed">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-[#5C6E3A] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#E8E5DF]/70">
                  <p className="text-xs md:text-sm text-[#3A3A3A] leading-relaxed">
                    <strong className="font-semibold text-[#1C1C1C]">Technical Ownership: </strong>
                    {project.contribution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-[#E0DDD7]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#6B6B6B] mr-2">
                  Stack:
                </span>
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-sm border border-[#D5DDC0]"
                    style={{ background: "#E8EDD8", color: "#3B4A22" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
