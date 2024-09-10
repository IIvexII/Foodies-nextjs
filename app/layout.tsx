import Header from "@/components/header";

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Foodie App",
  description: "Foodie App that allows foodies to find and share recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className='bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#282c34] to-[#282c34] text-white'>
        <Header />
        {children}
      </body>
    </html>
  );
}
