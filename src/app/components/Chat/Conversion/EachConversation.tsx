import getParticipantsNames from "@/lib/getParticipantsName";
import { useRouter } from "next/navigation";
import ConversationAvatar from "../../../../assets/conversation.png";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import getProfilePlaceholder from "@/lib/getProfilePlaceholder";
import Image from "next/image";

interface Props {
  conversation: Conversation;
  userId: string;
}

const EachConversation = ({ conversation, userId }: Props) => {
  const router = useRouter();
  const { participants } = conversation;
  const participantNames = getParticipantsNames(
    conversation.participants,
    userId
  );
  const avatar =
    participants.length === 2
      ? participants.filter((p) => p.user.id !== userId)[0].user.image
      : "";

  return (
    <div
      onClick={() => router.push(`?conversation=${conversation.id}`)}
      className="p-2 shadow hover:shadow-muted-foreground rounded flex items-center gap-2"
    >
      <Avatar>
        {participants.length !== 2 ? (
          <Image src={ConversationAvatar} alt="group" />
        ) : (
          <AvatarImage src={avatar} />
        )}
        <AvatarFallback>
          {getProfilePlaceholder(getParticipantsNames(participants, userId))}
        </AvatarFallback>
      </Avatar>
      {participantNames}
    </div>
  );
};

export default EachConversation;
