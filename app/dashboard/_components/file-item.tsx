import { FileItemDeleteButton } from "./file-item-delete-button";
import { FileItemHeader } from "./file-item-header";
import { FileItemMetadata } from "./file-item-metadata";

interface File {
    id: string;
    userId: string | null;
    key: string;
    name: string;
    uploadStatus: string;
    url: string;
    createdAt: string;
    updatedAt: string;
}

export const FileItem = ({ file }: { file: File }) => (
    <li
        key={file.id}
        className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow transition hover:shadow-lg"
    >
        <FileItemHeader fileName={file.name} fileId={file.id} />

        <div className="mt-4 grid grid-cols-3 place-items-center gap-6 px-6 py-2 text-xs text-zinc-500">
            <FileItemMetadata createdAt={file.createdAt} />
            <FileItemDeleteButton fileId={file.id} />
        </div>
    </li>
);
