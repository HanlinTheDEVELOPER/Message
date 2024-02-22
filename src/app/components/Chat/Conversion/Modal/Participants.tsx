import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import ConversationOperation from "@/graphql/operations/conversation";
import { useMutation } from "@apollo/client";
import { IconSend2 } from "@tabler/icons-react";
import { Session } from "next-auth";
import { toast } from "sonner";
import EachParticipant from "./EachParticipant";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";

interface Props {
  participants: SearchUser[];
  session: Session;
  setOpen: Dispatch<SetStateAction<boolean>>;
  removeParticipant: (userId: string) => void;
  setParticipants: Dispatch<SetStateAction<SearchUser[]>>;
}

const Participants = ({
  participants,
  removeParticipant,
  session,
  setOpen,
  setParticipants,
}: Props) => {
  const opacity = participants.length !== 0 ? "opacity-1" : "opacity-0";

  const router = useRouter();

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
      const { data } = await createConversation({
        variables: { participantIds: ids },
      });

      const conversationId = data?.createConversation?.conversationId;

      if (!conversationId) {
        throw new Error("Create Conversation failed");
      }

      router.push(`?conversation=${conversationId}`);
      toast.success("Successfully Created Conversation");
      setParticipants([]);
      setOpen(false);
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
        <Button type="button" onClick={onCreateConversation}>
          <IconSend2 className="active:animate-spin-backward" />
        </Button>
      )}
    </div>
    // </ScrollArea>
  );
};

export default Participants;
