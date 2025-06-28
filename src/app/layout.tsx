import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta-sans",
});

export const metadata: Metadata = {
  title: "Hauzan Rafi Attallah - Portfolio",
  description:
    "A portfolio showcasing the work of Hauzan Rafi Attallah, a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakartaSans.className}>
      <body
        className={`${jakartaSans.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
