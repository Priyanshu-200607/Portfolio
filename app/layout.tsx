import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshu-swami-portfolio.onrender.com"),
  title: "Priyanshu Swami | Backend-Focused Full Stack Developer",
  description:
    "Portfolio of Priyanshu Swami, a backend-focused full stack developer building practical systems in FastAPI, databases, AI automation, and real-world backend architecture.",
  keywords: [
    "Priyanshu Swami",
    "Full Stack Developer",
    "Backend Developer",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "MariaDB",
    "AI Assistant",
    "Face Recognition Attendance System",
  ],
  openGraph: {
    title: "Priyanshu Swami | Backend-Focused Full Stack Developer",
    description:
      "Backend-heavy portfolio focused on real systems, AI automation, FastAPI services, and database-driven applications.",
    url: "https://priyanshu-swami-portfolio.onrender.com",
    siteName: "Priyanshu Swami Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanshu Swami | Backend-Focused Full Stack Developer",
    description:
      "Practical backend systems, AI-powered tools, and production-minded full stack work.",
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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
