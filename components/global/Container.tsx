import { cn } from "lib/utils";
import { PropsWithChildren } from "react";

interface Container extends PropsWithChildren {
    className?: string;
}

export const Container = ({ children, className }: Container) => (
    <div className={cn("container mx-auto max-w-screen-2xl px-2.5 md:px-20", className)}>
        {children}
    </div>
);
