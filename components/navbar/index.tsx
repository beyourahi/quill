import Link from "next/link";
import { Container } from "../container";
import { NavLinks } from "./nav-links";
// import MobileNav from "./MobileNav";

export const Navbar = () => (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
        <Container className="flex h-14 items-center justify-between border-b border-zinc-200">
            <Link href="/" className="z-40 flex font-semibold">
                quill.
            </Link>

            {/* <MobileNav isAuth={!!user} /> */}

            <NavLinks />
        </Container>
    </nav>
);
