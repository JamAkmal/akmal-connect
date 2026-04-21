import { Linkedin, Mail, Phone, MapPin } from "lucide-react";

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
            <p className="text-sm text-muted-foreground leading-relaxed">
              A software engineer with full-stack expertise across both modern and legacy technologies, 
              skilled in maintaining enterprise systems. Delivers end-to-end solutions with a strong 
              focus on performance, maintainability, and user experience.
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
               <li className="flex items-center gap-2">
                <Linkedin className="h-4 w-4 text-primary" />
                <a 
                 target="_blank"
                 rel="noopener noreferrer"
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/muahammad-akmal/" className="hover:text-primary transition-smooth">
                  www.linkedin.com/in/muahammad-akmal/
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col sm:flex-row justify-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Muhammad Akmal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
