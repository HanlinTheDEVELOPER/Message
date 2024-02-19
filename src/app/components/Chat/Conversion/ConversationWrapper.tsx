import { Session } from "next-auth";
import CreateConversation from "./Modal/CreateConversation";
import Header from "./Header/header";

interface Props {
  session: Session;
}

const ConversationWrapper = ({ session }: Props) => {
  return (
    <div className="h-screen w-full sm:w-96 p-2 bg-white dark:bg-[#3b414f]">
      <Header session={session} />
      <CreateConversation />
    </div>
  );
};

export default ConversationWrapper;
