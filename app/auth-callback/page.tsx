"use client";

import { trpc } from "app/_trpc";
import { useRouter, useSearchParams } from "next/navigation";

const AuthCallback = () => {
    const router = useRouter();
    const origin = useSearchParams().get("origin");

    const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
        onSuccess: ({ success }) => success && router.push(origin ? `/${origin}` : "/dashboard")
    });

    return (
        <div>
            <h1>AuthCallback</h1>
        </div>
    );
};

export default AuthCallback;
