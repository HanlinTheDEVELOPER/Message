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
          sender {
            id 
            username
            image
          }
          id 
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
  Subscription: {
    conversationCreated: gql`
      subscription conversationCreated {
        conversationCreated {
          hal
        }
      }
    `,
  },
};

export default conversation;
