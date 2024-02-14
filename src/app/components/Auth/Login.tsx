import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/ui/h1";
import TypographyH3 from "@/components/ui/h3";
import { Input } from "@/components/ui/input";
import Stack from "@/components/ui/stack";
import { signIn, useSession } from "next-auth/react";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();
  return (
    <section className="flex justify-center items-center h-screen ">
      {data?.user?.username ? (
        <div className="flex flex-col gap-6 items-center">
          <TypographyH3>Create a Username</TypographyH3>
          <Input placeholder="Username" type="text" />
          <Button className="w-full " onClick={() => signIn("google")}>
            Sign In With Google
          </Button>
        </div>
      ) : (
        <div className="flex flex-col gap-12 ">
          <TypographyH1>Messenger</TypographyH1>
          <Button onClick={() => signIn("google")}>Sign In With Google</Button>
        </div>
      )}
    </section>
  );
};

export default Login;
