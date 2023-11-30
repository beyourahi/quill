import { cn } from "lib";
import Image from "next/image";

export const ValueProposition = () => (
    <div className="relative isolate">
        <BackgroundShape className="left-[calc(50%-11rem)] sm:left-[calc(50%-30rem)]" />
        <ContentImage />
        <BackgroundShape className="left-[calc(50%-13rem)] sm:left-[calc(50%-36rem)]" />
    </div>
);

const ContentImage = () => (
    <div className="mx-auto mt-16 flow-root max-w-6xl px-6 sm:mt-24 lg:px-8">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <Image
                src="/dashboard-preview.jpg"
                alt="product preview"
                width={1364}
                height={866}
                quality={100}
                className="rounded-md bg-white p-2 shadow-2xl ring-1 ring-gray-900/10 sm:p-8 md:p-20"
            />
        </div>
    </div>
);

const BackgroundShape = ({ className }: { className?: string }) => (
    <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    >
        <div
            style={{
                clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }}
            className={cn(
                "relative aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:w-[72.1875rem]",
                className
            )}
        />
        ContentImage
    </div>
);
