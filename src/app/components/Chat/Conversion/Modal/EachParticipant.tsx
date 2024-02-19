import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import getProfilePlaceholder from "@/lib/getProfilePlaceholder";
import React from "react";

interface Props {
  participant: SearchUser;
  removeParticipant: (userId: string) => void;
}

const EachParticipant = ({ participant, removeParticipant }: Props) => {
  return (
    <span className="relative inline-block w-max">
      <Badge
        className="absolute z-10 -top-2 -right-2 cursor-pointer"
        onClick={() => removeParticipant(participant.id)}
      >
        x
      </Badge>
      <Avatar>
        <AvatarImage src={participant.image} />
        <AvatarFallback>
          {getProfilePlaceholder(participant.username)}
        </AvatarFallback>
      </Avatar>
    </span>
  );
};

export default EachParticipant;
