export const PLANS = [
  {
    title: "FREE",
    price: "$0/month",
    description: "For hobby projects or small treams",
    styling: { article: "plan", ul: "plan__features", h2: "plan__price"},
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
    styling: { article: "plan", ul: "plan__features",  h2: "plan__price" },
    workspace: "10 Workspaces",
    traffic: "Unlimitted Traffic",
    storage: "Unlimitted Storage",
    support: "Priority Support",
  },
];

export const FEATURES = ["3,857,000 Trusting Customers", "99.999% Uptime Guarantee", "Lightning Fast CDN"];