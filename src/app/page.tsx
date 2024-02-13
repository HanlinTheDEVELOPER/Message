import { getSession } from "next-auth/react";
import { NextPageContext } from "next";
import Login from "./components/Home/login";

export const generateStaticParams = async (content: NextPageContext) => {
  const session = await getSession(content);
  return { props: { session } };
};

export default function Home() {
  return (
    <main style={{ padding: 20 }}>
      <Login />
    </main>
  );
}
