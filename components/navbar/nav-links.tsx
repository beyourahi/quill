import Link from "next/link";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "components/ui/button";
import { UserAccount } from "./user-account";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export const NavLinks = async () => {
    const user = await getKindeServerSession().getUser();

    return (
        <div className="hidden items-center space-x-4 sm:flex">
            {user ? (
                <>
                    <Link
                        href="/dashboard"
                        className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                        Dashboard
                    </Link>

                    <UserAccount />
                </>
            ) : (
                <>
                    <Link
                        href="/pricing"
                        className={buttonVariants({ variant: "ghost", size: "sm" })}
                    >
                        Pricing
                    </Link>

                    <LoginLink className={buttonVariants({ variant: "ghost", size: "sm" })}>
                        Log in
                    </LoginLink>

                    <RegisterLink className={buttonVariants({ size: "sm" })}>
                        Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                    </RegisterLink>
                </>
            )}
        </div>
    );
};
