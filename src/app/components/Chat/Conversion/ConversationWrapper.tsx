import { Session } from "next-auth";
import Modal from "./Modal/Modal";
import Header from "./Header/header";
import { useQuery } from "@apollo/client";
import ConversationOperation from "@/graphql/operations/conversation";
import Conversations from "./Conversations";
import { useEffect } from "react";

interface Props {
  session: Session;
}

const ConversationWrapper = ({ session }: Props) => {
  const {
    data: conversationsData,
    error: conversationsError,
    loading: conversationsLoading,
    subscribeToMore,
  } = useQuery<ConversationResData, any>(
    ConversationOperation.Query.conversations
  );
  console.log("Query", conversationsData);
  const subscribeFunction = () => {
    subscribeToMore({
      document: ConversationOperation.Subscription.conversationCreated,
      updateQuery: (
        prev,
        {
          subscriptionData,
        }: { subscriptionData: { data: { conversationCreated: Conversation } } }
      ) => {
        if (!subscriptionData.data) return prev;
        const newConversation = subscriptionData.data.conversationCreated;
        console.log("New Data", subscriptionData.data);
        return Object.assign({}, prev, {
          conversationsData: [newConversation, ...prev.conversations],
        });
      },
    });
  };

  useEffect(() => {
    subscribeFunction();
  }, []);

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
