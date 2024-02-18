"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";
import ConversationWrapper from "./Conversion/ConversationWrapper";
import { Session } from "next-auth";
import FeedWrapper from "./Feed/FeedWrapper";
import Flex from "@/components/ui/flex";

interface Props {
  session: Session;
}

const Chat = ({ session }: Props) => {
  return (
    <Flex>
      <ConversationWrapper session={session} />
      <FeedWrapper session={session} />
      <Button onClick={() => signOut()}>Sign Out</Button>
    </Flex>
  );
};

export default Chat;
