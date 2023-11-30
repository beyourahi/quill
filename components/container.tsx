import { cn } from "lib";
import { PropsWithChildren, ReactNode } from "react";

interface Container extends PropsWithChildren {
    className?: string;
}

export const Container = ({ className, children }: Container) => (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>
        {children}
    </div>
);
