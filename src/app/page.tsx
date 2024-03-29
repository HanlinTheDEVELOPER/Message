import { NextPage } from "next";
import Login from "./components/Auth/Login";
import Chat from "./components/Chat/Chat";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

const Home: NextPage = async () => {
  const session = await getServerSession(authOptions);

  return (
    <main>
      {session?.user?.username ? (
        <Chat session={session} />
      ) : (
        <Login session={session} />
      )}
    </main>
  );
};

export default Home;
