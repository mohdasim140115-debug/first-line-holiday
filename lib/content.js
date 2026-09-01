// ============================================================
// FIRST LINE HOLIDAYS — EDITABLE CONTENT
// Everything a non-developer needs to change lives in this file.
// ============================================================

export const company = {
  name: "First Line Holidays",
  contactPerson: "Mehraj",
  phone: "9622717796",
  phoneIntl: "919622717796", // used for tel: and wa.me links
  email: "firstlineholidys@gmail.com",
  address: {
    line1: "Chandlora, Tanmarg",
    line2: "Main Market",
    region: "Jammu & Kashmir",
    pin: "193402",
  },
  location: "Kashmir, Jammu & Kashmir, India",
  tagline: "Beautiful journeys across Kashmir, thoughtfully planned around you.",
};

export const whatsappLink = (
  message = "Hello First Line Holidays, I would like to plan a Kashmir trip."
) => `https://wa.me/${company.phoneIntl}?text=${encodeURIComponent(message)}`;

// Unsplash image helper — swap IDs freely with your own photography.
const u = (id, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  hero: u("1595815771614-ade9d652a65d", 2200),
  aboutLarge: u("1627894485200-b92fb4353967", 1400),
  aboutSmall: u("1614591276564-7b3e69347a48", 900),
};

