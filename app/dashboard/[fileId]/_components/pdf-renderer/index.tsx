"use client";

import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { pdfjs } from "react-pdf";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { PDFDisplay } from "./pdf-display";
import { Topbar } from "./topbar";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PdfRenderer = ({ url }: { url: string }) => {
    const [numPages, setNumPages] = useState<number>();
    const [currPage, setCurrPage] = useState(1);
    const [scale, setScale] = useState(1);
    const [rotation, setRotation] = useState(0);

    const Validator = z.object({
        page: z.string().refine(num => Number(num) > 0 && Number(num) <= numPages!)
    });

    type Validator = z.infer<typeof Validator>;

    useForm<Validator>({
        defaultValues: { page: "1" },
        resolver: zodResolver(Validator)
    });

    return (
        <div className="flex w-full flex-col items-center rounded-md bg-white shadow">
            <Topbar
                currPage={currPage}
                setCurrPage={setCurrPage}
                numPages={numPages!}
                scale={scale}
                setScale={setScale}
                setRotation={setRotation}
                url={url}
            />

            <PDFDisplay
                url={url}
                currPage={currPage}
                scale={scale}
                rotation={rotation}
                setNumPages={setNumPages}
            />
        </div>
    );
};
