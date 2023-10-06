import Link from "next/link";
import { Container } from "./Container";
import { buttonVariants } from "@/components/ui/button";
import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
// import UserAccountNav from "./UserAccountNav";
// import MobileNav from "./MobileNav";

export const Navbar = () => {
    // const { getUser } = getKindeServerSession();
    // const user = getUser();

    return (
        <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <Container>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href="/" className="z-40 flex font-semibold">
                        quill.
                    </Link>

                    {/* <MobileNav isAuth={!!user} />

                    <div className="hidden items-center space-x-4 sm:flex">
                        {!user ? (
                            <>
                                <Link
                                    href="/pricing"
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "sm"
                                    })}
                                >
                                    Pricing
                                </Link>
                                <LoginLink
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "sm"
                                    })}
                                >
                                    Sign in
                                </LoginLink>
                                <RegisterLink
                                    className={buttonVariants({
                                        size: "sm"
                                    })}
                                >
                                    Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                                </RegisterLink>
                            </>
                        ) : (
                            <>
                                <Link
                                    href="/dashboard"
                                    className={buttonVariants({
                                        variant: "ghost",
                                        size: "sm"
                                    })}
                                >
                                    Dashboard
                                </Link>

                                <UserAccountNav
                                    name={
                                        !user.given_name || !user.family_name
                                            ? "Your Account"
                                            : `${user.given_name} ${user.family_name}`
                                    }
                                    email={user.email ?? ""}
                                    imageUrl={user.picture ?? ""}
                                />
                            </>
                        )}
                    </div> */}

                    <div className="hidden items-center space-x-4 sm:flex">
                        <Link
                            href="/pricing"
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}
                        >
                            Pricing
                        </Link>

                        <LoginLink
                            className={buttonVariants({
                                variant: "ghost",
                                size: "sm"
                            })}
                        >
                            Sign in
                        </LoginLink>

                        <RegisterLink
                            className={buttonVariants({
                                size: "sm"
                            })}
                        >
                            Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                        </RegisterLink>
                    </div>
                </div>
            </Container>
        </nav>
    );
};