export const aboutPoints = [
  "Kashmir travel expertise, on the ground",
  "Personalized journeys, planned around you",
  "Comfortable, handpicked stays",
  "Reliable transport with local drivers",
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "Packages", href: "#packages" },
  { label: "Offers", href: "#offers" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const heroTrust = [
  "Personalized Trips",
  "Local Kashmir Expertise",
  "Hassle-Free Planning",
];

// `price` / `wasPrice` / `save` are SAMPLE placeholders — replace with your real rates.
export const packages = [
  {
    name: "Kashmir Escape",
    badge: "Best Seller",
    save: "Save 25%",
    wasPrice: "₹19,999",
    price: "₹14,999",
    unit: "/ person",
    duration: "5 Days / 4 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "Book the best of Kashmir with premium stays, daily breakfast, a private cab and an expert local guide — Dal Lake, the Gulmarg meadows and the Pahalgam valley in one relaxed trip.",
    highlights: ["Shikara ride on Dal Lake", "Gulmarg day excursion", "Mughal gardens tour"],
    image: u("1542003488933-7cfa7453807a", 1200),
  },
  {
    name: "Romantic Kashmir",
    badge: "Couples' Pick",
    save: "Save 26%",
    wasPrice: "₹22,999",
    price: "₹16,999",
    unit: "/ person",
    duration: "5 Days / 4 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "A private couple itinerary with curated stays, a candlelit houseboat dinner and quiet corners of the valley away from the crowds.",
    highlights: ["Curated couple stays", "Private Shikara evening", "Pahalgam forest drive"],
    image: u("1476514525535-07fb3b4ae5f1", 1200),
  },
  {
    name: "Kashmir Explorer",
    badge: "Popular",
    save: "Save 24%",
    wasPrice: "₹28,999",
    price: "₹21,999",
    unit: "/ person",
    duration: "7 Days / 6 Nights",
    route: "Srinagar • Gulmarg • Pahalgam • Sonamarg",
    desc: "The complete valley for travellers who want to see it all — the popular towns plus Doodhpathri and Aru Valley, with a traditional Wazwan meal included.",
    highlights: ["Doodhpathri & Aru Valley", "Gondola Phase II option", "Local Wazwan experience"],
    image: u("1606355792317-4dcadc93ed26", 1200),
  },
  {
    name: "Kashmir Family Holiday",
    badge: "Family",
    save: "Save 24%",
    wasPrice: "₹24,999",
    price: "₹18,999",
    unit: "/ person",
    duration: "6 Days / 5 Nights",
    route: "Srinagar • Sonamarg • Gulmarg • Pahalgam",
    desc: "Plan your family trip without any travel worries — comfortable hotels, all meals, a private vehicle throughout and a flexible sightseeing pace.",
    highlights: ["Private vehicle throughout", "Sonamarg river valley", "Houseboat night stay"],
    image: u("1614591276564-7b3e69347a48", 1200),
  },
  {
    name: "Gulmarg Snow Getaway",
    badge: "Winter",
    save: "Save 24%",
    wasPrice: "₹16,499",
    price: "₹12,499",
    unit: "/ person",
    duration: "4 Days / 3 Nights",
    route: "Srinagar • Gulmarg",
    desc: "A short winter escape built around the snow — the Gondola to Apharwat, sledging and skiing, and warm alpine lodges near the slopes.",
    highlights: ["Gondola to Apharwat", "Snow play & sledging", "Alpine lodge stay"],
    image: u("1598091383021-15ddea10925d", 1200),
  },
  {
    name: "Honeymoon in Kashmir",
    badge: "Couples' Pick",
    save: "Save 23%",
    wasPrice: "₹25,999",
    price: "₹19,999",
    unit: "/ person",
    duration: "6 Days / 5 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "Make the trip special with a deluxe houseboat suite, a private candlelit Shikara dinner and a private car for all your sightseeing.",
    highlights: ["Deluxe houseboat suite", "Candlelit Shikara dinner", "Private sightseeing car"],
    image: u("1715457573748-8e8a70b2c1be", 1200),
  },
];

// More Offers — short day tours / add-ons.
// `price` / `wasPrice` / `save` are SAMPLE placeholders — replace with your real rates.
export const offers = [
  {
    name: "Tulip Garden Tour",
    place: "Kashmir, Srinagar",
    save: "Save 20%",
    wasPrice: "₹4,500",
    price: "₹3,500",
    unit: "/ person",
    desc: "A guided half-day visit to Asia's largest tulip garden with the Zabarwan hills behind — best in late March and April.",
    image: u("1609412489711-2f037d8f4c77", 900),
  },
  {
    name: "Gurez Valley Tour",
    place: "Kashmir, Gurez Valley",
    save: "Save 15%",
    wasPrice: "₹15,000",
    price: "₹12,750",
    unit: "/ person",
    desc: "A two-day trip over the Razdan Pass into the remote Gurez Valley — the Kishanganga river, Habba Khatoon peak and quiet villages.",
    image: u("1634922719192-b4503cf15e07", 900),
  },
  {
    name: "Doodhpathri Day Tour",
    place: "Kashmir, Doodhpathri",
    save: "Save 20%",
    wasPrice: "₹6,000",
    price: "₹4,800",
    unit: "/ person",
    desc: "A full-day drive to the 'valley of milk' — open green meadows, pine ridges and cold streams, with a packed lunch on the grass.",
    image: u("1627894485200-b92fb4353967", 900),
  },
  {
    name: "Yusmarg Day Tour",
    place: "Kashmir, Yusmarg",
    save: "Save 20%",
    wasPrice: "₹6,000",
    price: "₹4,800",
    unit: "/ person",
    desc: "A quiet day trip to the alpine meadows of Yusmarg — a short pony ride to the Doodh Ganga river and Nilnag lake.",
    image: u("1584732200355-486a95263014", 900),
  },
  {
    name: "Betaab Valley Day Tour",
    place: "Kashmir, Pahalgam",
    save: "Save 18%",
    wasPrice: "₹5,500",
    price: "₹4,500",
    unit: "/ person",
    desc: "A half-day from Pahalgam covering Betaab Valley, Chandanwari and Aru — river meadows framed by pine and snow peaks.",
    image: u("1566323124805-757e5c41d37c", 900),
  },
  {
    name: "Sonamarg Day Tour",
    place: "Kashmir, Sonamarg",
    save: "Save 18%",
    wasPrice: "₹6,500",
    price: "₹5,300",
    unit: "/ person",
    desc: "A full-day drive along the Sindh river to Sonamarg with an optional pony ride up to the Thajiwas glacier viewpoint.",
    image: u("1567601169793-64703dc5324a", 900),
  },
];

// Featured deal spotlight. `wasPrice` / `nowPrice` / `badge` are SAMPLE values — edit or clear them.
export const featuredDeal = {
  name: "Kashmir Escape",
  route: "Srinagar • Gulmarg • Pahalgam",
  desc: "Escape to the valleys of Kashmir — glide across Dal Lake, ride up to the snow line at Gulmarg and walk the meadows of Pahalgam. This package covers your stays, daily transport and sightseeing so the trip stays effortless from arrival to departure.",
  wasPrice: "₹25,000",
  nowPrice: "₹14,999",
  unit: "/ person",
  badge: "Save 30%",
  gallery: [
    u("1627894485200-b92fb4353967", 900),
    u("1595815771614-ade9d652a65d", 900),
    u("1606355792317-4dcadc93ed26", 700),
    u("1634922719192-b4503cf15e07", 700),
    u("1548013146-72479768bada", 700),
  ],
  thumbs: [
    u("1715457573748-8e8a70b2c1be", 400),
    u("1483728642387-6c3bdd6c93e5", 400),
    u("1566323124805-757e5c41d37c", 400),
    u("1598091383021-15ddea10925d", 400),
    u("1584732200355-486a95263014", 400),
    u("1567601169793-64703dc5324a", 400),
  ],
};

export const whyChoose = [
  { icon: "tag", label: "Fair Pricing", title: "Transparent Rates", desc: "Clear, itemised quotes with no hidden costs — you know exactly what you pay for." },
  { icon: "shield", label: "Reliable", title: "Safe & Secure Travel", desc: "Vetted drivers, trusted stays and support on the ground throughout your trip." },
  { icon: "compass", label: "Local Experts", title: "Kashmiri-Led Team", desc: "Planned and guided by people who live in the valley and know it season by season." },
  { icon: "headset", label: "Always On", title: "24×7 Trip Support", desc: "A real person a call or message away, before you travel and while you're here." },
];

export const promises = [
  { value: "Local", label: "Kashmir-based team" },
  { value: "24×7", label: "In-trip assistance" },
  { value: "100%", label: "Custom itineraries" },
  { value: "End-to-end", label: "Stays & transport" },
];

// Guest reviews — REPLACE with real reviews before publishing.
// Do not present invented reviews as genuine.
export const reviews = [
  { name: "Guest name", role: "Trip type", date: "", body: "Your guest review will appear here once we collect it." },
  { name: "Guest name", role: "Trip type", date: "", body: "Your guest review will appear here once we collect it." },
  { name: "Guest name", role: "Trip type", date: "", body: "Your guest review will appear here once we collect it." },
];

export const itinerary = [
  {
    day: "01",
    place: "Arrival in Srinagar",
    desc: "Airport pickup, hotel check-in and leisure time by Dal Lake.",
    image: u("1614591276564-7b3e69347a48", 900),
  },
  {
    day: "02",
    place: "Gulmarg",
    desc: "Scenic mountain drive with an optional Gondola cable-car experience.",
    image: u("1598091383021-15ddea10925d", 900),
  },
  {
    day: "03",
    place: "Pahalgam",
    desc: "A beautiful drive through the valley, saffron fields and pine forests.",
    image: u("1627894485200-b92fb4353967", 900),
  },
  {
    day: "04",
    place: "Srinagar",
    desc: "Mughal gardens, the old city and a Shikara ride on the lake.",
    image: u("1715457573748-8e8a70b2c1be", 900),
  },
  {
    day: "05",
    place: "Departure",
    desc: "Relaxed breakfast and assisted airport transfer with a warm farewell.",
    image: u("1567601169793-64703dc5324a", 900),
  },
];

export const faqs = [
  {
    q: "What is the best time to visit Kashmir?",
    a: "Kashmir is beautiful year-round. March to May brings blossoms and pleasant days, June to August is lush and cool, September to November offers golden autumn colours, and December to February is the snow season in Gulmarg and Pahalgam.",
  },
  {
    q: "Can you customize Kashmir packages?",
    a: "Yes. Every itinerary we share is a starting point. We adjust destinations, pace, stays and inclusions to match your group.",
  },
  {
    q: "Do you arrange airport transfers?",
    a: "Yes. Airport pickup and drop-off are arranged for all our trips, with a driver meeting you on arrival.",
  },
  {
    q: "Can you arrange hotels and transportation?",
    a: "Yes. We handle handpicked stays, houseboats and private vehicles with local drivers for the full journey.",
  },
  {
    q: "Can couples book private Kashmir trips?",
    a: "Absolutely. We run private couple itineraries with curated stays and quieter experiences across the valley.",
  },
  {
    q: "How can I enquire about a package?",
    a: "Send us an enquiry through the form on this page, call us, or message us on WhatsApp. We usually reply the same day.",
  },
];

export const tripTypes = ["Couples", "Family", "Group", "Solo", "Honeymoon"];
export const destinationOptions = [
  "Srinagar",
  "Gulmarg",
  "Pahalgam",
  "Sonamarg",
  "Doodhpathri",
  "Aru Valley",
  "Full Valley Tour",
];
