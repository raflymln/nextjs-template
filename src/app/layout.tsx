import "@/styles/globals.css";

import type { Metadata } from "next";

import { mc } from "@/lib/functions";

import { Inter } from "next/font/google";

const font_inter = Inter({
    preload: true,
    adjustFontFallback: true,
    display: "swap",
    subsets: ["latin", "latin-ext"],
    style: ["normal"],
    weight: ["400", "500", "600"],
    variable: "--font-inter",
});

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "Welcome to my Next.js app!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className={mc(font_inter.variable)}>
            <body>{children}</body>
        </html>
    );
}
