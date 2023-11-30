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

interface PageNav {
    numPages: number | undefined;
    currPage: number;
    setCurrPage: Dispatch<SetStateAction<number>>;
}

export const PageNav = ({ numPages, currPage, setCurrPage }: PageNav) => {
    const Validator = z.object({
        page: z.string().refine(num => Number(num) > 0 && Number(num) <= numPages!)
    });

    type Validator = z.infer<typeof Validator>;

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<Validator>({ resolver: zodResolver(Validator) });

    return (
        <div className="flex items-center gap-1.5">
            <Button
                disabled={currPage <= 1}
                onClick={() => {
                    setCurrPage(prev => (prev - 1 > 1 ? prev - 1 : 1));
                    setValue("page", String(currPage - 1));
                }}
                variant="ghost"
                aria-label="previous page"
            >
                <ChevronDown className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1.5">
                <Input
                    {...register("page")}
                    className={cn("h-8 w-12", errors.page && "focus-visible:ring-red-500")}
                    onKeyDown={e =>
                        e.key === "Enter" &&
                        handleSubmit(({ page }: Validator) => {
                            setCurrPage(Number(page));
                            setValue("page", String(page));
                        })()
                    }
                />
                <p className="space-x-1 text-sm text-zinc-700">
                    <span>/</span>
                    <span>{numPages}</span>
                </p>
            </div>

            <Button
                disabled={numPages === undefined || currPage === numPages}
                onClick={() => {
                    setCurrPage(prev => (prev + 1 > numPages! ? numPages! : prev + 1));
                    setValue("page", String(currPage + 1));
                }}
                variant="ghost"
                aria-label="next page"
            >
                <ChevronUp className="h-4 w-4" />
            </Button>
        </div>
    );
};
