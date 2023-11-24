import { initTRPC } from "@trpc/server";

export const router = initTRPC.create().router;
export const procedure = initTRPC.create().procedure;

export const appRouter = router({
    getTodos: procedure.query(async () => [10, 20, 30])
});

export type AppRouter = typeof appRouter;
