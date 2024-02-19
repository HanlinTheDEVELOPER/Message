import { ScrollArea } from "@/components/ui/scroll-area";
import EachParticipant from "./EachParticipant";
import Flex from "@/components/ui/flex";
import { Button } from "@/components/ui/button";
import { IconSend2 } from "@tabler/icons-react";
import { useLazyQuery, useMutation } from "@apollo/client";
import ConversationOperation from "@/graphql/operations/conversation";
import { toast } from "sonner";
import { Session } from "next-auth";

interface Props {
  participants: SearchUser[];
  session: Session;
  removeParticipant: (userId: string) => void;
}

const Participants = ({ participants, removeParticipant, session }: Props) => {
  const opacity = participants.length !== 0 ? "opacity-1" : "opacity-0";

  const [createConversation, { data, loading, error }] = useMutation<
    CreateConversationResData,
    CreateConversationReqData
  >(ConversationOperation.Mutations.createConversation);

  const onCreateConversation = async () => {
    const {
      user: { id: userId },
    } = session;
    const ids = [userId, ...participants.map((p) => p.id)];
    try {
      const {} = await createConversation({
        variables: { participantIds: ids },
      });
    } catch (error: any) {
      console.log(error);
      toast.error(error?.message);
    }
  };
  return (
    <div
      className={`flex justify-between items-center focus:animate-pulse ${opacity} transition-opacity `}
    >
      <Flex classname="gap-4 flex flex-wrap justify-start my-2">
        {participants?.map((participant) => (
          <EachParticipant
            key={participant.id}
            participant={participant}
            removeParticipant={removeParticipant}
          />
        ))}
      </Flex>
      {participants.length !== 0 && (
        <Button onClick={onCreateConversation}>
          <IconSend2 className="active:animate-spin-backward" />
        </Button>
      )}
    </div>
    // </ScrollArea>
  );
};

export default Participants;
