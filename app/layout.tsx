import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Manibhushana KG | Software Engineer",
  description:
    "Portfolio of Manibhushana KG - Software Engineer, Full Stack Developer and AI Developer from Bengaluru.",

  keywords: [
    "Manibhushana KG",
    "Portfolio",
    "Software Engineer",
    "Full Stack Developer",
    "AI Developer",
    "Next.js",
    "React",
    "Java",
    "Python",
    "Oracle",
    "Flask",
  ],

  authors: [
    {
      name: "Manibhushana KG",
    },
  ],

  creator: "Manibhushana KG",

  openGraph: {
    title: "Manibhushana KG | Portfolio",
    description:
      "Software Engineer • Full Stack Developer • AI Developer",
    url: "https://manibhushanakg.vercel.app", // Change after deployment if needed
    siteName: "Manibhushana KG Portfolio",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Manibhushana KG",
    description:
      "Software Engineer • Full Stack Developer • AI Developer",
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}