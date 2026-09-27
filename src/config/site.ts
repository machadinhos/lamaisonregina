export const siteConfig = {
  url: "https://www.lamaisonregina.com",
  author: "Pedro Machado (machadinhos) and Manuel Santos",
  gtmId: "GTM-TG5DJPLD",
  googleSiteVerification: "06P2RTJNJDrbrG-sT4uv5yNSCbG0iE7EcN8rolF0JOc",
};

export const pageSlugs = ["", "services", "gallery", "catering", "faq", "contacts"] as const;

export type PageSlug = (typeof pageSlugs)[number];
