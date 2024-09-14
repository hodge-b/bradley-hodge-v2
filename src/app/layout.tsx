import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import menu from "~/data/menuItems.json";
import Header from "~/components/Header";
import { MenuItem } from "~/types";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Welcome | Bradley Hodge",
  description: "Professional portfolio of Bradley Hodge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems: MenuItem[] = JSON.parse(JSON.stringify(menu.data));

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header menuItems={menuItems} />
        {children}
      </body>
    </html>
  );
}
