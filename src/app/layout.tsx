import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Sora, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ayostack.dev"),

  alternates: {
    canonical: "https://www.ayostack.dev",
  },

  verification: {
    google: "C4Rd0wWrj50wb5u9oHgFCx-yQA8VA9qyfoeSZ_nJ27U",
  },

  title: {
    default:
      "Full-Stack Software Engineer Nigeria | Next.js, FastAPI, PostgreSQL | Ayokunle Shittu",
    template: "%s | Ayostack",
  },

  description:
    "Ayokunle Shittu - Full-Stack Software Engineer & Product Engineer in Nigeria. Expert in building scalable Next.js applications, FastAPI REST APIs, PostgreSQL databases, and real-time systems. Specialized in frontend (React, TypeScript), backend (Python, FastAPI), and data-driven solutions.",

  keywords: [
    "Full Stack Developer Nigeria",
    "Next.js Developer Lagos",
    "FastAPI REST API Developer",
    "Python Backend Developer",
    "Celery Task Queue Developer",
    "PostgreSQL Database Developer",
    "React TypeScript Developer",
    "Web Application Developer Nigeria",
    "Scalable Web Applications",
    "Real-time Systems Developer",
    "Full Stack Python Developer",
    "Next.js FastAPI Developer",
    "Data-Driven Solutions",
    "REST API Development",
    "TypeScript Frontend Development",
    "Web Development Services Nigeria",
    "Product Engineer Africa",
    "SaaS Developer",
    "Redis Cache Developer",
    "Tailwind CSS Developer",
    "Vercel Deployment Expert",
    "Database Design Developer",
    "Full Stack Developer Lagos",
  ],

  authors: [{ name: "Ayokunle Shittu" }],
  creator: "Ayokunle Shittu",

  openGraph: {
    title: "Full-Stack Developer Nigeria | Ayokunle Shittu | Next.js & FastAPI Expert",
    description:
      "Expert Full-Stack Developer specializing in Next.js, FastAPI, PostgreSQL, and scalable web applications. Building high-performance products for startups and enterprises across Africa.",
    url: "https://www.ayostack.dev",
    siteName: "Ayostack",
    images: [
      {
        url: "https://www.ayostack.dev/og-image.png?v=20260807",
        width: 1200,
        height: 630,
        alt: "Ayokunle Shittu - Full-Stack Developer Portfolio - Next.js, FastAPI, PostgreSQL",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Full-Stack Developer Nigeria | Next.js, FastAPI, PostgreSQL",
    description:
      "Ayokunle Shittu - Expert Full-Stack Developer building scalable Next.js apps, FastAPI APIs, and PostgreSQL databases. Available for freelance & full-time roles.",
    images: ["https://www.ayostack.dev/og-image.png?v=20260807"],
    creator: "@ayle_2",
    site: "@ayle_2",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/icons/icon-192x192.png",
  },

  applicationName: "Ayostack",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Ayostack",
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#071026",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />

        {/* CONSOLIDATED STRUCTURED DATA - Combined Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://www.ayostack.dev#person",
                  name: "Ayokunle Shittu",
                  url: "https://www.ayostack.dev",
                  image: "https://www.ayostack.dev/og-image.png?v=20260807",
                  jobTitle: "Full-Stack Developer & Product Engineer",
                  worksFor: {
                    "@type": "Organization",
                    "@id": "https://www.ayostack.dev#organization",
                  },
                  sameAs: [
                    "https://github.com/Ayostack-web",
                    "https://www.linkedin.com/in/ayokunleshittu/",
                    "https://x.com/ayle_2",
                  ],
                  knowsAbout: [
                    "Next.js",
                    "FastAPI",
                    "Python",
                    "Celery",
                    "React.js",
                    "TypeScript",
                    "PostgreSQL",
                    "SQL",
                    "REST API Development",
                    "Web Application Development",
                    "Backend Development",
                    "Full-Stack Development",
                    "Redis",
                    "Tailwind CSS",
                    "Real-time Systems",
                    "WebSocket",
                    "Docker",
                    "Vercel",
                    "Git & GitHub",
                  ],
                },
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://www.ayostack.dev#organization",
                  name: "Ayostack",
                  url: "https://www.ayostack.dev",
                  logo: "https://www.ayostack.dev/og-image.png?v=20260807",
                  description: "Full-stack web development services specializing in Next.js, FastAPI, and scalable web applications",
                  foundingDate: "2024",
                  founder: {
                    "@type": "Person",
                    "@id": "https://www.ayostack.dev#person",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "Professional Services",
                    url: "https://www.ayostack.dev",
                  },
                  sameAs: [
                    "https://github.com/Ayostack-web",
                    "https://www.linkedin.com/in/ayokunleshittu/",
                    "https://x.com/ayle_2",
                  ],
                  areaServed: "NG",
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.ayostack.dev",
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      name: "Projects",
                      item: "https://www.ayostack.dev#projects",
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      name: "Skills",
                      item: "https://www.ayostack.dev#skills",
                    },
                  ],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://cssf-funaab.vercel.app#website",
                  name: "CSSF FUNAAB",
                  url: "https://cssf-funaab.vercel.app",
                  description:
                    "Official website of the Cherubim and Seraphim Unification Campus Fellowship (CSSF), FUNAAB Chapter, built by Ayokunle Shittu.",
                  inLanguage: "en-US",
                  author: {
                    "@id": "https://www.ayostack.dev#person",
                  },
                  publisher: {
                    "@id": "https://www.ayostack.dev#person",
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}