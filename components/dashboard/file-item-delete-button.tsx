import { trpc } from "app/_trpc";
import { useState } from "react";
import { Button } from "components/ui/button";
import { Loader2, Trash } from "lucide-react";

interface DeleteButton {
    fileId: string;
}

export const FileItemDeleteButton = ({ fileId }: DeleteButton) => {
    const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<string | null>(null);

    const utils = trpc.useUtils();

    const { mutate: deleteFile } = trpc.deleteFile.useMutation({
        onSuccess: () => {
            utils.getUserFiles.invalidate();
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
