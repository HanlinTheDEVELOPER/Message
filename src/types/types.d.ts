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
  createConversation: {
    conversationId: string;
  };
}

interface ConversationResData {
  conversations: Conversation[];
}

interface Conversation {
  id: string;
  participants: Participants[];
  updatedAt: Date;
  lastMessage: {
    id: string;
    sender: {
      id: string;
      username: string;
      image: string;
    };
    body: string;
    createdAt: Date;
  };
}

interface Participants {
  user: SearchUser;
  hasSeenLastMessage: boolean;
}
