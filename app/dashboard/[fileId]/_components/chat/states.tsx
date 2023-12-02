import { buttonVariants } from "components/ui/button";
import { Loader2, XCircle, ChevronLeft } from "lucide-react";
import { ChatInput } from "./chat-input";
import Link from "next/link";

const states = [
    {
        name: "LOADING",
        component: (
            <>
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <h3 className="text-xl font-semibold">Loading...</h3>
                <p className="text-sm text-zinc-500">We&apos;re preparing your PDF.</p>
            </>
        )
    },
    {
        name: "PROCESSING",
        component: (
            <>
                <Loader2 className="h-8 w-8 animate-spin text-blue-500" />
                <h3 className="text-xl font-semibold">Processing PDF...</h3>
                <p className="text-sm text-zinc-500">This won&apos;t take long.</p>
            </>
        )
    },
    {
        name: "FAILED",
        component: (
            <>
                <XCircle className="h-8 w-8 text-red-500" />
                <h3 className="text-xl font-semibold">Too many pages in PDF</h3>
                {/* <p className="text-sm text-zinc-500">
                            Your{" "}
                            <span className="font-medium">{isSubscribed ? "Pro" : "Free"}</span>{" "}
                            plan supports up to{" "}
                            {isSubscribed
                                ? PLANS.find(p => p.name === "Pro")?.pagesPerPdf
                                : PLANS.find(p => p.name === "Free")?.pagesPerPdf}{" "}
                            pages per PDF.
                        </p> */}
                <Link
                    href="/dashboard"
                    className={buttonVariants({
                        variant: "secondary",
                        className: "mt-4"
                    })}
                >
                    <ChevronLeft className="mr-1.5 h-3 w-3" />
                    Back
                </Link>
            </>
        )
    }
];

export const State = ({ state }: { state: "LOADING" | "PROCESSING" | "FAILED" }) => {
    const { component } = states.find(s => s.name === state) ?? states[0];

    return (
        <div className="relative flex min-h-full flex-col justify-between gap-2 divide-y divide-zinc-200 bg-zinc-50">
            <div className="mb-28 flex flex-1 flex-col items-center justify-center">
                <div className="flex flex-col items-center gap-2">{component}</div>
            </div>

            <ChatInput isDisabled />
        </div>
    );
};
