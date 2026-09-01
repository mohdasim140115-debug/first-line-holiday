import Icon from "./Icon";
import { whatsappLink } from "@/lib/content";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener"
      aria-label="Chat with First Line Holidays on WhatsApp"
      className="flh-pulse fixed bottom-5 right-5 z-40 flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105"
      style={{ height: "3.25rem", width: "3.25rem" }}
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
