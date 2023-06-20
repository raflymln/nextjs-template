import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "My Next.js App",
    description: "Welcome to my Next.js app!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
