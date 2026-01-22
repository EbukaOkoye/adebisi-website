import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import "./designpro-styles.css";

export const metadata: Metadata = {
  title: "nolimit designs - Productized Design Agency website template",
  description: "Hire Full-Service Design Agency For A Simple Monthly Fee",
  generator: "v0.app",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </body>
    </html>
  );
}
