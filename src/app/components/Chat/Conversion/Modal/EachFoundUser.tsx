import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Flex from "@/components/ui/flex";
import TypographyH4 from "@/components/ui/h4";
import getProfilePlaceholder from "@/lib/getProfilePlaceholder";
import { IconCircleCheckFilled, IconCirclePlus } from "@tabler/icons-react";

interface Props {
  user: SearchUser;
  isSelected: boolean;
  addParticipants: (user: SearchUser) => void;
  removeParticipant: (userId: string) => void;
}

const EachFoundUser = ({
  user,
  addParticipants,
  isSelected,
  removeParticipant,
}: Props) => {
  return (
    <Flex classname="justify-between w-full pb-2 hover:border-white hover:mix-blend-color-burn dark:hover:mix-blend-color-dodge border-b">
      <Flex classname="gap-4 items-center">
        <Avatar>
          <AvatarImage src={user.image} />
          <AvatarFallback>
            {getProfilePlaceholder(user.username)}
          </AvatarFallback>
        </Avatar>
        <TypographyH4>
          <small>{user.username}</small>
        </TypographyH4>
      </Flex>
      <Button
        onClick={
          isSelected
            ? () => removeParticipant(user.id)
            : () => addParticipants(user)
        }
      >
        {isSelected ? (
          <IconCircleCheckFilled className="active:animate-ping" />
        ) : (
          <IconCirclePlus className="active:animate-ping" />
        )}
      </Button>
    </Flex>
  );
};

export default EachFoundUser;
