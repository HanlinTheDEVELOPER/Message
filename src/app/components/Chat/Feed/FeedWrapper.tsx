"use client";
import { Button } from "@/components/ui/button";
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { useSearchParams } from "next/navigation";

interface Props {
  session: Session;
}
// {searchParams.get("conversation")}
const FeedWrapper = ({ session }: Props) => {
  const searchParams = useSearchParams();
  return (
    <div>
      <Button onClick={signOut}>Sign out</Button>
    </div>
  );
};

export default FeedWrapper;
