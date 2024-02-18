import { Session } from "next-auth";
import CreateConversation from "./CreateConversation";

interface Props {
  session: Session;
}

const ConversationWrapper = ({ session }: Props) => {
  return (
    <div>
      <CreateConversation />
    </div>
  );
};

export default ConversationWrapper;
