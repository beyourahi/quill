import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Web Template",
    description: "A template to build cool shit"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en">
        <body className="">{children}</body>
    </html>
);

export default RootLayout;
