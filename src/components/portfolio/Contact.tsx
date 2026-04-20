import { useState } from "react";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageCircle, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const WHATSAPP_URL =
  "https://wa.me/923027871652?text=Hi%20Akmal%2C%20I%20want%20to%20discuss%20a%20project.";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setSubmitting(true);

    // Open user's mail client with prefilled content (no backend required)
    const subject = encodeURIComponent(`New Project Inquiry from ${result.data.name}`);
    const body = encodeURIComponent(
      `Name: ${result.data.name}\nEmail: ${result.data.email}\n\n${result.data.message}`
    );
    window.location.href = `mailto:kipsakmal01@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: "Message ready to send!",
        description: "Your email client has opened. For instant reply, message me on WhatsApp.",
      });
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-mono text-primary mb-3">// 07. Contact</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Let's <span className="gradient-text">build something great</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Open to remote freelance (Upwork / Fiverr / direct) and local projects in Pakistan.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 max-w-5xl mx-auto">
          <div className="space-y-3">
            <a
              href="tel:+923027871652"
              className="flex items-center gap-4 p-5 rounded-xl gradient-card-bg border border-border hover:border-primary/50 transition-smooth shadow-card"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Call me</p>
                <p className="font-semibold">+92 302 7871 652</p>
              </div>
            </a>

            <a
              href="mailto:kipsakmal01@gmail.com"
              className="flex items-center gap-4 p-5 rounded-xl gradient-card-bg border border-border hover:border-primary/50 transition-smooth shadow-card"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="font-semibold truncate">kipsakmal01@gmail.com</p>
              </div>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl gradient-card-bg border border-border hover:border-whatsapp/50 transition-smooth shadow-card"
            >
              <div className="h-11 w-11 rounded-lg bg-whatsapp/10 border border-whatsapp/30 flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-whatsapp" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Fastest response</p>
                <p className="font-semibold">WhatsApp Chat</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl gradient-card-bg border border-border hover:border-primary/50 transition-smooth shadow-card"
            >
              <div className="h-11 w-11 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
                <Linkedin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Professional</p>
                <p className="font-semibold">LinkedIn Profile</p>
              </div>
            </a>

            <div className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card/50">
              <div className="h-11 w-11 rounded-lg bg-secondary border border-border flex items-center justify-center">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="font-semibold">Lahore, Punjab, Pakistan</p>
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="gradient-card-bg border border-border rounded-2xl p-6 sm:p-8 shadow-card space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                maxLength={100}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="you@company.com"
                maxLength={255}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Project details</Label>
              <Textarea
                id="message"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project, timeline, and budget..."
                rows={5}
                maxLength={1000}
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              <p className="text-xs text-muted-foreground text-right">{form.message.length}/1000</p>
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={submitting}>
              {submitting ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <>
                  Send Message <Send className="h-4 w-4" />
                </>
              )}
            </Button>
            <p className="text-xs text-center text-muted-foreground">
              Or message directly on{" "}
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-whatsapp hover:underline">
                WhatsApp
              </a>{" "}
              for the fastest reply.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
