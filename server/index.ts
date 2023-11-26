import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { TRPCError, initTRPC } from "@trpc/server";
import { db } from "db";
import { z } from "zod";

const isAuth = initTRPC.create().middleware(async opts => {
    const user = await getKindeServerSession().getUser();
    if (!user || !user.id) throw new TRPCError({ code: "UNAUTHORIZED" });
    return opts.next({ ctx: { userId: user.id, user } });
});

export const router = initTRPC.create().router;
export const publicProcedure = initTRPC.create().procedure;
export const privateProcedure = initTRPC.create().procedure.use(isAuth);

export const appRouter = router({
    authCallback: publicProcedure.query(async () => {
        const user = await getKindeServerSession().getUser();

        if (!user?.id || !user?.email) throw new TRPCError({ code: "UNAUTHORIZED" });

        // check if the user is in the database
        const dbUser = await db.user.findFirst({ where: { id: user.id } });

        // create user in db
        if (!dbUser) await db.user.create({ data: { id: user.id, email: user.email } });

        return { success: true };
    }),

    getUserFiles: privateProcedure.query(
        async ({ ctx: { userId } }) => await db.file.findMany({ where: { userId } })
    ),

    deleteFile: privateProcedure
        .input(z.object({ id: z.string() }))
        .mutation(async ({ ctx: { userId }, input }) => {
            const file = await db.file.findFirst({ where: { id: input.id, userId } });

            if (!file) throw new TRPCError({ code: "NOT_FOUND" });

            await db.file.delete({ where: { id: input.id } });

            return file;
        })
});

export type AppRouter = typeof appRouter;
