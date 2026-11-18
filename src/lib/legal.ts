// Text of the Privacy Policy and Terms. These are a general-purpose draft:
// have a lawyer review them before relying on them.

export const legalUpdated = "November 17, 2026";

export type LegalSection = { id: string; heading: string; paragraphs?: string[]; items?: string[]; after?: string[] };

export const privacy: LegalSection[] = [
  {
    id: "summary",
    heading: "The short version",
    paragraphs: [
      "This website collects very little. It has no accounts, no advertising and no tracking for marketing. We learn who you are only if you choose to write to us.",
      "This policy covers the website at hashtrik.com. If you become a client or an Oikko member, the agreement you sign with us explains how we handle the information involved in that work.",
    ],
  },
  {
    id: "what-we-collect",
    heading: "Information we collect",
    paragraphs: ["We collect information in three ways."],
    items: [
      "Information you send us. The contact form on this site does not send anything to our servers. It opens a draft in your own email app, and we receive your name, email address and message only when you press send there. The same applies if you email us directly.",
      "Technical information. Our hosting provider records standard server logs when a page is requested, such as IP address, browser type, the page requested and the time. We use these to keep the site running and secure.",
      "A setting saved on your device. If you switch between the light and dark theme, your browser remembers that choice in its local storage. It stays on your device and is not sent to us.",
    ],
  },
  {
    id: "how-we-use-it",
    heading: "How we use information",
    items: [
      "To reply to your message and discuss the project or product you asked about.",
      "To prepare a proposal or agreement if you ask for one.",
      "To operate, secure and improve this website.",
      "To meet our legal obligations.",
    ],
    after: ["We do not sell personal information, and we do not use it for advertising."],
  },
  {
    id: "cookies",
    heading: "Cookies and third-party services",
    paragraphs: [
      "We do not set advertising or analytics cookies. Two outside services are involved in showing you this site:",
    ],
    items: [
      "Hosting. The site is hosted by Vercel, which processes the technical information described above on our behalf.",
      "Google Maps. The Contact page shows a map supplied by Google. When that page loads, your browser connects to Google, which may set its own cookies and collect information under Google's privacy policy. The rest of the site does not load Google Maps.",
    ],
    after: ["Links from this site to other websites are covered by those websites' own policies."],
  },
  {
    id: "sharing",
    heading: "Who we share information with",
    paragraphs: [
      "We share personal information only with service providers that help us run the business, such as our email and hosting providers, and only as far as they need it to do that work. We may also disclose information when the law requires it, or to protect our rights, our clients or the public.",
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    paragraphs: [
      "We keep correspondence for as long as it is needed to answer you and to maintain a record of our business dealings, and then delete it. Server logs are kept for a limited period by our hosting provider.",
    ],
  },
  {
    id: "your-choices",
    heading: "Your choices and rights",
    paragraphs: [
      "You can ask us what personal information we hold about you, ask us to correct or delete it, or ask us to stop contacting you. Depending on where you live, you may have further rights under local privacy law, such as the right to object to certain uses or to receive a copy of your information.",
      "To make a request, write to hello@hashtrik.com. We will respond within a reasonable time and will not treat you differently for making a request.",
    ],
  },
  {
    id: "security",
    heading: "Security",
    paragraphs: [
      "We use reasonable technical and organisational measures to protect the information we hold. No website or email system can be guaranteed to be completely secure, so please do not send us passwords or other highly sensitive information by email.",
    ],
  },
  {
    id: "children",
    heading: "Children",
    paragraphs: [
      "This website is intended for businesses and adults. We do not knowingly collect personal information from children under 13. If you believe a child has sent us personal information, write to us and we will delete it.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    paragraphs: [
      "We may update this policy as the site or the law changes. The date at the top of the page shows when it was last revised. Significant changes will be made clear on this page.",
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    paragraphs: [
      "Questions about this policy or about your information can be sent to hello@hashtrik.com. Hashtrik is based in Lansdale, Pennsylvania, United States.",
    ],
  },
];

export const terms: LegalSection[] = [
  {
    id: "agreement",
    heading: "Agreement to these terms",
    paragraphs: [
      "These terms apply to your use of the website at hashtrik.com, which is operated by Hashtrik (\"we\", \"us\"). By using the site you agree to them. If you do not agree, please do not use the site.",
    ],
  },
  {
    id: "services",
    heading: "Our services and separate agreements",
    paragraphs: [
      "This website describes the services and products we offer. It is information, not an offer or a contract. Timelines, prices, plans and features mentioned on the site are general descriptions and may change.",
      "Any project, subscription or product we provide to you, including Oikko, is governed by a separate written agreement between you and Hashtrik. Where that agreement and these terms differ, that agreement applies.",
    ],
  },
  {
    id: "use",
    heading: "Using this site",
    paragraphs: ["You may use the site for lawful purposes. You agree not to:"],
    items: [
      "break any law or infringe anyone's rights while using it;",
      "try to gain unauthorised access to the site, its servers or related systems;",
      "interfere with the site's operation, for example by introducing malicious code or overloading it;",
      "copy the site in bulk by automated means without our permission;",
      "present yourself as Hashtrik or suggest that we endorse you when we do not.",
    ],
  },
  {
    id: "ip",
    heading: "Intellectual property",
    paragraphs: [
      "The content of this site, including its text, design, graphics, the Hashtrik name and logo, and the Oikko name, belongs to Hashtrik or its licensors and is protected by law. You may view the site and share links to it. You may not reproduce, modify or distribute its content for commercial purposes without our written permission.",
      "Names and logos of other companies mentioned on the site belong to their owners. Mentioning a technology or tool does not imply a partnership with or endorsement by its owner.",
    ],
  },
  {
    id: "messages",
    heading: "Messages you send us",
    paragraphs: [
      "When you write to us, please do not include confidential information until a confidentiality agreement is in place. We are happy to sign one before you share details. Without one, we are free to use general ideas and feedback you send, but we will not publish your message or identify you without your permission.",
    ],
  },
  {
    id: "third-parties",
    heading: "Third-party links and services",
    paragraphs: [
      "The site may link to or embed services run by others, such as the map on the Contact page. We do not control those services and are not responsible for their content or practices.",
    ],
  },
  {
    id: "disclaimer",
    heading: "No warranties",
    paragraphs: [
      "The site is provided \"as is\" and \"as available\". To the fullest extent the law allows, we make no warranties about it, whether express or implied, including that it will be accurate, complete, uninterrupted or free of errors. Nothing on the site is professional advice.",
    ],
  },
  {
    id: "liability",
    heading: "Limitation of liability",
    paragraphs: [
      "To the fullest extent the law allows, Hashtrik and its owners, employees and contractors are not liable for any indirect, incidental, special or consequential loss, or for any loss of profits, data or goodwill, arising from your use of the site. Our total liability for any claim relating to the site is limited to one hundred US dollars.",
      "Some places do not allow certain limits on liability, so parts of this section may not apply to you.",
    ],
  },
  {
    id: "indemnity",
    heading: "Indemnity",
    paragraphs: [
      "You agree to cover Hashtrik against claims and costs, including reasonable legal fees, that result from your breach of these terms or your misuse of the site.",
    ],
  },
  {
    id: "law",
    heading: "Governing law",
    paragraphs: [
      "These terms are governed by the laws of the Commonwealth of Pennsylvania, United States, without regard to its conflict-of-law rules. Any dispute relating to the site will be brought in the state or federal courts located in Pennsylvania, and you consent to their jurisdiction.",
    ],
  },
  {
    id: "changes",
    heading: "Changes to the site and these terms",
    paragraphs: [
      "We may change or withdraw any part of the site at any time. We may also update these terms; the date at the top of the page shows the latest revision. Continuing to use the site after a change means you accept the updated terms.",
    ],
  },
  {
    id: "general",
    heading: "General",
    paragraphs: [
      "If any part of these terms is found to be unenforceable, the rest stays in effect. Our not enforcing a term is not a waiver of it. These terms, together with our Privacy Policy, are the whole agreement between you and us about the use of this site.",
    ],
  },
  {
    id: "contact",
    heading: "Contact us",
    paragraphs: [
      "Questions about these terms can be sent to hello@hashtrik.com. Hashtrik is based in Lansdale, Pennsylvania, United States.",
    ],
  },
];
