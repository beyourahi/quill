// import ChatWrapper from "components/chat/ChatWrapper";
// import PdfRenderer from "components/PdfRenderer";
// import { getUserSubscriptionPlan } from "lib/stripe";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { notFound, redirect } from "next/navigation";
import { db } from "db";
import { PdfRenderer } from "components/PdfRenderer";
// import { ChatWrapper } from "components/chat/ChatWrapper";

const Page = async ({ params: { fileId } }: { params: { fileId: string } }) => {
    const user = await getKindeServerSession().getUser();

    if (!user || !user.id) redirect(`/auth-callback?origin=dashboard/${fileId}`);

    const file = await db.file.findFirst({ where: { id: fileId, userId: user.id } });

    if (!file) notFound();

    // const plan = await getUserSubscriptionPlan();

    return (
        <div className="flex h-[calc(100vh-3.5rem)] flex-1 flex-col justify-between">
            <div className="mx-auto w-full max-w-7xl grow lg:flex xl:px-2">
                {/* Left sidebar & main wrapper */}
                <div className="flex-1 xl:flex">
                    <div className="px-4 py-6 sm:px-6 lg:pl-8 xl:flex-1 xl:pl-6">
                        {/* Main area */}
                        <PdfRenderer url={file.url} />
                    </div>
                </div>

                <div className="flex-[0.75] shrink-0 border-t border-gray-200 lg:w-96 lg:border-l lg:border-t-0">
                    {/* <ChatWrapper isSubscribed={plan.isSubscribed} fileId={file.id} /> */}
                    ChatWrapper
                </div>
            </div>
        </div>
    );
};

export default Page;
