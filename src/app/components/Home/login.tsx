"use client";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();
  return (
    <section>
      {data?.user?.name ? (
        <>
          <button onClick={() => signOut()}>Sign Out</button>
          <div>{data?.user?.name}</div>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Sign In</button>
      )}
    </section>
  );
};

export default Login;
