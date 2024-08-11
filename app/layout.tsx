import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

// custom components
import { Nav } from "@/components/component/Nav";
import { Fotter } from "@/components/component/Fotter"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RescueHome | Find Safe Shelter During Emergencies",
  description: "Locate nearby shelters, resources, and temporary housing during disasters. Real-time updates to support recovery and safety efforts.",
  keywords: "emergency shelter, disaster relief, temporary housing, safety resources",
  openGraph: {
    title: "RescueHome | Emergency Shelter Finder",
    description: "Find safe shelter and resources during emergencies",
    images: [{ url: "https://images.unsplash.com/photo-1558522195-e1201b090344?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SGVscGluZyUyMEhhbmRzfGVufDB8MHwwfHx8MA%3D%3D" }],
    url: "https://zap-kohl.vercel.app/",
    siteName: "RescueHome",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RescueHome | Emergency Shelter Finder",
    description: "Find safe shelter and resources during emergencies",
    images: ["https://zap-kohl.vercel.app/"],
    site: "@rescuehome",
    creator: "@rescuehome",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

      <html lang="en">
        <body className={`${inter.className} `}>
          <Nav />
          {children}
          <Fotter />
        </body>
      </html>
    </ClerkProvider>
  );
}
