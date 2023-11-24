"use client";

import { useRouter, useSearchParams } from "next/navigation";

const AuthCallback = () => {
    const router = useRouter();
    const origin = useSearchParams().get("origin");

    return (
        <div>
            <h1>AuthCallback</h1>
        </div>
    );
};

export default AuthCallback;
