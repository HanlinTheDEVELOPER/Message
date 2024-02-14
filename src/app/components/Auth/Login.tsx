import { Button } from "@/components/ui/button";
import TypographyH1 from "@/components/ui/h1";
import TypographyH3 from "@/components/ui/h3";
import { Input } from "@/components/ui/input";
import Stack from "@/components/ui/stack";
import { useMutation } from "@apollo/client";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import UserQuery from "@/graphql/operations/user";

type Props = {};

const Login = (props: Props) => {
  const { data } = useSession();
  const [username, setUsername] = useState("");
  const [createUsername, { data: returnData, loading, error }] = useMutation<
    CreateUserResData,
    CreateUserReqData
  >(UserQuery.Mutations.createUsername);

  const onSubmit = async () => {
    try {
      await createUsername({ variables: { username } });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <section className="flex justify-center items-center h-screen ">
      {data ? (
        <Stack className="flex flex-col gap-12 items-center">
          <TypographyH3>Create a Username</TypographyH3>
          <form onSubmit={() => console.log(username)}>
            <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mb-6"
            />
            <Button className="w-full" type="submit">
              Save
            </Button>
          </form>
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
