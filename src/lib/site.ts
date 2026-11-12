// All the words on the site live here. Replace the placeholder
// services, products, team members, facts and contact details with real ones.

export const site = {
  name: "Hashtrik",
  email: "hello@hashtrik.com",
  hours: "Sunday to Thursday, 10am to 7pm",
  description:
    "Hashtrik is a software agency. We design and build web apps, mobile apps and AI tools for growing businesses.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const facts = [
  { value: "1 day", label: "to get a reply to your first message" },
  { value: "2 weeks", label: "between working releases you can try yourself" },
  { value: "Fixed", label: "price, agreed before any work starts" },
  { value: "100%", label: "of the code and designs belong to you" },
];

export const services = [
  {
    slug: "web",
    name: "Web applications",
    summary: "Dashboards, portals and customer-facing sites that stay fast as they grow.",
    includes: ["Product websites", "Admin dashboards", "Online stores", "Booking and payment flows"],
    goodFor: "Businesses replacing spreadsheets or an old system with something their team and customers can use from any browser.",
    timeline: "6 to 14 weeks",
    tools: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    slug: "mobile",
    name: "Mobile apps",
    summary: "One codebase, two app stores. iOS and Android apps your customers keep on their home screen.",
    includes: ["iOS and Android apps", "Offline support", "Push notifications", "App store release"],
    goodFor: "Products people use on the move: deliveries, bookings, field teams, loyalty and community apps.",
    timeline: "8 to 16 weeks",
    tools: ["Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "ai",
    name: "AI and automation",
    summary: "Assistants and workflows that take repetitive work off your team's desk.",
    includes: ["Chat assistants on your own data", "Document processing", "Workflow automation", "Reports that write themselves"],
    goodFor: "Teams that answer the same questions, copy data between tools or read the same kind of document every day.",
    timeline: "3 to 8 weeks",
    tools: ["Claude", "Python", "LangGraph", "Vector search"],
  },
  {
    slug: "design",
    name: "Product design",
    summary: "Screens people understand the first time, tested before a line of code is written.",
    includes: ["User research", "Wireframes and prototypes", "Interface design", "Design systems"],
    goodFor: "Founders who need to show an idea to investors or users, and teams whose product works but confuses people.",
    timeline: "2 to 6 weeks",
    tools: ["Figma", "Prototypes", "User testing"],
  },
  {
    slug: "cloud",
    name: "Cloud and DevOps",
    summary: "Hosting that scales, releases that don't break things, and bills that make sense.",
    includes: ["Cloud setup and migration", "Automated releases", "Monitoring and alerts", "Cost reviews"],
    goodFor: "Products that go down under load, take a whole day to release, or cost more to host every month.",
    timeline: "2 to 6 weeks",
    tools: ["AWS", "Docker", "GitHub Actions", "Terraform"],
  },
  {
    slug: "support",
    name: "Care and support",
    summary: "We stay after launch. Fixes, updates and small improvements every month.",
    includes: ["Bug fixes", "Security updates", "Performance checks", "Monthly improvements"],
    goodFor: "Live products that need a reliable team on call, including ones we did not build.",
    timeline: "Monthly, cancel any time",
    tools: ["Uptime monitoring", "Error tracking", "Monthly report"],
  },
];

export const steps = [
  {
    name: "Listen",
    time: "Week 1",
    text: "A call or two to understand the problem, the people who have it and what done looks like.",
    output: "A one-page summary of the goal",
  },
  {
    name: "Sketch",
    time: "Weeks 1 to 3",
    text: "A clickable prototype and a fixed plan with scope, price and dates, before you commit.",
    output: "Prototype, scope, price and dates",
  },
  {
    name: "Build",
    time: "Two-week rounds",
    text: "You see working software at the end of each round and steer what comes next.",
    output: "A release you can try every two weeks",
  },
  {
    name: "Launch",
    time: "Launch and after",
    text: "We release, watch it in real use, and stay on to fix and improve.",
    output: "Live product, handover and 30 days of free fixes",
  },
];

export const industries = [
  { name: "Healthcare", example: "Appointment booking, patient records and clinic dashboards." },
  { name: "Retail and e-commerce", example: "Online stores, stock management and delivery tracking." },
  { name: "Education", example: "Course platforms, student portals and exam tools." },
  { name: "Finance", example: "Invoicing, payment collection and reporting dashboards." },
  { name: "Logistics", example: "Driver apps, route planning and order tracking." },
  { name: "Startups", example: "A first version in weeks, built so it can grow later." },
];

export const engagements = [
  {
    name: "Fixed project",
    bestFor: "A clear idea with a deadline",
    price: "One fixed price",
    points: ["Scope, price and dates agreed up front", "Paid in stages as releases arrive", "30 days of free fixes after launch"],
  },
  {
    name: "Dedicated team",
    bestFor: "A product that keeps evolving",
    price: "Monthly fee",
    featured: true,
    points: ["Designer and engineers working only on your product", "You set priorities every two weeks", "Scale the team up or down with a month's notice"],
  },
  {
    name: "Care plan",
    bestFor: "A live product that needs looking after",
    price: "Monthly fee",
    points: ["Fixes, updates and security patches", "A set number of improvement hours each month", "Monthly health report in plain language"],
  },
];

export const stack = [
  { group: "Web", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { group: "Mobile", items: ["Flutter", "Swift", "Kotlin"] },
  { group: "Backend", items: ["Node.js", "Python", "PostgreSQL", "Redis"] },
  { group: "AI", items: ["Claude", "LangGraph", "Vector search"] },
  { group: "Cloud", items: ["AWS", "Docker", "Terraform", "GitHub Actions"] },
  { group: "Design", items: ["Figma", "Prototyping", "Design systems"] },
];

export const tools = stack.flatMap((group) => group.items);

export const faqs = [
  {
    q: "How much does a project cost?",
    a: "It depends on the scope, so we don't quote before we understand it. After one or two calls you get a fixed price in writing. Small tools start from a few weeks of work; full products take a few months.",
  },
  {
    q: "How long does it take?",
    a: "A first usable version usually takes 6 to 14 weeks. You don't wait until the end to see it: there is a working release every two weeks.",
  },
  {
    q: "Who owns the code and designs?",
    a: "You do, from day one. The code lives in your own account and you can take it to another team at any time.",
  },
  {
    q: "What happens after launch?",
    a: "Every project includes 30 days of free fixes. After that most clients move to a monthly care plan, but it is optional.",
  },
  {
    q: "Can you take over a project someone else started?",
    a: "Yes. We start with a short paid review of the existing code and tell you honestly whether to keep it, repair it or rebuild parts of it.",
  },
  {
    q: "Will you sign an NDA?",
    a: "Yes. Send yours or ask for ours before you share anything sensitive.",
  },
];

export const products = [
  {
    name: "Trikdesk",
    status: "Live",
    summary: "A shared inbox for customer support. Email, chat and social messages in one queue.",
    audience: "Support teams of 2 to 30 people",
    points: [
      "Assign and track conversations",
      "Saved replies",
      "Weekly response-time report",
      "Internal notes on any message",
      "Customer history in one place",
      "Works with email, Messenger and WhatsApp",
    ],
  },
  {
    name: "Trikforms",
    status: "Beta",
    summary: "Forms and surveys you can build in minutes and embed anywhere.",
    audience: "Marketers, schools and event organisers",
    points: [
      "Drag-and-drop builder",
      "File uploads and payments",
      "Answers sent to your spreadsheet",
      "Show or skip questions based on answers",
      "Embed on any website",
      "Email alerts for new answers",
    ],
  },
  {
    name: "Trikbooks",
    status: "In development",
    summary: "Invoicing and expense tracking for small businesses that don't have an accountant.",
    audience: "Freelancers and shops with up to 10 staff",
    points: [
      "Invoices in two taps",
      "Receipt scanning",
      "Month-end summary",
      "Payment reminders",
      "Works offline on mobile",
      "Export for your tax filing",
    ],
  },
];

// The team tree: two co-founders, each with the people who report to them.
// The founders are real; the five people under them are placeholders.
export type Person = { name: string; role: string; bio: string; skills: string[] };
export type Founder = Person & { reports: Person[] };

export const founders: Founder[] = [
  {
    name: "Asmaul-Husna Rinvi",
    role: "CEO and co-founder",
    bio: "Leads the company, client relationships and product direction.",
    skills: ["Strategy", "Clients", "Product"],
    reports: [
      {
        name: "Nadia Islam",
        role: "Head of design",
        bio: "Turns rough ideas into prototypes people can click through.",
        skills: ["Research", "Figma"],
      },
      {
        name: "Mitu Chowdhury",
        role: "Project manager",
        bio: "Keeps scope, dates and budget honest, and is your day-to-day contact.",
        skills: ["Planning", "Delivery"],
      },
    ],
  },
  {
    name: "Jahidul Hasan",
    role: "CTO and co-founder",
    bio: "Leads engineering and sets the technical direction of every product.",
    skills: ["Architecture", "Engineering", "Cloud"],
    reports: [
      {
        name: "Tanvir Ahmed",
        role: "Backend engineer",
        bio: "Builds the databases, APIs and integrations behind every product.",
        skills: ["Python", "PostgreSQL"],
      },
      {
        name: "Sadia Karim",
        role: "Frontend engineer",
        bio: "Makes interfaces fast, accessible and pleasant to use.",
        skills: ["React", "Next.js"],
      },
      {
        name: "Rakib Hasan",
        role: "Mobile engineer",
        bio: "Ships iOS and Android apps from a single codebase.",
        skills: ["Flutter", "Swift"],
      },
    ],
  },
];

export const principles = [
  { name: "You talk to the people building it", text: "No account managers in between. The engineer and designer on your project are in the call." },
  { name: "Fixed scope, fixed price", text: "You know the cost before we start. If the scope changes, we agree the new price first." },
  { name: "You own everything", text: "Code, designs and accounts are yours from day one. Leaving us is always easy." },
  { name: "Working software, often", text: "A release you can try every two weeks, so nothing is a surprise at the end." },
  { name: "Plain language", text: "Updates and reports are written so anyone on your team can follow them." },
  { name: "We say no when it helps", text: "If a feature will not pay for itself, we tell you before you spend money on it." },
];
