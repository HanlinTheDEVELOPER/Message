interface CreateUserResData {
  createUsername: {
    success: boolean;
    error: string;
  };
}

interface CreateUserReqData {
  username: string;
}

interface SearchUserReqData {
  username: string;
}

interface SearchUserResData {
  searchUsers: SearchUser[];
}

interface SearchUser {
  id: string;
  username: string;
  image: string;
}

interface CreateConversationReqData {
  participantIds: string[];
}

interface CreateConversationResData {
  conversationId: string;
}
