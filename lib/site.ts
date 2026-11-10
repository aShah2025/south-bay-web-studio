// Central place to swap demo URLs, form keys and contact details.

export const SITE = {
  name: "South Bay Web Studios",
  location: "San Jose, CA",
  email: "hello@southbaywebstudio.com",
  // Web3Forms: https://web3forms.com. Set NEXT_PUBLIC_WEB3FORMS_KEY in your environment.
  // To use Formspree instead, set formEndpoint to "https://formspree.io/f/YOUR_FORM_ID".
  formEndpoint: "https://api.web3forms.com/submit",
  web3formsKey: process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "YOUR_WEB3FORMS_ACCESS_KEY",
};

export type Demo = {
  tier: string;
  price: string;
  name: string;
  type: string;
  blurb: string;
  url: string; // swap these placeholder URLs for your live demos
  shot: string; // key for /public/demos/<shot>-desktop.jpg and -mobile.jpg
  accent: string;
};

export const DEMOS: Demo[] = [
  {
    tier: "Starter",
    price: "$300",
    name: "Almaden Mobile Detailing",
    type: "1-Page Landing Site",
    blurb: "A fast, scroll-friendly landing page with click-to-call and service hours.",
    url: "https://almaden-mobile-auto-detailing.vercel.app",
    shot: "almaden",
    accent: "from-sky-400 to-blue-600",
  },
  {
    tier: "Growth",
    price: "$500",
    name: "Willow Glen Family Plumbing",
    type: "3-Page Site",
    blurb: "Home, About and Contact with a working lead form and local SEO.",
    url: "https://willowglenfamilyplumbing.vercel.app",
    shot: "willowglen",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    tier: "Pro",
    price: "$800",
    name: "Silicon Valley Elite Tutoring",
    type: "5-Page Site + Booking",
    blurb: "Full multi-page site with embedded online booking and reviews.",
    url: "https://silicon-valley-elite-tutoring.vercel.app",
    shot: "silicon",
    accent: "from-indigo-500 to-violet-600",
  },
];

export type Plan = {
  name: string;
  price: string;
  tagline: string;
  bestFor: string;
  delivery: string;
  inherits?: string;
  features: string[];
  popular?: boolean;
};

export const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$300",
    tagline: "Get online fast.",
    bestFor: "A single service, or a new business that just needs to be found and called.",
    delivery: "Delivered in 2 Weeks",
    features: [
      "1-page mobile-responsive site",
      "Click-to-call button",
      "Hours & Google Map embed",
      "Basic SEO",
      "1 round of revisions",
    ],
  },
  {
    name: "Growth",
    price: "$500",
    tagline: "Win more local customers.",
    bestFor: "Businesses ready to collect leads and show up in local San Jose searches.",
    delivery: "Delivered in 3 Weeks",
    inherits: "Everything in Starter, plus:",
    popular: true,
    features: [
      "3 full pages (Home, About, Contact)",
      "Working lead capture form",
      "Local San Jose SEO optimization",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Pro",
    price: "$800",
    tagline: "A complete booking machine.",
    bestFor: "Businesses that take bookings and rely on reviews to win trust.",
    delivery: "Delivered in 4 Weeks",
    inherits: "Everything in Growth, plus:",
    features: [
      "5 full pages (Home, About, Services/Pricing, Reviews/Gallery, Contact)",
      "Embedded online booking widget",
      "Google Reviews showcase",
      "30 days of free edits",
    ],
  },
];

// Display-friendly hostname for a demo URL, e.g. "almaden-mobile-auto-detailing.vercel.app"
export const hostOf = (url: string) => url.replace(/^https?:\/\//, "").replace(/\/$/, "");
