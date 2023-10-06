import { cn } from "@/lib/utils";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export const Container = ({ children, className }: ContainerProps) => (
    <div className={cn("container mx-auto px-2.5 md:px-20", className)}>{children}</div>
);
