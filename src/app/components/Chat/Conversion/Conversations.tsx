import { Session } from "next-auth";
import EachConversation from "./EachConversation";
import Flex from "@/components/ui/flex";
import TypographyBlockquote from "@/components/ui/blockquote";

interface Props {
  conversations: Conversation[];
  session: Session;
}

const Conversations = ({ conversations, session }: Props) => {
  return (
    <>
      <div className="flex flex-col gap-2 h-[80%] overflow-auto my-4 scroll-m-0">
        {conversations?.map((conversation) => (
          <EachConversation
            key={conversation.id}
            conversation={conversation}
            userId={session.user.id}
          />
        ))}
      </div>
      <center>
        <small> @HanLinTheDev</small>
      </center>
    </>
  );
};

export default Conversations;
