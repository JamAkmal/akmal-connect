import { useState } from "react";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string[];
  result: string;
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    title: "CRM Automation Platform",
    description:
      "End-to-end CRM with automated lead capture, sales pipelines, custom reporting, and email workflows - built from scratch for enterprise use.",
    tech: ["PHP", "Laravel", "MySQL", "jQuery"],
    category: ["Laravel"],
    result: "Reduced manual data entry by 70% for the client's sales team",
  },
  {
    title: "QR Code Generator & Management",
    description:
      "SaaS-ready application to generate, customize, and track dynamic QR codes with analytics dashboard, bulk operations, and team collaboration.",
    tech: ["Vue.js", "Python", "REST API"],
    category: ["React"],
    result: "Handles 10K+ scans per day with sub-100ms response times",
  },
  {
    title: "Gym & Fitness Management Dashboard",
    description:
      "Comprehensive admin dashboard for gyms - member subscriptions, class scheduling, trainer management, payments and progress tracking.",
    tech: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    category: ["Laravel", "React"],
    result: "Deployed across 5 fitness centers in Pakistan",
  },
  {
    title: "Modular ColdFusion Enterprise App",
    description:
      "Modernized a critical ColdFusion enterprise application - refactored monolithic code into modules, added REST APIs, and integrated modern UI.",
    tech: ["ColdFusion", "SQL Server", "JavaScript"],
    category: ["ColdFusion"],
    result: "Cut maintenance time in half while extending product lifespan by 5+ years",
  },
  {
    title: "CRM Platform (React + ColdFusion)",
    description:
      "Hybrid CRM bridging a legacy ColdFusion backend with a modern React.js frontend - proving you can modernize without rewriting everything.",
    tech: ["React.js", "ColdFusion", "REST API"],
    category: ["React", "ColdFusion"],
    result: "Saved client $80K vs. full rewrite, delivered in 4 months",
  },
  {
    title: "Restaurant Website (WordPress + Elementor)",
    description:
      "SEO-optimized, fast-loading restaurant website with online menu, table reservations, and Google Maps integration. Easy to manage for non-tech owners.",
    tech: ["WordPress", "Elementor", "SEO", "PHP"],
    category: ["WordPress"],
    result: "Increased online reservations by 3x within 60 days of launch",
  },
];

const filters = ["All", "Laravel", "React", "ColdFusion", "WordPress"] as const;

export const Projects = () => {
  const [active, setActive] = useState<(typeof filters)[number]>("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 relative bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Selected <span className="gradient-text">work</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real projects with measurable business impact - across modern and legacy stacks.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-smooth border",
                active === f
                  ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                  : "bg-secondary text-muted-foreground border-border hover:text-foreground hover:border-primary/50"
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group flex flex-col gradient-card-bg border border-border rounded-2xl overflow-hidden shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth"
            >
              <div className="relative h-44 bg-gradient-to-br from-primary/20 via-secondary to-card flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 grid-pattern opacity-30" />
                <span className="relative font-mono text-3xl font-bold gradient-text px-6 text-center">
                  {p.title.split(" ").slice(0, 2).join(" ")}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-smooth">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{p.description}</p>

                <div className="flex items-start gap-2 mb-4 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <Sparkles className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-foreground"><strong>Result:</strong> {p.result}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-md bg-secondary border border-border text-muted-foreground font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
