import { getServerSession } from "next-auth";

export default async function ProtectedRoute() {
  const session = await getServerSession();

  return (
    <div>
      {session?.user?.name ? (<div>Logged in</div>) :
      (<div>Logged out</div>)}
    </div>
  );
}
