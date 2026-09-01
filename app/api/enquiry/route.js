// Receives an enquiry from any form on the site and emails it to the company.
//
// Uses Web3Forms (https://web3forms.com) so no SMTP credentials live in the repo.
// Set WEB3FORMS_ACCESS_KEY in your environment (Vercel → Project → Settings →
// Environment Variables, and .env.local for local dev). Get a free key by
// entering firstlineholidys@gmail.com at https://web3forms.com — mail goes
// straight to that inbox.

export async function POST(request) {
  const key = process.env.WEB3FORMS_ACCESS_KEY;
  if (!key) {
    return Response.json(
      { ok: false, error: "Email is not configured yet (WEB3FORMS_ACCESS_KEY missing)." },
      { status: 500 }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (data.name || "").toString().trim();
  const phone = (data.phone || "").toString().trim();

  if (!name && !phone) {
    return Response.json(
      { ok: false, error: "Please add at least your name or phone number." },
      { status: 400 }
    );
  }

  const payload = {
    access_key: key,
    subject: `New enquiry — ${name || phone || "Website"}`,
    from_name: "First Line Holidays Website",
    name,
    phone,
    email: data.email || "",
    travel_date: data.date || data.travelDate || "",
    travellers: data.travellers || "",
    destination: data.destination || "",
    trip_type: data.tripType || "",
    package: data.package || "",
    message: data.message || "",
    source: data.source || "Website form",
  };

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    const json = await res.json().catch(() => ({}));

    if (!res.ok || !json.success) {
      return Response.json(
        { ok: false, error: json.message || "Could not send the enquiry." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "Network error while sending." }, { status: 502 });
  }
}
