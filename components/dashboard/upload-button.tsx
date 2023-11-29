"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "components/ui/dialog";
import { Button } from "components/ui/button";
import { UploadDropzone } from "./upload-dropzone";

export const UploadButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={v => !v && setIsOpen(v)}>
            <DialogTrigger onClick={() => setIsOpen(true)} asChild>
                <Button>Upload PDF</Button>
            </DialogTrigger>

            <DialogContent>
                <UploadDropzone />
            </DialogContent>
        </Dialog>
    );
};
