import TypographyH4 from "@/components/ui/h4";
import Stack from "@/components/ui/stack";
import EachFoundUser from "./EachFoundUser";

interface Props {
  users: SearchUser[];
  participants: SearchUser[];
  addParticipants: (user: SearchUser) => void;
  removeParticipant: (userId: string) => void;
}

const SearchUserList = ({
  users,
  addParticipants,
  participants,
  removeParticipant,
}: Props) => {
  const isParticipated = (searchUserId: string) => {
    const found = participants.find(
      (participant) => participant.id === searchUserId
    );
    return found ? true : false;
  };

  return (
    <div className="mt-2">
      {users?.length == 0 && <TypographyH4>No User Found</TypographyH4>}
      <Stack classname="gap-2">
        {users?.map((user) => (
          <EachFoundUser
            key={user.id}
            user={user}
            addParticipants={addParticipants}
            isSelected={isParticipated(user.id)}
            removeParticipant={removeParticipant}
          />
        ))}
      </Stack>
    </div>
  );
};

export default SearchUserList;
