export type BlogPost = {
  slug: string;
  title: string;
  italicWord: string;
  excerpt: string;
  img: string;
  readTime: string;
  date: string;
  author: string;
  tags: string[];
  content: { type: "h2" | "p" | "ul" | "quote"; text?: string; items?: string[] }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "real-reason-your-business-isnt-growing",
    title: "The Real Reason Your Business Isn't Growing (And How AI Fixes It)",
    italicWord: "Growing",
    excerpt:
      "Most businesses don't have a growth problem — they have a leverage problem. Here's how AI changes the math.",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1200&q=72&auto=format",
    readTime: "5 min read",
    date: "May 2026",
    author: "autom8X Team",
    tags: ["AI", "Growth", "Strategy"],
    content: [
      {
        type: "p",
        text: "You're working twelve-hour days. Your inbox is full. Your team is busy. And yet revenue is flat. Sound familiar? Here's the uncomfortable truth: it's almost never a marketing problem, a hiring problem, or a pricing problem. It's a leverage problem.",
      },
      {
        type: "h2",
        text: "Effort doesn't scale. Systems do.",
      },
      {
        type: "p",
        text: "Every hour you spend on repetitive work is an hour you can't spend on the things only you can do — strategy, relationships, product. The businesses that grow fastest are the ones that ruthlessly convert recurring tasks into systems, and they're now doing it with AI at the core.",
      },
      {
        type: "p",
        text: "We work with founders who tell us, \"I just need more time.\" What they actually need is a stack that gives them their time back. A lead-qualifying assistant. An onboarding flow that runs itself. A content engine that doesn't require their attention every morning.",
      },
      {
        type: "h2",
        text: "Where AI actually moves the needle",
      },
      {
        type: "ul",
        items: [
          "Replacing manual data entry with smart extraction — typically saves 10-20 hours/week per team",
          "Qualifying inbound leads before they hit a human — 3-5x faster response times",
          "Generating first drafts of proposals, emails, and reports — 70% less time on writing",
          "Surfacing insights from customer conversations you'd otherwise miss",
        ],
      },
      {
        type: "quote",
        text: "The companies winning right now aren't working harder. They've just built better leverage.",
      },
      {
        type: "h2",
        text: "What this looks like in practice",
      },
      {
        type: "p",
        text: "One of our recent clients — a B2B services firm — was capped at around 40 client meetings a month because their founder was hand-writing every proposal. We built them a proposal generator trained on their voice and past wins. Three weeks later, they were quoting 4x the deals with the same headcount and closing at a higher rate, because every proposal got the founder's attention to the parts that actually mattered.",
      },
      {
        type: "p",
        text: "That's the difference. AI doesn't replace your judgment. It just stops your judgment from being the bottleneck on everything else.",
      },
      {
        type: "h2",
        text: "Where to start",
      },
      {
        type: "p",
        text: "Pick the one task you do every week that you secretly hate. The one that takes two hours and produces something repetitive. That's almost always the first thing worth automating. Once you feel what it's like to get that time back, the rest follows naturally.",
      },
    ],
  },
  {
    slug: "automated-sales-pipeline-in-3-days",
    title: "We Automated a Sales Pipeline in 3 Days — Here's Exactly How",
    italicWord: "Pipeline",
    excerpt:
      "A real case study: turning a chaotic spreadsheet-and-Slack sales process into an automated machine in under a week.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=72&auto=format",
    readTime: "8 min read",
    date: "Apr 2026",
    author: "autom8X Team",
    tags: ["Automation", "Case Study", "Sales"],
    content: [
      {
        type: "p",
        text: "Last month a SaaS company came to us with a familiar story. Leads were leaking. Reps were complaining the CRM was \"out of date the moment they updated it.\" Their founder was spending Sunday nights stitching together spreadsheet exports to figure out where deals actually stood.",
      },
      {
        type: "p",
        text: "Three days later they had a sales pipeline that updated itself, flagged stalled deals automatically, and sent the founder a clean Monday-morning summary. Here's the exact build.",
      },
      {
        type: "h2",
        text: "Day 1 — Mapping the mess",
      },
      {
        type: "p",
        text: "We sat down with the team and traced one deal from first touch to closed-won. We weren't looking for what they thought should happen — we wanted what actually did. Predictably, the real flow had 11 tools, 4 spreadsheets, and 6 unwritten rules.",
      },
      {
        type: "ul",
        items: [
          "Leads arrived from 3 sources: webform, LinkedIn DMs, and referrals via email",
          "Reps would manually add them to HubSpot — sometimes",
          "Follow-ups lived in personal task lists, not the CRM",
          "Win/loss reasons were rarely captured",
        ],
      },
      {
        type: "h2",
        text: "Day 2 — Wiring it together",
      },
      {
        type: "p",
        text: "We built a single intake automation in n8n. Every lead — regardless of source — gets parsed, enriched with company data, scored against an ideal-customer profile, and routed to the right rep with a Slack ping and a pre-filled HubSpot record. No manual entry.",
      },
      {
        type: "p",
        text: "Then we layered in a follow-up engine: if a deal hasn't moved in 5 days, it goes to a \"stalled\" view and the rep gets a nudge with the last conversation summarized by AI. If it stays stalled 5 more days, it pings the founder.",
      },
      {
        type: "h2",
        text: "Day 3 — Reporting and polish",
      },
      {
        type: "p",
        text: "The final piece was the weekly digest. Every Monday at 7 AM, the founder gets one email: pipeline by stage, deals at risk, top 3 opportunities, and one paragraph of AI-generated commentary on what changed since last week.",
      },
      {
        type: "quote",
        text: "The first Monday after launch the founder messaged us: \"I got my Sundays back.\"",
      },
      {
        type: "h2",
        text: "What we'd do differently",
      },
      {
        type: "p",
        text: "We over-engineered the lead scoring on day 1. The first version had eight criteria and confused everyone. We replaced it with three: company size, signal strength, and budget. Reps trusted it immediately. Lesson learned — start dumb, get smart.",
      },
      {
        type: "h2",
        text: "The tools",
      },
      {
        type: "ul",
        items: [
          "n8n for orchestration (self-hosted, ~$20/mo)",
          "HubSpot as the system of record",
          "Clearbit for enrichment",
          "OpenAI for conversation summaries and the weekly digest",
          "Slack as the notification layer",
        ],
      },
      {
        type: "p",
        text: "Total monthly cost: under $200. Founder hours saved: roughly 12 per week. That's the math that makes automation a no-brainer.",
      },
    ],
  },
  {
    slug: "why-most-ai-chatbots-fail",
    title: "Why Most AI Chatbots Fail (And What Actually Makes Them Work)",
    italicWord: "Work",
    excerpt:
      "The dirty secret of \"AI chatbots\": 90% are useless. The 10% that work all do the same five things right.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=72&auto=format",
    readTime: "7 min read",
    date: "Mar 2026",
    author: "autom8X Team",
    tags: ["AI", "Chatbots", "Product"],
    content: [
      {
        type: "p",
        text: "Every business owner we talk to has tried a chatbot. Almost none of them are still using it. Why? Because most chatbots are built like 2018 chatbots — decision trees pretending to be intelligent — and customers can smell it from a mile away.",
      },
      {
        type: "p",
        text: "Here's what separates the chatbots that actually work from the ones that get unplugged after a month.",
      },
      {
        type: "h2",
        text: "1. They know what they don't know",
      },
      {
        type: "p",
        text: "Bad chatbots try to answer everything. Good ones know when to hand off to a human, and they do it gracefully — with the full conversation context attached. The hand-off feels like an escalation, not a failure.",
      },
      {
        type: "h2",
        text: "2. They're grounded in your actual data",
      },
      {
        type: "p",
        text: "A chatbot powered by a generic LLM with no knowledge of your business will confidently make things up. The fix is retrieval — pulling answers from your real documentation, product info, and past tickets before the model speaks. That's the difference between \"I think your refund window is 30 days\" and \"Your refund window is 14 days for digital products, per your account terms.\"",
      },
      {
        type: "h2",
        text: "3. They have memory",
      },
      {
        type: "p",
        text: "The fastest way to make a chatbot feel useless is to make a returning customer re-explain everything. Even basic conversation memory — remembering the user's last order, last question, last preference — instantly upgrades the experience.",
      },
      {
        type: "quote",
        text: "A chatbot that forgets you feels like a tool. A chatbot that remembers feels like a team member.",
      },
      {
        type: "h2",
        text: "4. They have a job, not a vibe",
      },
      {
        type: "p",
        text: "\"Help customers\" is not a job. \"Qualify inbound leads, capture name, company, and pain point, then book a call on the rep's calendar\" is a job. The chatbots that work have crisp objectives. The ones that fail were built to be \"smart\" without anyone asking what success looks like.",
      },
      {
        type: "h2",
        text: "5. They get better every week",
      },
      {
        type: "p",
        text: "The best chatbots have a feedback loop. Every conversation that goes sideways becomes a test case. Every new product or policy update flows into the knowledge base. The teams that treat their chatbot like a product — with a backlog, a release cycle, and metrics — get compounding gains. The teams that treat it as a one-time install plateau immediately.",
      },
      {
        type: "h2",
        text: "The honest test",
      },
      {
        type: "p",
        text: "Ask yourself: if your chatbot disappeared tomorrow, would anyone complain? If the answer is no, it's not pulling its weight. The fix isn't more AI — it's clearer scope, better data, and the willingness to iterate.",
      },
    ],
  },
  {
    slug: "idea-to-live-product-in-2-weeks",
    title: "From Idea to Live Product in 2 Weeks — Our Exact Process",
    italicWord: "Process",
    excerpt:
      "How we ship real, paying-customer-ready products in 14 days. No magic — just ruthless scope and the right stack.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=72&auto=format",
    readTime: "6 min read",
    date: "Feb 2026",
    author: "autom8X Team",
    tags: ["Product", "Process", "Shipping"],
    content: [
      {
        type: "p",
        text: "We get asked all the time: \"Can you really ship a product in two weeks?\" Yes — but only because we cut the right things. Here's the actual playbook.",
      },
      {
        type: "h2",
        text: "Day 1-2 — Cut the scope in half. Then in half again.",
      },
      {
        type: "p",
        text: "Every founder shows up with a feature list. Our first job is to delete most of it. Not because the ideas are bad, but because v1 has exactly one job: prove that the core thing people will pay for actually works. Everything else is a distraction.",
      },
      {
        type: "p",
        text: "We use a simple test: if a feature isn't required for the first paying customer to get value, it doesn't ship in v1.",
      },
      {
        type: "h2",
        text: "Day 3-4 — Design the seams, not the screens",
      },
      {
        type: "p",
        text: "Most people start with mockups. We start with the data model and the API contracts. If the underlying shape is right, the UI is cheap to change. If it's wrong, nothing else matters.",
      },
      {
        type: "h2",
        text: "Day 5-10 — Build in tight loops",
      },
      {
        type: "p",
        text: "We ship a usable build to the client at the end of every day. Not a demo — a real, clickable build they can poke at. The feedback loop is the product.",
      },
      {
        type: "ul",
        items: [
          "Stack: Next.js + Supabase + Vercel — fast, batteries-included, no infra babysitting",
          "Auth, payments, and storage are never custom — use what exists",
          "AI features go through one well-tested wrapper, not five inline calls",
          "Every PR ships behind a flag, so nothing is permanent",
        ],
      },
      {
        type: "h2",
        text: "Day 11-12 — Real users, real money",
      },
      {
        type: "p",
        text: "Before we polish anything, we get five real users in. Not friends. Not the team. People who fit the target customer. We watch them use it, in silence. Every place they pause, every place they squint — that's a fix list.",
      },
      {
        type: "quote",
        text: "The biggest mistake we see in 2-week launches is polishing what nobody noticed and leaving broken what everybody hit.",
      },
      {
        type: "h2",
        text: "Day 13-14 — Launch, then listen",
      },
      {
        type: "p",
        text: "We do a soft launch on day 13 — usually to an email list, a small community, or a warm Twitter audience. Day 14 is for fixing what breaks under real traffic. Then we keep shipping. The first 30 days post-launch usually matter more than the 14 leading up to it.",
      },
      {
        type: "h2",
        text: "What this isn't",
      },
      {
        type: "p",
        text: "Two-week launches aren't right for everything. They work great for tools, internal apps, AI-powered SaaS, and content products. They're a bad fit for hardware, regulated industries, and anything where v1 needs to be perfect from day one. Know which side of that line you're on before you start.",
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
