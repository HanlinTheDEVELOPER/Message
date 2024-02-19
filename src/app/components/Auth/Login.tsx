"use client";
import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/ui/h1";
import TypographyH3 from "@/components/ui/h3";
import { Input } from "@/components/ui/input";
import Stack from "@/components/ui/stack";
import UserQuery from "@/graphql/operations/user";
import { useMutation } from "@apollo/client";
import { IconLoader } from "@tabler/icons-react";
import { Session } from "next-auth";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
type Props = {
  session: Session | null;
};

const Login = ({ session }: Props) => {
  const [username, setUsername] = useState("");
  const [createUsername, { data, loading, error }] = useMutation<
    CreateUserResData,
    CreateUserReqData
  >(UserQuery.Mutations.createUsername);

  // const reloadSesion = () => {
  //   console.log("he");
  //   const event = new Event("visibilitychange");
  //   document.dispatchEvent(event);
  // };
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
        <Stack classname="gap-6">
          <TypographyH3>Create a Username</TypographyH3>

          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button
            onClick={onSubmit}
            className="w-full"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <IconLoader className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Save"
            )}
          </Button>
        </Stack>
      ) : (
        <Stack classname="gap-12">
          <TypographyH1>Messenger</TypographyH1>
          <Button onClick={() => signIn("google")}>Sign In With Google</Button>
        </Stack>
      )}
    </section>
  );
};

export default Login;
