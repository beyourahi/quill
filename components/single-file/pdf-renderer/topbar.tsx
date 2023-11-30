import { Dispatch, SetStateAction } from "react";
import { PdfFullscreen } from "./pdf-fullscreen";
import { PageNav } from "./page-nav";
import { RotateControl } from "./rotate-controls";
import { ZoomControls } from "./zoom-controls";

interface Topbar {
    url: string;
    numPages: number;
    currPage: number;
    setCurrPage: Dispatch<SetStateAction<number>>;
    scale: number;
    setScale: Dispatch<SetStateAction<number>>;
    setRotation: Dispatch<SetStateAction<number>>;
}

export const Topbar = ({
    url,
    numPages,
    currPage,
    setCurrPage,
    scale,
    setScale,
    setRotation
}: Topbar) => {
    return (
        <div className="flex h-14 w-full items-center justify-between border-b border-zinc-200 px-2">
            <PageNav numPages={numPages} currPage={currPage} setCurrPage={setCurrPage} />

            <div className="space-x-2">
                <ZoomControls scale={scale} setScale={setScale} />
                <RotateControl setRotation={setRotation} />
                <PdfFullscreen fileUrl={url} />
            </div>
        </div>
    );
};
