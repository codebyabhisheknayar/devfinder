import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const space_mono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GitLab User Finder",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${space_mono.className}`}>{children}</body>
    </html>
  );
}
