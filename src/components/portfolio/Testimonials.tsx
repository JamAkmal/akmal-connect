import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Khan",
    role: "Founder, Spice Route Restaurant",
    text: "Akmal redesigned our restaurant website and the difference was night and day. Online reservations tripled in 2 months. He understood exactly what a small business needs.",
    initials: "SK",
  },
  {
    name: "James Mitchell",
    role: "CTO, FinFlow LLC",
    text: "We had a legacy ColdFusion app no one wanted to touch. Akmal modernized it without breaking anything and added a React frontend. He saved us a six-figure rewrite.",
    initials: "JM",
  },
  {
    name: "Ali Raza",
    role: "Operations Lead, FitGym Pakistan",
    text: "The custom CRM and gym dashboard Akmal built has been running flawlessly for over a year. Rock-solid code, great communication, and on-time delivery.",
    initials: "AR",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 relative bg-card/30">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            What clients <span className="gradient-text">say</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="gradient-card-bg border border-border rounded-2xl p-6 shadow-card hover:border-primary/50 transition-smooth flex flex-col"
            >
              <Quote className="h-8 w-8 text-primary/40 mb-4" />
              <blockquote className="text-muted-foreground leading-relaxed flex-1">
                "{t.text}"
              </blockquote>
              <div className="flex gap-0.5 my-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <figcaption className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-primary-glow text-primary-foreground flex items-center justify-center font-semibold text-sm">
                  {t.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
