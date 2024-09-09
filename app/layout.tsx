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
      <body className='antialiased'>{children}</body>
    </html>
  );
}
