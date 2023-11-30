import { trpc } from "app/_trpc";
import { useState } from "react";
import { Button } from "components/ui/button";
import { Loader2, Trash } from "lucide-react";

export const FileItemDeleteButton = ({ fileId }: { fileId: string }) => {
    const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<string | null>(null);

    const { mutate: deleteFile } = trpc.deleteFile.useMutation({
        onSuccess: () => {
            trpc.useUtils().getUserFiles.invalidate();
        },
        onMutate({ id }) {
            setCurrentlyDeletingFile(id);
        },
        onSettled() {
            setCurrentlyDeletingFile(null);
        }
    });

    return (
        <Button
            onClick={() => deleteFile({ id: fileId })}
            size="sm"
            className="w-full"
            variant="destructive"
        >
            {currentlyDeletingFile === fileId ? (
                <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
                <Trash className="h-4 w-4" />
            )}
        </Button>
    );
};
