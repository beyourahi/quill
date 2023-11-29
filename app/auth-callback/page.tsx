"use client";

import { trpc } from "app/_trpc";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

const AuthCallback = () => {
    const router = useRouter();
    const origin = useSearchParams().get("origin");

    trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => success && router.push(`/${origin || "dashboard"}`),
        onError: err => err.data?.code === "UNAUTHORIZED" && router.push("/sign-in"),
        retry: true,
        retryDelay: 500
    });

    return (
        <div className="mt-24 flex w-full justify-center">
            <div className="flex flex-col items-center gap-2">
                <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
                <h3 className="text-xl font-semibold">Hold Up...</h3>
                <p>You will be redirected automatically.</p>
            </div>
        </div>
    );
};

export default AuthCallback;
