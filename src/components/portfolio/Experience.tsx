import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "TechLeadz",
    role: "Software Engineer",
    period: "2024 – Present",
    achievements: [
      "Built scalable platform architecture using Laravel + Vue.js, serving thousands of daily active users",
      "Engineered multi-gateway payment system (Stripe, PayPal) with real-time fraud detection",
      "Designed enterprise-grade RBAC (Role-Based Access Control) system from scratch",
      "Developed REST API ecosystem powering web, mobile, and third-party integrations",
      "Optimized application performance — reduced page load times by 60% via query tuning & caching",
    ],
  },
  {
    company: "WSL Consultants",
    role: "PHP Developer",
    period: "2023 – 2024",
    achievements: [
      "Led digital transformation of office workflows via a custom management dashboard",
      "Built a complete CRM system from scratch using PHP + MySQL with advanced reporting",
      "Developed employee and client management portals with role-based permissions",
      "Architected dynamic reporting engine and normalized database schemas for scale",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-mono text-primary mb-3">// 03. Professional Experience</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Where I've <span className="gradient-text">made impact</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          {experiences.map((exp, i) => (
            <div key={exp.company} className={`relative mb-12 sm:grid sm:grid-cols-2 sm:gap-8 ${i % 2 === 0 ? "" : "sm:[&>*:first-child]:order-2"}`}>
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 h-4 w-4 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(var(--primary))]" />
              <div className="pl-12 sm:pl-0 sm:pr-8 sm:text-right hidden sm:block">
                {i % 2 === 0 ? (
                  <div className="pt-1">
                    <p className="font-mono text-primary text-sm">{exp.period}</p>
                  </div>
                ) : null}
              </div>
              <div className="pl-12 sm:pl-8 gradient-card-bg border border-border rounded-xl p-6 shadow-card hover:border-primary/50 transition-smooth">
                <div className="flex items-center gap-2 mb-1">
                  <Briefcase className="h-4 w-4 text-primary" />
                  <span className="font-mono text-xs text-primary sm:hidden">{exp.period}</span>
                </div>
                <h3 className="font-display text-xl font-bold">{exp.role}</h3>
                <p className="text-primary font-medium mb-4">{exp.company}</p>
                <ul className="space-y-2.5">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {i % 2 !== 0 && (
                <div className="hidden sm:block pl-8 pt-1">
                  <p className="font-mono text-primary text-sm">{exp.period}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
