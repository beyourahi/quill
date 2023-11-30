import { ChevronDown, ChevronUp, Loader2, RotateCw, Search } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useToast } from "components/ui/use-toast";
import { useResizeDetector } from "react-resize-detector";
import { Button } from "components/ui/button";
import { Input } from "components/ui/input";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "lib";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "components/ui/dropdown-menu";
import SimpleBar from "simplebar-react";
import { PdfFullscreen } from "./pdf-fullscreen";

interface ZoomControls {
    scale: number;
    setScale: Dispatch<SetStateAction<number>>;
}

export const ZoomControls = ({ scale, setScale }: ZoomControls) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className="gap-1.5" aria-label="zoom" variant="ghost">
                <Search className="h-4 w-4" />
                {scale * 100}%
                <ChevronDown className="h-3 w-3 opacity-50" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => setScale(1)}>100%</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setScale(1.5)}>150%</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setScale(2)}>200%</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => setScale(2.5)}>250%</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
);
