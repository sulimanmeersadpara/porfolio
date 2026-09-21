import type { Metadata } from "next";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Suliman Meer | Full Stack Software Engineer",
  description: "Portfolio website for Muhammad Suliman Meer, a Full Stack Software Engineer focused on Python, Django, FastAPI, Next.js, React.js, and SQL databases.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
