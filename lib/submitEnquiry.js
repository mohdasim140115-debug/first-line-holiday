import { WEB3FORMS_KEY } from "@/lib/content";

// Submits a form payload straight to Web3Forms from the browser, which emails
// the details to firstlineholidys@gmail.com. Throws with a readable message
// on failure.
export async function submitEnquiry(payload) {
  const body = {
    access_key: WEB3FORMS_KEY,
    subject: `New enquiry — ${payload.name || payload.phone || "Website"}`,
    from_name: "First Line Holidays Website",
    botcheck: "",
    ...payload,
  };

  let res;
  try {
    res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Network error — please check your connection and try again.");
  }

  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.success) {
    throw new Error(json.message || "Something went wrong. Please try again.");
  }
  return json;
}
