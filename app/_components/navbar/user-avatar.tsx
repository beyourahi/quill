import { Button } from "components/ui/button";
import { Avatar, AvatarFallback } from "components/ui/avatar";
import Image from "next/image";
import { Icons } from "components/icons";

export const UserAvatar = ({ imageUrl, name }: { imageUrl: string; name: string }) => (
    <Button className="aspect-square h-8 w-8 rounded-full bg-slate-400">
        <Avatar className="relative h-8 w-8">
            {imageUrl ? (
                <div className="relative aspect-square h-full w-full">
                    <Image fill src={imageUrl} alt="profile picture" referrerPolicy="no-referrer" />
                </div>
            ) : (
                <AvatarFallback>
                    <span className="sr-only">{name}</span>
                    <Icons.user className="h-4 w-4 text-zinc-900" />
                </AvatarFallback>
            )}
        </Avatar>
    </Button>
);
