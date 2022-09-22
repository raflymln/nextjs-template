import * as Icon from "@/components/Others/Icons";

import { useCounter } from "@/lib/hooks";
import { ucWords } from "@/lib/functions";

export default function Home() {
    const { count, increment, reset } = useCounter();

    return (
        <div className="flex items-center justify-center min-h-screen">
            <main className="flex flex-col items-center justify-center w-full p-20 text-center gap-4">
                <Icon.WaveHand className="h-48 animate-wave origin-bottom-left mb-8" />

                <h1 className="text-6xl font-bold">
                    <span>Welcome to </span>

                    <a className="underline" href="https://nextjs.org">
                        Next.js!
                    </a>
                </h1>

                <p className="mt-3 text-2xl">
                    {ucWords("Get started by editing")} <code className="p-3 text-lg rounded-md">pages/index.js</code>
                </p>

                <div className="flex gap-4">
                    <button className="bg-black text-white p-3 rounded-md" onClick={increment}>
                        This button has been clicked <u>{count}</u> {count === 1 ? "time" : "times"}.
                    </button>

                    <button className="bg-black text-white p-3 rounded-md" onClick={reset}>
                        Reset
                    </button>
                </div>

                <p className="mt-3 text-sm">
                    <span>Template provided by </span>

                    <a href="https://github.com/raflymln" className="font-bold hover:underline" target={"_blank"} rel="noreferrer">
                        @raflymln
                    </a>
                </p>
            </main>
        </div>
    );
}
