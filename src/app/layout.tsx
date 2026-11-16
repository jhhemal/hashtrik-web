import type { Metadata } from "next";
import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/lib/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--ff-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const body = Hanken_Grotesk({
  variable: "--ff-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Hashtrik | Software company in Lansdale, PA", template: "%s | Hashtrik" },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", locale: "en_US" },
};

// Tells search engines who and where the company is.
const organization = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: site.address.country,
  },
  founder: [
    { "@type": "Person", name: "Asmaul-Husna Rinvi", jobTitle: "CEO and co-founder" },
    { "@type": "Person", name: "Jahidul Hasan", jobTitle: "CTO and co-founder" },
  ],
}).replace(/</g, "\\u003c");

// Marks that JavaScript is running (for scroll reveals) and applies a saved
// light/dark choice before the first paint, so there is no flash.
const themeScript = `(function(){document.documentElement.classList.add("js");try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: organization }} />
      </head>
      <body className="flex min-h-screen flex-col">
        <a href="#main" className="button sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60]">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
