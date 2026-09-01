// Tiny event bus so any button (server or client component) can open the
// site-wide enquiry modal without prop-drilling or a context provider.
export const ENQUIRY_EVENT = "flh:open-enquiry";

export function openEnquiry(detail = {}) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(ENQUIRY_EVENT, { detail }));
  }
}
