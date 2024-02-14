"use client";

import { NextPage } from "next";
import { useSession } from "next-auth/react";
import Login from "./components/Auth/Login";
import Chat from "./components/Chat/Chat";

const Home: NextPage = () => {
  const { status, data } = useSession();

  return (
    <main>
      {status === "loading" ? (
        <div>loading</div>
      ) : data?.user?.username ? (
        <Chat />
      ) : (
        <Login />
      )}
    </main>
  );
};

export default Home;
