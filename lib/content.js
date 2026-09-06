// ============================================================
// FIRST LINE HOLIDAYS — EDITABLE CONTENT
// Everything a non-developer needs to change lives in this file.
// ============================================================

// Web3Forms access key — public by design, submitted from the browser.
// Every form submission is emailed to firstlineholidys@gmail.com.
// Get a new one at https://web3forms.com if you ever need to rotate it.
export const WEB3FORMS_KEY = "39b5975d-8b8f-406c-bab7-4a9699c66d86";

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
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=62`;

export const images = {
  aboutLarge: u("1627894485200-b92fb4353967", 800),
  aboutSmall: u("1614591276564-7b3e69347a48", 640),
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

// Shown as ✓ chips under the hero headline — exact-match keywords for Google Ads.
export const heroTrust = [
  "Kashmir Tour Packages",
  "Kashmir Trip Package",
  "Kashmir Holiday Packages",
  "Srinagar Tour Packages",
];

// Hero offer strip. `durationHours` is how long the countdown runs per visit —
// set it to a real deadline in your campaign, or lower it for more urgency.
export const heroOffer = {
  badge: "30% OFF",
  label: "Special offer ends in",
  durationHours: 6,
  // Editable one-liner under the headline. Highlighted words use the accent colour.
  ratingNote: "Local Kashmir travel experts · Real Google reviews",
};

// `price` / `wasPrice` / `save` are SAMPLE placeholders — replace with your real rates.
export const packages = [
  {
    name: "Kashmir Escape",
    badge: "Best Seller",
    save: "Save 25%",
    wasPrice: "₹19,999",
    price: "₹9,999",
    unit: "/ person",
    duration: "5 Days / 4 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "Book the best of Kashmir with premium stays, daily breakfast, a private cab and an expert local guide — Dal Lake, the Gulmarg meadows and the Pahalgam valley in one relaxed trip.",
    highlights: ["Shikara ride on Dal Lake", "Gulmarg day excursion", "Mughal gardens tour"],
    image: u("1542003488933-7cfa7453807a", 720),
  },
  {
    name: "Romantic Kashmir",
    badge: "Couples' Pick",
    save: "Save 26%",
    wasPrice: "₹12,999",
    price: "₹16,999",
    unit: "/ person",
    duration: "5 Days / 4 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "A private couple itinerary with curated stays, a candlelit houseboat dinner and quiet corners of the valley away from the crowds.",
    highlights: ["Curated couple stays", "Private Shikara evening", "Pahalgam forest drive"],
    image: u("1476514525535-07fb3b4ae5f1", 720),
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
    image: u("1606355792317-4dcadc93ed26", 720),
  },
  {
    name: "Kashmir Family Holiday",
    badge: "Family",
    save: "Save 24%",
    wasPrice: "₹24,999",
    price: "₹11,999",
    unit: "/ person",
    duration: "6 Days / 5 Nights",
    route: "Srinagar • Sonamarg • Gulmarg • Pahalgam",
    desc: "Plan your family trip without any travel worries — comfortable hotels, all meals, a private vehicle throughout and a flexible sightseeing pace.",
    highlights: ["Private vehicle throughout", "Sonamarg river valley", "Houseboat night stay"],
    image: u("1614591276564-7b3e69347a48", 720),
  },
  {
    name: "Gulmarg Snow Getaway",
    badge: "Winter",
    save: "Save 24%",
    wasPrice: "₹16,499",
    price: "₹8,499",
    unit: "/ person",
    duration: "4 Days / 3 Nights",
    route: "Srinagar • Gulmarg",
    desc: "A short winter escape built around the snow — the Gondola to Apharwat, sledging and skiing, and warm alpine lodges near the slopes.",
    highlights: ["Gondola to Apharwat", "Snow play & sledging", "Alpine lodge stay"],
    image: u("1598091383021-15ddea10925d", 720),
  },
  {
    name: "Honeymoon in Kashmir",
    badge: "Couples' Pick",
    save: "Save 23%",
    wasPrice: "₹25,999",
    price: "₹15,999",
    unit: "/ person",
    duration: "6 Days / 5 Nights",
    route: "Srinagar • Gulmarg • Pahalgam",
    desc: "Make the trip special with a deluxe houseboat suite, a private candlelit Shikara dinner and a private car for all your sightseeing.",
    highlights: ["Deluxe houseboat suite", "Candlelit Shikara dinner", "Private sightseeing car"],
    image: u("1715457573748-8e8a70b2c1be", 720),
  },
];

// More Offers — short day tours / add-ons.
// `price` values are SAMPLE placeholders — replace with your real rates.
export const offers = [
  {
    name: "Tulip Garden Tour",
    place: "Kashmir, Srinagar",
    price: "₹3,500",
    unit: "/ per person",
    image: u("1609412489711-2f037d8f4c77", 640),
  },
  {
    name: "Gurez Valley Tour",
    place: "Kashmir, Gurez Valley",
    price: "₹12,750",
    unit: "/ per person",
    image: u("1634922719192-b4503cf15e07", 640),
  },
  {
    name: "Doodhpathri Day Tour",
    place: "Kashmir, Doodhpathri",
    price: "₹4,800",
    unit: "/ per person",
    image: u("1627894485200-b92fb4353967", 640),
  },
  {
    name: "Yusmarg Day Tour",
    place: "Kashmir, Yusmarg",
    price: "₹4,800",
    unit: "/ per person",
    image: u("1584732200355-486a95263014", 640),
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
    u("1627894485200-b92fb4353967", 640),
    u("1595815771614-ade9d652a65d", 640),
    u("1606355792317-4dcadc93ed26", 520),
    u("1634922719192-b4503cf15e07", 520),
    u("1548013146-72479768bada", 520),
  ],
  thumbs: [
    u("1715457573748-8e8a70b2c1be", 320),
    u("1483728642387-6c3bdd6c93e5", 320),
    u("1566323124805-757e5c41d37c", 320),
    u("1598091383021-15ddea10925d", 320),
    u("1584732200355-486a95263014", 320),
    u("1567601169793-64703dc5324a", 320),
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
// Guest reviews. These are SAMPLE reviews to show the layout — replace the
// `body`, `name`, `location`, `timeAgo` and `rating` with your real Google /
// guest reviews before going live.
export const reviewSummary = {
  rating: "4.9",
  // Fill in from your Google Business Profile, e.g. "120+ Google reviews".
  label: "from our recent guests",
};

export const reviews = [
  {
    name: "Priya & Rahul Sharma",
    location: "Pune",
    trip: "Honeymoon in Kashmir",
    rating: 5,
    timeAgo: "2 weeks ago",
    body: "Our honeymoon trip to Kashmir was perfectly planned. The houseboat on Dal Lake, the Gulmarg gondola and the drive to Pahalgam were unforgettable. Mehraj and the team were reachable at every point — highly recommend for a couple's Kashmir tour package.",
  },
  {
    name: "Anjali Nair",
    location: "Bengaluru",
    trip: "Kashmir Family Holiday",
    rating: 5,
    timeAgo: "1 month ago",
    body: "We travelled with kids and my parents, and First Line Holidays handled everything — clean hotels, a comfortable private vehicle and a patient driver. The itinerary had the right pace for a family. Best decision for our Kashmir family holiday.",
  },
  {
    name: "Vikram Deshpande",
    location: "Mumbai",
    trip: "Kashmir Group Tour",
    rating: 5,
    timeAgo: "1 month ago",
    body: "Came with a group of nine friends. Transport, stays and the Wazwan dinner were all sorted, and the cost was transparent with no surprises. Sonamarg and Doodhpathri were the highlights. Will book our next Kashmir trip with them.",
  },
  {
    name: "Sneha Iyer",
    location: "Chennai",
    trip: "Kashmir Escape",
    rating: 4,
    timeAgo: "2 months ago",
    body: "Lovely trip overall. The stays and sightseeing were great and the team was responsive on WhatsApp. One hotel change on day 3 was a small hiccup but they sorted it quickly. Good value Kashmir tour package.",
  },
  {
    name: "Mohammed Faizan",
    location: "Hyderabad",
    trip: "Gulmarg Snow Getaway",
    rating: 5,
    timeAgo: "3 months ago",
    body: "Went in February for the snow. Gulmarg was magical and the lodge was warm and close to the gondola. The team arranged snow gear and a local guide. Smooth, well-organised Kashmir trip.",
  },
  {
    name: "Kavita & Suresh Menon",
    location: "Kochi",
    trip: "Romantic Kashmir",
    rating: 5,
    timeAgo: "3 months ago",
    body: "A quiet, romantic Kashmir holiday exactly as we wanted — a private Shikara evening, a candlelit dinner and calm corners away from the crowds. Thoughtful planning from start to finish.",
  },
];

export const itinerary = [
  {
    day: "01",
    place: "Arrival in Srinagar",
    desc: "Airport pickup, hotel check-in and leisure time by Dal Lake.",
    image: u("1614591276564-7b3e69347a48", 640),
  },
  {
    day: "02",
    place: "Gulmarg",
    desc: "Scenic mountain drive with an optional Gondola cable-car experience.",
    image: u("1598091383021-15ddea10925d", 640),
  },
  {
    day: "03",
    place: "Pahalgam",
    desc: "A beautiful drive through the valley, saffron fields and pine forests.",
    image: u("1627894485200-b92fb4353967", 640),
  },
  {
    day: "04",
    place: "Srinagar",
    desc: "Mughal gardens, the old city and a Shikara ride on the lake.",
    image: u("1715457573748-8e8a70b2c1be", 640),
  },
  {
    day: "05",
    place: "Departure",
    desc: "Relaxed breakfast and assisted airport transfer with a warm farewell.",
    image: u("1567601169793-64703dc5324a", 640),
  },
];

export const faqs = [
  {
    q: "What is the best time to visit Kashmir?",
    a: "Kashmir is beautiful year-round. March to May brings blossoms and pleasant days, June to August is lush and cool, September to November offers golden autumn colours, and December to February is the snow season in Gulmarg and Pahalgam.",
  },
  {
    q: "Can you customize a Kashmir tour package?",
    a: "Yes. Every Kashmir package we share is a starting point. We adjust the destinations, pace, stays and inclusions to match your group, dates and budget.",
  },
  {
    q: "How much does a Kashmir trip package cost?",
    a: "It depends on the days, stay category and group size. Share your plan and we'll send a clear, itemised quote for your Kashmir trip — no hidden costs.",
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

// SEO content block below the FAQ. Keywords wrapped in **double asterisks**
// are shown in the accent colour. Edit freely — all of this is plain text.
export const seoContent = {
  heading: "Trusted Travel Agency for Kashmir Tours",
  paragraphs: [
    "Plan your perfect **Kashmir vacation** with **First Line Holidays** — a Kashmir-based travel company offering **Kashmir tour packages** for every kind of traveller. As local **Kashmir tour operators**, we put together **Kashmir holiday packages** at a fair price, whether you want a **Kashmir tour package for couples**, a **Kashmir family holiday** or **Kashmir group tour packages**. Every **Kashmir trip package** is a customised itinerary covering Srinagar, Gulmarg, Pahalgam and Sonamarg.",
    "Get a clear **Kashmir trip cost** with no hidden charges and support before, during and after your journey. From houseboat stays on Dal Lake to the Gulmarg Gondola and the meadows of Pahalgam, we handle the stays, transport and route so your **Kashmir holidays** feel effortless — a **Kashmir travel** experience worth remembering.",
  ],
  colLeft:
    "Looking for the **cheapest Kashmir tour packages** or a **Kashmir trip on a budget**? We build value itineraries with clean stays and shared transfers that still cover every highlight — plus premium and luxury options when you want them.",
  colRight:
    "We plan **Kashmir trips** for travellers from Delhi, Mumbai, Bengaluru, Hyderabad, Chennai, Kolkata, Pune and Ahmedabad, as well as families and honeymooners flying in from across India.",
  topSearched: [
    "Kashmir Tour Packages",
    "Kashmir Trip Package",
    "Kashmir Holiday Packages",
    "Srinagar Tour Packages",
    "Kashmir Group Tour Packages",
    "Kashmir Tour Packages for Family",
    "Kashmir Tour Packages for Couple",
    "Best Kashmir Tour Packages",
    "Cheapest Kashmir Tour Packages",
    "Kashmir Trip Cost",
  ],
};

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
