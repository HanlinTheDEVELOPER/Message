"use client";
import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/ui/h1";
import TypographyH3 from "@/components/ui/h3";
import { Input } from "@/components/ui/input";
import Stack from "@/components/ui/stack";
import { useMutation } from "@apollo/client";
import { getSession, signIn, useSession } from "next-auth/react";
import { FormEvent, useState } from "react";
import UserQuery from "@/graphql/operations/user";
import { toast } from "sonner";
import { Session } from "next-auth";

type Props = {
  session: Session | null;
};

const Login = ({ session }: Props) => {
  const [username, setUsername] = useState("");
  const [createUsername, { data, loading, error }] = useMutation<
    CreateUserResData,
    CreateUserReqData
  >(UserQuery.Mutations.createUsername);

  const reloadSesion = () => {
    console.log("he");
    const event = new Event("visibilitychange");
    document.dispatchEvent(event);
  };
  const onSubmit = async () => {
    try {
      if (username === "") {
        toast.error("Please Enter A Username");
        return;
      }
      const { data } = await createUsername({ variables: { username } });
      if (!data) {
        throw new Error();
      }

      if (data.createUsername.error) {
        const {
          createUsername: { error },
        } = data;
        throw new Error(error);
      }
      toast.success("Username created successfully!");
      window.location.reload();
    } catch (err: any) {
      toast.error(err?.message);
      console.log(err);
    }
  };

  return (
    <section className="flex justify-center items-center h-screen ">
      {session?.user ? (
        <Stack className="flex flex-col gap-12 items-center">
          <TypographyH3>Create a Username</TypographyH3>

          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-6"
          />
          <Button onClick={onSubmit} className="w-full" type="submit">
            Save
          </Button>
        </Stack>
      ) : (
        <Stack>
          <TypographyH1>Messenger</TypographyH1>
          <Button onClick={() => signIn("google")}>Sign In With Google</Button>
        </Stack>
      )}
    </section>
  );
};

export default Login;
