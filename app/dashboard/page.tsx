import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Dashboard } from "app/dashboard/_components";
import { db } from "db";
import { redirect } from "next/navigation";

const DashboardPage = async () => {
    const user = await getKindeServerSession().getUser();

    if (!user || !user.id) redirect("/auth-callback?origin=dashboard");

    const dbUser = await db.user.findFirst({ where: { id: user.id } });

    if (!dbUser) redirect("/auth-callback?origin=dashboard");

    return <Dashboard />;
};

export default DashboardPage;
