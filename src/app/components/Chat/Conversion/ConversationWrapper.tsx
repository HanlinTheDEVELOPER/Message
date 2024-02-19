import { Session } from "next-auth";
import Modal from "./Modal/Modal";
import Header from "./Header/header";

interface Props {
  session: Session;
}

const ConversationWrapper = ({ session }: Props) => {
  return (
    <div className="h-screen w-full sm:w-96 p-2 bg-[#CBD5E1] dark:bg-[#3b414f]">
      <Header session={session} />
      <Modal session={session} />
    </div>
  );
};

export default ConversationWrapper;
