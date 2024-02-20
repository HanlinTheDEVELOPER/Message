import { gql } from "@apollo/client";

const ConversationFields = `
        id
        participants {
         user {
          id
          username
          image
         }
         hasSeenLastMessage
        }
        updatedAt
        lastMessage {
          id 
          sender {
            id 
            username
            image
          }
          body
          createdAt
        }
`;

const conversation = {
  Query: {
    conversations: gql`
      query Conversations {
        conversations {
         ${ConversationFields}
        }
      }
    `,
  },
  Mutations: {
    createConversation: gql`
      mutation CreateConversation($participantIds: [String]!) {
        createConversation(participantIds: $participantIds) {
          conversationId
        }
      }
    `,
  },
};

export default conversation;
