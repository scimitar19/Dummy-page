export const PLANS = [
  {
    title: "FREE",
    price: "$0/month",
    description: "For hobby projects or small treams",
    styling: { article: "plan", ul: "plan__features", h2: "plan__price" },
    workspace: "1 Workspace",
    traffic: "Unlimitted Traffic",
    storage: "10GB Storage",
    support: "Basic Support",
  },
  {
    title: "RECOMMENDED",
    ADD: "PLUS",
    price: "$29/month",
    description: "For ambitious projects",
    styling: {
      article: "plan",
      ul: "plan__features",
      h1: "plan__annotation",
      h2: "plan__price",
      article1: "plan--highlighted",
    },
    workspace: "5 Workspace",
    traffic: "Unlimitted Traffic",
    storage: "100GB Storage",
    support: "Plus Support",
  },
  {
    title: "PREMIUM",
    price: "$99/month",
    description: "Your enterprise solution",
    styling: { article: "plan", ul: "plan__features", h2: "plan__price" },
    workspace: "10 Workspaces",
    traffic: "Unlimitted Traffic",
    storage: "Unlimitted Storage",
    support: "Priority Support",
  },
];

export const FEATURES = [
  "3,857,000 Trusting Customers",
  "99.999% Uptime Guarantee",
  "Lightning Fast CDN",
];

export const PACKAGE_DATA = [
  { 
    id: "plus",
    h1: "Our PLUS Plan",
    h2: "The most popular choice of our customers.",
    p: "Benefit from increased storage and faster support to ensure that your mission-critical data and applicationsare always available!",
  },
  { 
    id: "free",
    h1: "Our FREE Plan",
    h2: "An extremely solid start into our hosting world.",
    p: "Get started immediately at zero cost!",
  },
  {
    id: "premium",
    h1: "Our PREMIUM Plan",
    h2: "All your enterprise needs. Instant support, guaranteed uptime.",
    p: "The best solution for small to large enterprises. Because hosting shouldn't be in the way!",
  },
];
