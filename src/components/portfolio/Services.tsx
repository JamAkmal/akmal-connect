import { Code, Globe, RefreshCw, Plug, LayoutDashboard, Gauge, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Web Applications",
    description: "Tailor-made apps built with Laravel, React, Vue, or Node.js - from MVPs to enterprise platforms.",
    highlight: "Most popular",
  },
  {
    icon: RefreshCw,
    title: "Legacy System Modernization",
    description: "Specialized in ColdFusion maintenance & upgrades - bridge old systems with modern frontends without expensive rewrites.",
  },
  {
    icon: Plug,
    title: "REST API & Integrations",
    description: "Stripe, PayPal, third-party APIs, webhooks. Clean documentation and battle-tested authentication.",
  },
  {
    icon: LayoutDashboard,
    title: "CRM & Dashboard Solutions",
    description: "Full-featured CRMs and admin dashboards with reporting, RBAC, and automation built in.",
  },
  {
    icon: Gauge,
    title: "Speed Optimization & SEO",
    description: "Make your existing site lightning-fast and rank higher on Google. Core Web Vitals & technical SEO audits.",
  },
];

const WHATSAPP_URL =
  "https://wa.me/923027871652?text=Hi%20Akmal%2C%20I%20want%20to%20discuss%20a%20service.";

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How I can <span className="gradient-text">help your business</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Pick what fits your need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative gradient-card-bg border border-border rounded-2xl p-6 shadow-card hover:border-primary/50 hover:-translate-y-1 transition-smooth"
            >
              {s.highlight && (
                <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/30">
                  {s.highlight}
                </span>
              )}
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/10 border border-primary/30 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-glow font-medium transition-smooth"
          >
            Need something custom? Let's chat <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
