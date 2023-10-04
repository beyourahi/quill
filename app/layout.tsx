import "./globals.css";
import { Navbar } from "@/components/global/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
    title: "Quill",
    description: "SaaS Platform"
};

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className="light">
        <body className={`grainy min-h-screen font-sans antialiased ${inter.className}`}>
            <Navbar />
            {children}
        </body>
    </html>
);

export default RootLayout;
