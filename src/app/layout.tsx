import type { Metadata } from "next";
import "./globals.css";
import NavMobile from "@/components/NavMobile";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Real.",
  description: "Socialmedia web application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-primary bg-background min-h-screen w-screen text-dark">
        <NavMobile />
        {children}
        <Navbar />
      </body>
    </html>
  );
}
