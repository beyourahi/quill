import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

const Dashboard = async () => {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) return redirect("/auth-callback?origin=dashboard");

    return (
        <div>
            <h1>{user.email}</h1>
        </div>
    );
};

export default Dashboard;
