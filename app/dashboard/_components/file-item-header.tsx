import Link from "next/link";

interface FileItemHeader {
    fileName: string;
    fileId: string;
}
export const FileItemHeader = ({ fileName, fileId }: FileItemHeader) => (
    <Link
        href={`/dashboard/${fileId}`}
        className="flex w-full items-center justify-between gap-2 space-x-6 px-6 pt-6"
    >
        <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        <h3 className="flex flex-1 items-center space-x-3 truncate text-lg font-medium text-zinc-900">
            {fileName}
        </h3>
    </Link>
);
