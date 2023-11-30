import Link from "next/link";
import { Container } from "components/container";
import { buttonVariants } from "components/ui/button";
import { ArrowRight } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const Banner = async () => {
    const user = await getKindeServerSession().getUser();

    return (
        <Container className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
            <p className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-gray-200 bg-white px-7 py-2 text-sm font-semibold text-gray-700 shadow-md backdrop-blur">
                Quill is now public!
            </p>

            <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
                Chat with your <span className="text-blue-600">documents</span> in seconds.
            </h1>

            <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
                Quill allows you to have conversations with any PDF document. Simply upload your
                file and start asking questions right away.
            </p>

            {user ? (
                <Link
                    className={buttonVariants({
                        size: "lg",
                        className: "mt-5"
                    })}
                    href="/dashboard"
                >
                    Go to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            ) : (
                <Link
                    className={buttonVariants({
                        size: "lg",
                        className: "mt-5"
                    })}
                    href="/api/auth/register"
                >
                    Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            )}
        </Container>
    );
};
