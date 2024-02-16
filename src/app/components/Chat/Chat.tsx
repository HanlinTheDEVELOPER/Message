"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div>
      Chat
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  );
};

export default Chat;
