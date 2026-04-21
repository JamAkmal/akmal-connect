import { MapPin, Briefcase, Globe } from "lucide-react";
import Counter from "./Counter";

const stats = [
  { label: "Years Experience", value: 4 },
  { label: "Projects Delivered", value: 20 },
  { label: "Happy Clients", value: 12 },
  { label: "Tech Stacks", value: 10 },
];

export const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Engineering software that <span className="gradient-text">drives real value</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
          <p>
            I bridge the gap between <span className="text-foreground font-semibold">legacy reliability</span> and{" "}
            <span className="text-foreground font-semibold">modern web innovation</span>. With 4+ years of experience as
            a Full-Stack Developer, I specialize in building scalable backend architectures and high-performance user
            interfaces.
          </p>
          <p>
            I don't just write code - I build solutions that drive real business value. From optimizing MySQL databases
            to developing seamless REST APIs, I create clean, maintainable, and scalable applications.
          </p>
          <p className="flex items-start gap-3 text-foreground">
            <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
            <span>
              Based in <strong>Lahore, Pakistan</strong>. Available for{" "}
              <span className="text-primary">remote freelance projects</span> and local opportunities.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14 max-w-4xl mx-auto">
          {stats.map((s) => (
            <div
              key={s.label}
              className="gradient-card-bg border border-border rounded-xl p-6 text-center shadow-card hover:border-primary/50 transition-smooth"
            >
              <p className="font-display text-3xl sm:text-4xl font-bold gradient-text"><Counter end={s.value} />+</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          {[
            { icon: Briefcase, title: "Full-Time Available", desc: "Open to remote roles worldwide" },
            { icon: Globe, title: "Freelance Ready", desc: "Upwork, Fiverr & direct clients" },
            { icon: MapPin, title: "Local Projects", desc: "Lahore & all of Pakistan" },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card/50"
            >
              <item.icon className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
