import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Share Your Recipe - Foodies',
    description: 'Share your delicious recipes with the Foodies community. Join us and add your favorite recipes today!',
    openGraph: {
        title: 'Share Your Recipe - Foodies',
        description: 'Share your delicious recipes with the Foodies community. Join us and add your favorite recipes today!',
        images: ['/images/burger.jpg'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Share Your Recipe - Foodies',
        description: 'Share your delicious recipes with the Foodies community. Join us and add your favorite recipes today!',
        images: '/images/burger.jpg',
    },
};


export default function ShareMealsLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <> {children} </>
    );
}
