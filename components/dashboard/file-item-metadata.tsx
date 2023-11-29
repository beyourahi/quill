import { Plus, MessageSquare } from "lucide-react";
import { format } from "date-fns";

export const FileItemMetadata = ({ createdAt }: { createdAt: string }) => (
    <>
        <div className="flex items-center gap-2">
            <Plus className="h-4 w-4" />
            {format(new Date(createdAt), "MMM yyyy")}
        </div>

        <div className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            69
        </div>
    </>
);
