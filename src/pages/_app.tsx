import "../styles/globals.css";
import type { AppProps } from "next/app";
import MetaTags from "@/components/Sections/MetaTags";

const metaData = {
    title: "My Next JS Website",
    description: "With Meta Tags you can edit and experiment with your content then preview how your webpage will look on Google, Facebook, Twitter and more!",
    url: "https://www.example.com",
    image: "https://www.example.com/image.jpg",
    themeColor: "#ffffff",
    keywords: "key1, key2, key3, key4, key5, key6",
    author: "Rafly Maulana",
    charSet: "utf-8",
    language: "English",
    icons: [
        {
            src: "/images/favicon.ico",
            sizes: "32x32",
            type: "image/ico",
        },
    ],
};

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <MetaTags metaData={metaData} />
            <Component {...pageProps} />
        </>
    );
};

export default App;
