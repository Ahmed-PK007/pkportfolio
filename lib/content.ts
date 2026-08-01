export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  overview: string;
  problem?: string;
  strategy: string[];
  execution?: string[];
  creatives?: string[];
  results: { label: string; value: string }[];
  summary: string;
  cover: string;
  gallery: string[];
};

export const logos = [
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.20 AM (1).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.20 AM (2).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.20 AM.jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.21 AM (1).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.21 AM (2).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.21 AM (3).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.21 AM.jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.22 AM (1).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.22 AM (2).jpeg",
  "/images/logos/logo-WhatsApp Image 2026-07-31 at 1.35.22 AM.jpeg",
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "ksa-scaling",
    title: "7-Day Rapid Scaling Strategy – KSA E-commerce",
    eyebrow: "SAR 280K Revenue",
    overview: "The primary goal was to execute an aggressive 7-day scaling phase for a premium e-commerce brand in the Saudi Arabian market.",
    strategy: [
      "Broad Prospecting via CBO: Implemented a Campaign Budget Optimization (CBO) structure targeting a broad audience. By allowing Meta's algorithm to identify winning creatives, we efficiently allocated 50% of the total budget, achieving a stable 6.85x ROAS on cold audiences.",
      "Advantage+ Shopping Campaigns (ASC): Leveraged Meta’s automated Advantage+ system to streamline targeting and creative testing. This campaign delivered the most consistent performance, reaching a 7.92x ROAS and significantly lowering the management overhead during the scaling week.",
      "Dynamic Retargeting (DABA): Utilized Catalog Sales combined with Dynamic Ads for Broad Audiences (DABA) to re-engage high-intent users. This laser-focused approach yielded the highest return of the week with a 9.45x ROAS.",
      "AOV Maximization Strategy: Collaborated on creative messaging that promoted \"Bundles\" and high-ticket offers. This successfully drove the Average Order Value (AOV) to SAR 440, ensuring the campaigns remained highly profitable despite a SAR 58 CPA.",
    ],
    results: [
      { label: "Total Revenue", value: "SAR 280,803.08" },
      { label: "Total Ad Spend", value: "SAR 36,998.00" },
      { label: "Overall ROAS", value: "7.59x" },
      { label: "Total Conversions", value: "638 Purchases" },
      { label: "Average Order Value", value: "SAR 440.13" },
      { label: "Average CPA", value: "SAR 57.99" },
    ],
    summary: "In just 7 days, the account was successfully scaled from a testing phase to a high-volume performance stage, generating over SAR 280,000 in revenue. The success of this project was driven by a data-backed creative strategy and real-time budget reallocation toward top-performing ad sets, proving that high-ticket items can be scaled rapidly in the KSA market with the right funnel structure.",
    cover: "/images/case-studies/ksa-results.jpg",
    gallery: ["/images/case-studies/ksa-results.jpg", "/images/case-studies/Salla Dashboard1.jpg", "/images/case-studies/Salla Dashboard2.jpg", "/images/case-studies/IMG-20251203-WA0004.jpg"],
  },
  {
    slug: "egypt-fashion",
    title: "Scaling a Leading Egyptian Fashion Brand",
    eyebrow: "EGP 2.4M Revenue",
    overview: "The primary mission was to move from \"Steady Growth\" to Aggressive Market Penetration. We aimed to scale the month ad spend to EGP 326K while maintaining a strict efficiency floor. The focus was on high-velocity revenue growth, increasing the brand's digital footprint across Egypt, and maximizing the Customer Acquisition Cost (CAC) efficiency to ensure a highly profitable 7.37x ROAS.",
    strategy: [
      "Creative Testing Sandbox: We implemented a rapid testing workflow where we launched 10-15 new visual \"Hooks\" weekly. We focused on Vibe-based Content (Lifestyle aesthetics) and Problem-Solution Ads (addressing sizing and fabric quality) to build instant trust with the Egyptian shopper.",
      "Horizontal & Vertical Scaling: Once a \"Winning Creative\" was identified in the sandbox, we scaled it vertically by increasing budgets on Broad CBOs and horizontally by launching it into Advantage+ Shopping Campaigns (ASC) to reach untapped segments.",
      "Frictionless Conversion Path: We optimized the Post-Click Experience. By simplifying the mobile checkout and implementing \"One-Click Upsells\" (Buy the Look), we managed to push the Average Order Value (AOV) to EGP 485, which is the \"Sweet Spot\" for fashion profitability in Egypt.",
      "Catalog Sales & Retargeting Mastery: We used the Dynamic Catalog to stay \"Top of Mind.\" By showing users the exact items they hovered over, we eliminated the drop-off in the purchase journey, turning \"Window Shoppers\" into \"Repeat Buyers\" with zero manual effort.",
    ],
    results: [
      { label: "Total Revenue Generated", value: "EGP 2,409,542.74" },
      { label: "Total Ad Investment", value: "EGP 326,879.55" },
      { label: "Account ROAS", value: "7.37x" },
      { label: "Successful Deliveries", value: "4,960 Purchases" },
      { label: "AOV (Average Basket Size)", value: "EGP 485.79" },
      { label: "Target CPA", value: "EGP 65.90" },
    ],
    summary: "Scaling a fashion brand in Egypt isn't about \"Hacks\"; it's about Creative Volume and Systematic Testing. By focusing on what the customer sees (Creatives) and how they buy (Funnel Optimization), we achieved a 2.4M revenue milestone in 30 days. This project proves that a simplified account structure combined with a relentless creative engine is the only way to scale profitably in today's Meta landscape.",
    cover: "/images/case-studies/egypt-results.jpg",
    gallery: ["/images/case-studies/egypt-results.jpg", "/images/case-studies/meta 1.jpg", "/images/case-studies/meta2.png", "/images/case-studies/shopify.png"],
  },
  {
    slug: "tiktok-conversion",
    title: "TikTok Conversion Campaign — Portable Vacuum",
    eyebrow: "Conversion campaign",
    overview: "Drive direct-to-consumer purchases for a portable vacuum using short-form UGC with strong hooks.",
    strategy: [
      "Angles tested: Problem-first, Social proof, Before–after, Convenience, ASMR demo.",
      "Creative formats: UGC testimonial, hands-on demo, voiceover explainer.",
      "Targeting: Broad with pixel signals, interest stacks for cleaning and home gadgets, retargeting viewers and add-to-carts.",
      "Budgeting: Consolidated ad sets, CBO with guardrails, 3-day learning windows.",
      "Optimization: Hook rate tracking, thumb-stop rate, hold-out for best creative, landing page A/B.",
    ],
    creatives: [
      "Best performer: 7s problem-first hook with quick demo and on-screen captions.",
      "Lift vs baseline: +27% in CVR, -18% in CPA.",
      "Insight: Shorter cuts with immediate product payoff beat narrative-style edits.",
    ],
    execution: ["Scale plan: Duplicate best ad set into higher budget with cap, add LLA 2–5%.", "Next test: Creator variation with authority frame and stronger price anchor."],
    results: [{ label: "CVR lift vs baseline", value: "+27%" }, { label: "CPA vs baseline", value: "-18%" }],
    summary: "Shorter cuts with immediate product payoff beat narrative-style edits.",
    cover: "/images/case-studies/tiktok-results.jpg",
    gallery: ["/images/case-studies/tiktok-results.jpg", "/images/case-studies/IMG-20251203-WA0003.jpg", "/images/case-studies/1.jpg", "/images/case-studies/image_original.jpg"],
  },
  {
    slug: "snapchat-story",
    title: "Snapchat Story Ads",
    eyebrow: "Story Ads",
    overview: "Capture impulse purchases via Story Ads with quick motion-first creatives and AR Lens experiment.",
    strategy: [
      "Formats: Story Ads 6–10s, Collection Ads, AR Lens trial.",
      "Targeting: Broad Snap Audience, interest; retarget swipe-ups and cart abandoners.",
      "Funnel: TOF awareness to MOF view content to BOF purchase with offer.",
      "Metrics watched: Swipe-up rate, add-to-cart rate, purchase conversion rate.",
    ],
    creatives: ["6s motion-first cut with bold benefit caption outperformed static by 19%.", "AR Lens increased engagement but required clearer CTA to convert."],
    execution: ["Scale plan: Expand to Collection Ads for top SKUs, add BOF urgency copy.", "Next test: Creator-led GRWM format with product integration."],
    results: [{ label: "Motion-first creative", value: "+19%" }],
    summary: "AR Lens increased engagement but required clearer CTA to convert.",
    cover: "/images/case-studies/snapchat-results.png",
    gallery: ["/images/case-studies/snapchat-results.png", "/images/case-studies/snap caht.PNG", "/images/case-studies/Capture.PNG", "/images/case-studies/1774960319390.jpg", "/images/case-studies/IMG-20251203-WA0007.jpg"],
  },
];
