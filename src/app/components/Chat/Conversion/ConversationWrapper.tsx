import { Session } from "next-auth";
import Modal from "./Modal/Modal";
import Header from "./Header/header";
import { useQuery } from "@apollo/client";
import ConversationOperation from "@/graphql/operations/conversation";
import Conversations from "./Conversations";

interface Props {
  session: Session;
}

const ConversationWrapper = ({ session }: Props) => {
  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
  } = useQuery<ConversationResData, any>(
    ConversationOperation.Query.conversations
  );

  return (
    <div className="h-screen w-full sm:w-96 p-2 bg-[#CBD5E1] dark:bg-[#3b414f]">
      <Header session={session} />
      <Modal session={session} />
      <Conversations
        session={session}
        conversations={conversationsData?.conversations || []}
      />
    </div>
  );
};

export default ConversationWrapper;
