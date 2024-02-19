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
  searchUsers: [{ id: string; username: string }];
}
