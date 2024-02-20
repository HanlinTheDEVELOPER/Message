"use client";
import Flex from "@/components/ui/flex";
import { Session } from "next-auth";
import ConversationWrapper from "./Conversion/ConversationWrapper";
import FeedWrapper from "./Feed/FeedWrapper";

interface Props {
  session: Session;
}

const Chat = ({ session }: Props) => {
  return (
    <Flex>
      <ConversationWrapper session={session} />
      <FeedWrapper session={session} />
    </Flex>
  );
};

export default Chat;
