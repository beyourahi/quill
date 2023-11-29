import { Progress } from "components/ui/progress";
import { trpc } from "app/_trpc";
import { useToast } from "components/ui/use-toast";
import { Cloud, File, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Dropzone from "react-dropzone";
import { useUploadThing } from "lib/uploadthing";

export const UploadDropzone = () => {
    const router = useRouter();

    const { toast } = useToast();

    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const { startUpload } = useUploadThing("pdfUploader");

    const { mutate: startPolling } = trpc.getFile.useMutation({
        onSuccess: file => {
            router.push(`/dashboard/${file.id}`);
        },
        retry: true,
        retryDelay: 500
    });

    const startSimulatedProgress = () => {
        setUploadProgress(0);

        const interval = setInterval(() => {
            setUploadProgress(prevProgress =>
                prevProgress >= 95 ? (clearInterval(interval), prevProgress) : prevProgress + 5
            );
        }, 500);

        return interval;
    };

    return (
        <Dropzone
            multiple={false}
            onDrop={async acceptedFile => {
                setIsUploading(true);

                const progressInterval = startSimulatedProgress();

                // handle file uploading
                const res = await startUpload(acceptedFile);

                if (!res) {
                    return toast({
                        title: "Something went wrong",
                        description: "Please try again later",
                        variant: "destructive"
                    });
                }

                const [fileResponse] = res;

                const key = fileResponse?.key;

                if (!key) {
                    return toast({
                        title: "Something went wrong",
                        description: "Please try again later",
                        variant: "destructive"
                    });
                }

                clearInterval(progressInterval);
                setUploadProgress(100);
                startPolling({ key });
            }}
        >
            {({ getRootProps, getInputProps, acceptedFiles }) => (
                <div
                    {...getRootProps()}
                    className="m-4 h-64 rounded-lg border border-dashed border-gray-300"
                >
                    <div className="flex h-full w-full items-center justify-center">
                        <label
                            htmlFor="dropzone-file"
                            className="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg bg-gray-50 hover:bg-gray-100"
                        >
                            <div className="flex flex-col items-center justify-center pb-6 pt-5">
                                <Cloud className="mb-2 h-6 w-6 text-zinc-500" />
                                <p className="mb-2 text-sm text-zinc-700">
                                    <span className="font-semibold">Click to upload</span> or drag
                                    and drop
                                </p>
                                <p className="text-xs text-zinc-500">
                                    {/* PDF (up to {isSubscribed ? "16" : "4"}MB) */}
                                    PDF (up to 4MB)
                                </p>
                            </div>

                            {acceptedFiles && acceptedFiles[0] ? (
                                <div className="flex max-w-xs items-center divide-x divide-zinc-200 overflow-hidden rounded-md bg-white outline outline-[1px] outline-zinc-200">
                                    <div className="grid h-full place-items-center px-3 py-2">
                                        <File className="h-4 w-4 text-blue-500" />
                                    </div>
                                    <div className="h-full truncate px-3 py-2 text-sm">
                                        {acceptedFiles[0].name}
                                    </div>
                                </div>
                            ) : null}

                            {isUploading ? (
                                <div className="mx-auto mt-4 w-full max-w-xs">
                                    <Progress
                                        indicatorColor={
                                            uploadProgress === 100 ? "bg-green-500" : ""
                                        }
                                        value={uploadProgress}
                                        className="h-1 w-full bg-zinc-200"
                                    />
                                    {uploadProgress === 100 ? (
                                        <div className="flex items-center justify-center gap-1 pt-2 text-center text-sm text-zinc-700">
                                            <Loader2 className="h-3 w-3 animate-spin" />
                                            Redirecting...
                                        </div>
                                    ) : null}
                                </div>
                            ) : null}

                            <input
                                {...getInputProps()}
                                type="file"
                                id="dropzone-file"
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>
            )}
        </Dropzone>
    );
};