import { Code2, Database, Server, Layers, Globe2, Wrench } from "lucide-react";

const skillGroups = [
  {
    icon: Code2,
    title: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery / AJAX", "Bootstrap", "React.js", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["PHP", "Laravel", "Node.js", "ColdFusion", "REST APIs"],
  },
  {
    icon: Database,
    title: "Database",
    skills: ["MySQL", "SQL", "Database Architecture", "Query Optimization"],
  },
  {
    icon: Layers,
    title: "Integrations",
    skills: ["Stripe", "PayPal", "Third-Party APIs", "Webhooks", "OAuth"],
  },
  {
    icon: Wrench,
    title: "Tools & Cloud",
    skills: ["Git", "Jira", "Postman"],
  },
];

const proficiency = [
  { name: "PHP / Laravel", level: 95 },
  { name: "React.js / Vue.js", level: 80 },
  { name: "Node.js & REST APIs", level: 85 },
  { name: "ColdFusion (Legacy Modernization)", level: 90 },
  { name: "MySQL & Database Design", level: 85 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">technical toolkit</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A modern stack with deep expertise in legacy systems - the rare combination clients need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="gradient-card-bg border border-border rounded-xl p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <group.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg">{group.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="font-display text-xl font-semibold mb-6 text-center">Core Proficiency</h3>
          <div className="space-y-5">
            {proficiency.map((p) => (
              <div key={p.name}>
                <div className="flex justify-between mb-2 text-sm">
                  <span className="font-medium">{p.name}</span>
                  <span className="text-primary font-mono">{p.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000"
                    style={{ width: `${p.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
