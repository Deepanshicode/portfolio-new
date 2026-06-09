import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Deepanshi Sharma | Technical Associate & Developer",
  description:
    "Portfolio of Deepanshi Sharma — Technical Associate at CP Plus, MCA Candidate, Python Developer specializing in IP networking, surveillance systems, and cybersecurity awareness.",
  keywords: [
    "Deepanshi Sharma",
    "Technical Associate",
    "Python Developer",
    "CP Plus",
    "Cybersecurity",
    "Networking",
    "MCA",
    "Portfolio",
  ],
  authors: [{ name: "Deepanshi Sharma" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Deepanshi Sharma | Technical Associate & Developer",
    description:
      "Building reliable technical solutions through networking, surveillance systems, cybersecurity awareness, and software development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
