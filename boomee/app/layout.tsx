import type { Metadata } from "next";
import "./globals.css"; // make sure this includes your @font-face rules

export const metadata: Metadata = {
  title: "Boomee Phygital Services",
  description: "Revolutionizing livestock care with AI and IoT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
