import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NamariOS",
  description: "The Voice Kernel for Enterprise AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}