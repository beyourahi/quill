import { cn } from "lib/utils";
import "./globals.css";
import { Navbar } from "components/global/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PropsWithChildren } from "react";
import Provider from "./provider";

export const metadata: Metadata = {
    title: "Quill",
    description: "SaaS Platform"
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="light">
        <body className={cn(inter.className, "grainy min-h-screen font-sans antialiased")}>
            <Provider>
                <Navbar />
                {children}
            </Provider>
        </body>
    </html>
);

export default RootLayout;
