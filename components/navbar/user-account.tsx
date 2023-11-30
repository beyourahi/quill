// import { getUserSubscriptionPlan } from "lib/stripe";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "components/ui/dropdown-menu";
import Link from "next/link";
import { Gem } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { UserAvatar } from "./user-avatar";
import { UserInfo } from "./user-info";

export const UserAccount = async () => {
    // const subscriptionPlan = await getUserSubscriptionPlan();
    const user = await getKindeServerSession().getUser();

    const name =
        user?.given_name || user?.family_name
            ? `${user?.given_name} ${user?.family_name}`
            : "Your Account";
    const email = user?.email ?? "";
    const imageUrl = user?.picture ?? "";

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="overflow-visible">
                <UserAvatar imageUrl={imageUrl} name={name} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="bg-white" align="end">
                <UserInfo name={name} email={email} />

                <DropdownMenuSeparator />

                <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                </DropdownMenuItem>

                <DropdownMenuItem asChild>
                    {/* {subscriptionPlan?.isSubscribed ? (
                        <Link href="/dashboard/billing">Manage Subscription</Link>
                    ) : (
                        <Link href="/pricing">
                            Upgrade <Gem className="ml-1.5 h-4 w-4 text-blue-600" />
                        </Link>
                    )} */}
                    <Link href="/pricing">
                        Upgrade <Gem className="ml-1.5 h-4 w-4 text-blue-600" />
                    </Link>
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem className="cursor-pointer">
                    <LogoutLink>Log out</LogoutLink>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
