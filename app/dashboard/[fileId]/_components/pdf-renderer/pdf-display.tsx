import { Loader2 } from "lucide-react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { useToast } from "components/ui/use-toast";
import { useResizeDetector } from "react-resize-detector";
import { Dispatch, SetStateAction, useState } from "react";
import { cn } from "lib";
import SimpleBar from "simplebar-react";

interface PDFDisplay {
    url: string;
    currPage: number;
    scale: number;
    rotation: number;
    setNumPages: Dispatch<SetStateAction<number | undefined>>;
}

export const PDFDisplay = ({ url, currPage, scale, rotation, setNumPages }: PDFDisplay) => {
    const { width, ref } = useResizeDetector();
    const { toast } = useToast();
    const [renderedScale, setRenderedScale] = useState<number | null>(null);
    const isLoading = renderedScale !== scale;

    return (
        <div className="max-h-screen w-full flex-1">
            <SimpleBar autoHide={false} className="max-h-[calc(100vh-10rem)]">
                <div ref={ref}>
                    <Document
                        loading={
                            <div className="flex justify-center">
                                <Loader2 className="my-24 h-6 w-6 animate-spin" />
                            </div>
                        }
                        onLoadError={() => {
                            toast({
                                title: "Error loading PDF",
                                description: "Please try again later",
                                variant: "destructive"
                            });
                        }}
                        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
                        file={url}
                        className="max-h-full"
                    >
                        <Page
                            className={cn(isLoading ? "hidden" : "")}
                            width={width ? width : 1}
                            pageNumber={currPage}
                            scale={scale}
                            rotate={rotation}
                            key={"@" + scale}
                            loading={
                                <div className="flex justify-center">
                                    <Loader2 className="my-24 h-6 w-6 animate-spin" />
                                </div>
                            }
                            onRenderSuccess={() => setRenderedScale(scale)}
                        />
                    </Document>
                </div>
            </SimpleBar>
        </div>
    );
};
