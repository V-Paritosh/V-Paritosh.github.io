import type React from "react";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Paritosh Vaghasiya",
  description:
    "Portfolio of Paritosh Vaghasiya — building secure, AI-powered, data-driven, and full-stack web solutions. Explore projects, skills, and experiences in tech.",
  keywords: [
    "Paritosh",
    "Paritosh Vaghasiya",
    "Vaghasiya",
    "web design",
    "SEO",
    "backend development",
    "frontend development",
    "full stack developer",
    "computer science",
    "AI",
    "artificial intelligence",
    "data science",
    "machine learning",
    "cybersecurity",
    "hackathon",
    "Illinois debate",
    "math team",
    "BPA award",
    "problem-solving",
    "high school student",
    "coding",
    "programming",
    "JavaScript",
    "React",
    "portfolio",
    "website development",
    "Supabase",
    "web developer",
    "web projects",
    "STEM",
    "coding challenges",
    "web technologies",
    "software development",
    "application development",
    "app design",
    "tech enthusiast",
    "logical thinking",
    "digital solutions",
    "web applications",
    "data analysis",
    "user experience",
    "UI/UX design",
    "educational technology",
    "coding tutorials",
    "project management",
    "GitHub",
    "version control",
    "agile development",
  ],
  authors: [
    { name: "Paritosh Vaghasiya", url: "https://v-paritosh.github.io/" },
  ],
  author: "Paritosh Vaghasiya",
  creator: "Paritosh Vaghasiya",
  robots: "index, follow",
  icons: {
    icon: [
      { url: "/assets/favicon/favicon.ico" },
      {
        url: "/assets/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      { url: "/assets/favicon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/assets/favicon/site.webmanifest",
  appleWebApp: {
    title: "Paritosh Vaghasiya",
  },
  openGraph: {
    title: "Paritosh Vaghasiya Portfolio Website",
    description:
      "Portfolio of Paritosh Vaghasiya — building secure, AI-powered, data-driven, and full-stack web solutions. Explore projects, skills, and experiences in tech.",
    url: "https://v-paritosh.github.io/",
    siteName: "Paritosh Vaghasiya",
    images: [
      {
        url: "/assets/ogBanner.png", // ideally, replace with a real OG image like /og-banner.jpg
        width: 1200,
        height: 630,
        alt: "Paritosh Vaghasiya",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paritosh Vaghasiya",
    description:
      "Portfolio of Paritosh Vaghasiya — building secure, AI-powered, data-driven, and full-stack web solutions. Explore projects, skills, and experiences in tech.",
    images: ["/assets/ogBanner.png"], // again, ideally a real OG image here
  },
  verification: {
    google: "iqdDaX6hCruc9rj2wkzsHf71B0AqYpaWHajtn7p4sE8",
  },
  alternates: {
    canonical: "https://v-paritosh.github.io/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

import "./globals.css";
