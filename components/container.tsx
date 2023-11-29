import { cn } from "lib";
import { ReactNode } from "react";

export const Container = ({ className, children }: { className?: string; children: ReactNode }) => (
    <div className={cn("mx-auto w-full max-w-screen-2xl px-2.5 md:px-20", className)}>
        {children}
    </div>
);
