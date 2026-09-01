// Sends a form payload to /api/enquiry (which emails it to the company).
// Throws with a readable message on failure.
export async function submitEnquiry(payload) {
  let res;
  try {
    res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error("Network error — please check your connection and try again.");
  }

  const json = await res.json().catch(() => ({}));
  if (!res.ok || !json.ok) {
    throw new Error(json.error || "Something went wrong. Please try again.");
  }
  return json;
}
