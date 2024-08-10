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
  title: "RescueHome",
  description: "Find nearby shelters, resources, and temporary housing during disasters. Real-time updates to support recovery and safety efforts.",
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
