import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { Inter } from "next/font/google";
import Providers from "./providers";
import { cn } from "lib/utils";
import { Navbar } from "components/global/Navbar";
import { Toaster } from "components/ui/toaster";

export const metadata: Metadata = {
    title: "Quill",
    description: "SaaS Platform"
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="light">
        <body className={cn("grainy min-h-screen font-sans antialiased", inter.className)}>
            <Providers>
                <Toaster />
                <Navbar />
                {children}
            </Providers>
        </body>
    </html>
);

export default RootLayout;
