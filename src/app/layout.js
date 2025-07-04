import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Muhammad Bilal | Portfolio",
  keywords: [
    "Muhammad Bilal",
    "Portfolio",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Web Developer",
    "Software Engineer",
  ],
  authors: [{ name: "Muhammad Bilal", url: "https://github.com  /bilalTariq00" }],
  creator: "Muhammad Bilal",
  openGraph: {
    title: "Muhammad Bilal | Portfolio",
    description:
      "Full Stack Developer specializing in Next.js, TypeScript, MongoDB, and AWS cloud services.",
    url: "https://portfolio-react-two.vercel.app/",
    siteName: "Muhammad Bilal Portfolio",
    images: [
      {
        url: "https://portfolio-react-two.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Bilal Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  description: "Generated in next by Muhammad Bilal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
