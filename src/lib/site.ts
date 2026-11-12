// All the words on the site live here. Replace the placeholder
// services, products, team members and contact details with real ones.

export const site = {
  name: "Hashtrik",
  email: "hello@hashtrik.com",
  description:
    "Hashtrik is a software agency. We design and build web apps, mobile apps and AI tools for growing businesses.",
};

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/products", label: "Products" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    slug: "web",
    name: "Web applications",
    summary: "Dashboards, portals and customer-facing sites that stay fast as they grow.",
    includes: ["Product websites", "Admin dashboards", "Online stores", "Booking and payment flows"],
  },
  {
    slug: "mobile",
    name: "Mobile apps",
    summary: "One codebase, two app stores. iOS and Android apps your customers keep on their home screen.",
    includes: ["iOS and Android apps", "Offline support", "Push notifications", "App store release"],
  },
  {
    slug: "ai",
    name: "AI and automation",
    summary: "Assistants and workflows that take repetitive work off your team's desk.",
    includes: ["Chat assistants on your own data", "Document processing", "Workflow automation", "Reports that write themselves"],
  },
  {
    slug: "design",
    name: "Product design",
    summary: "Screens people understand the first time, tested before a line of code is written.",
    includes: ["User research", "Wireframes and prototypes", "Interface design", "Design systems"],
  },
  {
    slug: "cloud",
    name: "Cloud and DevOps",
    summary: "Hosting that scales, releases that don't break things, and bills that make sense.",
    includes: ["Cloud setup and migration", "Automated releases", "Monitoring and alerts", "Cost reviews"],
  },
  {
    slug: "support",
    name: "Care and support",
    summary: "We stay after launch. Fixes, updates and small improvements every month.",
    includes: ["Bug fixes", "Security updates", "Performance checks", "Monthly improvements"],
  },
];

export const steps = [
  { name: "Listen", text: "A call or two to understand the problem, the people who have it and what done looks like." },
  { name: "Sketch", text: "A clickable prototype and a fixed plan with scope, price and dates, before you commit." },
  { name: "Build", text: "Two-week rounds. You see working software at the end of each one and steer what comes next." },
  { name: "Launch", text: "We release, watch it in real use, and stay on to fix and improve." },
];

export const products = [
  {
    name: "Trikdesk",
    status: "Live",
    summary: "A shared inbox for customer support. Email, chat and social messages in one queue.",
    points: ["Assign and track conversations", "Saved replies", "Weekly response-time report"],
  },
  {
    name: "Trikforms",
    status: "Beta",
    summary: "Forms and surveys you can build in minutes and embed anywhere.",
    points: ["Drag-and-drop builder", "File uploads and payments", "Answers sent to your spreadsheet"],
  },
  {
    name: "Trikbooks",
    status: "In development",
    summary: "Invoicing and expense tracking for small businesses that don't have an accountant.",
    points: ["Invoices in two taps", "Receipt scanning", "Month-end summary"],
  },
];

export const team = [
  { name: "Arif Rahman", role: "Founder, engineering" },
  { name: "Nadia Islam", role: "Head of design" },
  { name: "Tanvir Ahmed", role: "Backend engineer" },
  { name: "Sadia Karim", role: "Frontend engineer" },
  { name: "Rakib Hasan", role: "Mobile engineer" },
  { name: "Mitu Chowdhury", role: "Project manager" },
];

export const principles = [
  { name: "You talk to the people building it", text: "No account managers in between. The engineer and designer on your project are in the call." },
  { name: "Fixed scope, fixed price", text: "You know the cost before we start. If the scope changes, we agree the new price first." },
  { name: "You own everything", text: "Code, designs and accounts are yours from day one. Leaving us is always easy." },
];

export const tools = [
  "Next.js", "React", "TypeScript", "Flutter", "Swift", "Kotlin",
  "Node.js", "Python", "PostgreSQL", "AWS", "Docker", "Figma",
];
