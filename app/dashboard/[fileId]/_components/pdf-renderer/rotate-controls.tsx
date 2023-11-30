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

interface RotateControl {
    setRotation: Dispatch<SetStateAction<number>>;
}

export const RotateControl = ({ setRotation }: RotateControl) => (
    <Button
        onClick={() => setRotation(prev => prev + 90)}
        variant="ghost"
        aria-label="rotate 90 degrees"
    >
        <RotateCw className="h-4 w-4" />
    </Button>
);
