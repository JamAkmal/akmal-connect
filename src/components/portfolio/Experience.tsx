import { Briefcase, CheckCircle2 } from "lucide-react";

const experiences = [
  {
    company: "TechLeadz",
    role: "Software Engineer",
    period: "2024 - Present",
    achievements: [
      "Built scalable platform architecture using Laravel + Vue.js, serving thousands of daily active users",
      "Engineered multi-gateway payment system (Stripe, PayPal) with real-time fraud detection",
      "Designed enterprise-grade RBAC (Role-Based Access Control) system from scratch",
      "Developed REST API ecosystem powering web, mobile, and third-party integrations",
      "Optimized application performance - reduced page load times by 60% via query tuning & caching",
    ],
  },
  {
    company: "WSL Consultants",
    role: "PHP Developer",
    period: "2023 - 2024",
    achievements: [
      "Led digital transformation of office workflows via a custom management dashboard",
      "Built a complete CRM system from scratch using PHP + MySQL with advanced reporting",
      "Developed employee and client management portals with role-based permissions",
      "Architected dynamic reporting engine and normalized database schemas for scale",
    ],
  },
  {
    company: "eSparks.inc",
    role: "Associate Soft. Engineer",
    period: "2022 - 2023",
    achievements: [
      "Assisted in developing and maintaining web applications using PHP and MySQL",
      "Implemented basic features and fixed bugs under senior developer guidance",
      "Learned and applied best practices in coding, debugging, and version control (Git)",
      "Implemented user interfaces and backend functionalities under senior guidance",
    ],
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Where I've <span className="gradient-text">made impact</span>
          </h2>
        </div>

        {/* Horizontal Layout */}
        <div className="overflow-x-auto">
          <div className="flex gap-6 min-w-[900px]">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="flex-1 min-w-[280px] gradient-card-bg border border-border rounded-xl p-6 shadow-card hover:border-primary/50 transition-smooth"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <h3 className="font-display text-lg font-bold">{exp.role}</h3>
                  </div>
                  <span className="text-xs font-mono text-primary">{exp.period}</span>
                </div>

                <p className="text-primary font-medium mb-4">{exp.company}</p>

                <ul className="space-y-2 text-sm text-muted-foreground">
                  {exp.achievements.map((a) => (
                    <li key={a} className="flex gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
