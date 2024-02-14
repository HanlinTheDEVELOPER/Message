interface CreateUserResData {
  createUsername: {
    success: boolean;
    error: string;
  };
}

interface CreateUserReqData {
  username: string;
}
