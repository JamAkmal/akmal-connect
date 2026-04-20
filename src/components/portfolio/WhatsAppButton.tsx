import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/923027871652?text=Hi%20Akmal%2C%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project.";

export const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp/40 animate-ping" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-elegant hover:scale-110 transition-smooth">
        <MessageCircle className="h-6 w-6" />
      </span>
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-card text-foreground text-sm font-medium px-3 py-1.5 rounded-md border border-border shadow-card opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
        Chat with me
      </span>
    </a>
  );
};
