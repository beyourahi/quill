"use client";

import { trpc } from "app/_trpc";
import Skeleton from "react-loading-skeleton";
import { UploadSection } from "./upload-section";
import { EmptyState } from "./empty-state";
import { FileList } from "./file-list";

export const Dashboard = () => {
    const { data: files, isLoading } = trpc.getUserFiles.useQuery();

    return (
        <div className="mx-auto max-w-7xl md:p-10">
            <UploadSection />

            {/* display all user files */}
            {files && files?.length !== 0 ? (
                <FileList />
            ) : isLoading ? (
                <Skeleton height={100} className="my-2" count={3} />
            ) : (
                <EmptyState />
            )}
        </div>
    );
};
