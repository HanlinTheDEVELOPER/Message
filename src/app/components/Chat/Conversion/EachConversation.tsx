import Flex from "@/components/ui/flex";
import { useRouter } from "next/navigation";
interface Props {
  conversation: Conversation;
  userId: string;
}

const EachConversation = ({ conversation, userId }: Props) => {
  const router = useRouter();
  const participantNames = conversation.participants
    .filter((p) => p.user.id !== userId)
    .map((p) => p.user.username)
    .join(" , ");
  return (
    <div
      onClick={() => router.push(`?conversation=${conversation.id}`)}
      className="p-2 shadow hover:shadow-muted-foreground rounded"
    >
      {participantNames}
    </div>
  );
};

export default EachConversation;
