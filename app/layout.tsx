import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// custom components
import { Nav } from "@/components/component/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RescueHome",
  description: "Find nearby shelters, resources, and temporary housing during disasters. Real-time updates to support recovery and safety efforts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
