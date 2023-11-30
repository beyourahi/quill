import "./globals.css";
import "react-loading-skeleton/dist/skeleton.css";
import "simplebar-react/dist/simplebar.min.css";
import { Navbar } from "app/_components";
import { cn } from "lib";
import { Inter } from "next/font/google";
import { Toaster } from "components/ui/toaster";
import { PropsWithChildren } from "react";
import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: PropsWithChildren) => (
    <html lang="en" className="light">
        <Providers>
            <body className={cn("grainy min-h-screen font-sans antialiased", inter.className)}>
                <Toaster />
                <Navbar />
                {children}
            </body>
        </Providers>
    </html>
);

export default RootLayout;
