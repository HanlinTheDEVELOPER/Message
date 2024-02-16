import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Login from "./components/Auth/Login";
import Chat from "./components/Chat/Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {session?.user?.username ? <Chat /> : <Login session={session} />}
    </main>
  );
};

export default Home;
