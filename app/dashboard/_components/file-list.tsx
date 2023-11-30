import { trpc } from "app/_trpc";
import { FileItem } from "./file-item";

export const FileList = () => {
    const { data: files } = trpc.getUserFiles.useQuery();

    return (
        <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {files!
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map(file => (
                    <FileItem key={file.id} file={file} />
                ))}
        </ul>
    );
};
