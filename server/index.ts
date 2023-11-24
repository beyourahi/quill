import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/dist/types/server";
import { TRPCError, initTRPC } from "@trpc/server";

export const router = initTRPC.create().router;
export const procedure = initTRPC.create().procedure;

export const appRouter = router({
    authCallback: procedure.query(async () => {
        const user = await getKindeServerSession().getUser();
        if (!user?.id || !user?.email) throw new TRPCError({ code: "UNAUTHORIZED" });

        return { success: true };
    })
});

export type AppRouter = typeof appRouter;
