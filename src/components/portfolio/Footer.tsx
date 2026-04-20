import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#home" className="flex items-center gap-2 font-display font-bold text-lg mb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                MA
              </span>
              Muhammad Akmal
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Full-Stack Software Engineer bridging legacy reliability with modern web innovation.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {["About", "Skills", "Experience", "Projects", "Services", "Contact"].map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+923027871652" className="hover:text-primary transition-smooth">
                  +92 302 7871 652
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:kipsakmal01@gmail.com" className="hover:text-primary transition-smooth">
                  kipsakmal01@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                Lahore, Pakistan
              </li>
            </ul>
            <div className="flex gap-2 mt-4">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-9 w-9 rounded-md bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-smooth"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-9 w-9 rounded-md bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-smooth"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:kipsakmal01@gmail.com"
                aria-label="Email"
                className="h-9 w-9 rounded-md bg-secondary border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-smooth"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Akmal. All rights reserved.</p>
          <p>
            Built with <span className="text-primary">React</span> + <span className="text-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
