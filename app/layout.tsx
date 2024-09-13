import Header from "@/components/header";

import type { Metadata } from "next";
import "./globals.css";

import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: 'Foodies - Share and Discover Recipes',
  description: 'Foodies is a platform where you can share and discover recipes from around the world.',
  openGraph: {
    title: 'Foodies - Share and Discover Recipes',
    description: 'Foodies is a platform where you can share and discover recipes from around the world.',
    images: ['/images/pizza.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foodies - Share and Discover Recipes',
    description: 'Foodies is a platform where you can share and discover recipes from around the world.',
    images: ['/images/burger.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name="msvalidate.01" content="AB69BA2708E29C41FE3282B9690EABEB" />
      </head>
      <body className='bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#282c34] to-[#282c34] text-white'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
