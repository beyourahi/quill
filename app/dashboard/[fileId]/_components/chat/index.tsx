"use client";

import { trpc } from "app/_trpc";
import { ChatInput } from "./chat-input";
import { Messages } from "./messages";
import { State } from "./states";
import { ChatContextProvider } from "./chat-context";

export const Chat = ({ fileId }: { fileId: string }) => {
    const { data, isLoading } = trpc.getFileUploadStatus.useQuery(
        { fileId },
        {
            refetchInterval: data =>
                data?.status === "SUCCESS" || data?.status === "FAILED" ? false : 500
        }
    );

    if (isLoading) return <State state="LOADING" />;
    if (data?.status === "PROCESSING") return <State state="PROCESSING" />;
    if (data?.status === "FAILED") return <State state="FAILED" />;

    return (
        <ChatContextProvider fileId={fileId}>
            <div className="relative flex min-h-full flex-col justify-between gap-2 divide-y divide-zinc-200 bg-zinc-50">
                <div className="mb-28 flex flex-1 flex-col justify-between">
                    <Messages fileId={fileId} />
                </div>

                <ChatInput />
            </div>
        </ChatContextProvider>
    );
};
