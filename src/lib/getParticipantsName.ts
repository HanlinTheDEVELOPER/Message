const getParticipantsNames = (participants: Participants[], userId: string) => {
  return participants
    .filter((p) => p.user.id !== userId)
    .map((p) => p.user.username)
    .join(" , ");
};

export default getParticipantsNames;
