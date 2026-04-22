import { ArrowRight, MessageCircle, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import portrait from "@/assets/akmal.jpeg";

const WHATSAPP_URL =
  "https://wa.me/923027871652?text=Hi%20Akmal%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.";

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden gradient-hero-bg"
    >
      <div className="absolute inset-0 grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary-glow/10 blur-3xl pointer-events-none" />

      <div className="container relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div className="space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Available for freelance & remote work
          </div>

          <div className="space-y-4">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Hi, I'm <span className="gradient-text">Muhammad Akmal</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground font-medium max-w-2xl">
              Full-Stack Software Engineer{" "}
              <span className="text-foreground">|</span> Bridging Legacy Systems with{" "}
              <span className="text-primary">Modern Innovation</span>
            </p>
          </div>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            I bridge the gap between legacy reliability and modern web innovation. With{" "}
            <span className="text-foreground font-semibold">3+ years of experience</span> as a Full-Stack Developer,
            I specialize in building scalable backend architectures and high-performance user interfaces.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#projects">
                View My Projects <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" /> Hire Me on WhatsApp
              </a>
            </Button>
          </div>

          <div className="pt-2">
            <p className="font-mono text-sm text-muted-foreground">
              <span className="text-primary">$</span> PHP • Laravel • React.js • Node.js • Vue.js • ColdFusion • WordPress
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 text-sm text-muted-foreground">
            <a href="tel:+923027871652" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Phone className="h-4 w-4 text-primary" /> +92 302 7871 652
            </a>
            <a href="mailto:kipsakmal01@gmail.com" className="flex items-center gap-2 hover:text-primary transition-smooth">
              <Mail className="h-4 w-4 text-primary" /> kipsakmal01@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Lahore, Pakistan
            </span>
          </div>
        </div>

        <div className="relative animate-scale-in flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/40 to-primary-glow/20 rounded-[2rem] blur-2xl opacity-70 animate-pulse-glow" />
            <div className="relative h-[360px] w-[300px] sm:h-[440px] sm:w-[360px] rounded-[2rem] overflow-hidden border-2 border-primary/30 shadow-elegant">
              <img
                src={portrait}
                alt="Muhammad Akmal — Full-Stack Software Engineer"
                width={720}
                height={880}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card animate-float">
              <p className="text-2xl font-bold gradient-text">3+ yrs</p>
              <p className="text-xs text-muted-foreground">Experience</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <p className="text-2xl font-bold gradient-text">20+</p>
              <p className="text-xs text-muted-foreground">Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
