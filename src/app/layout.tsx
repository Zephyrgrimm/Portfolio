import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niraj SB — Software Engineer & IT Student",
  description:
    "Portfolio of Niraj SB — B.Tech IT student at Rajalakshmi Engineering College with experience in Python, AI/ML, cloud security, and CRM automation.",
  keywords: [
    "Niraj SB",
    "software engineer",
    "Python developer",
    "AI ML",
    "cloud security",
    "portfolio",
  ],
  authors: [{ name: "Niraj SB" }],
  icons: { icon: "/Portfolio/favicon.svg" },
  openGraph: {
    title: "Niraj SB — Software Engineer & IT Student",
    description:
      "Portfolio of Niraj SB — B.Tech IT student with hands-on experience in Python, AI/ML, and CRM automation.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niraj SB — Software Engineer & IT Student",
    description:
      "Portfolio of Niraj SB — B.Tech IT student with hands-on experience in Python, AI/ML, and CRM automation.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#F7F5F0] text-[#1C1C1C] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
