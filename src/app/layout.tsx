import type { Metadata } from "next";

import { ThemeProvider } from "./components/theme-provider/theme-provider"
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${space_mono.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
