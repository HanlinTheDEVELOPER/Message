"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useLazyQuery } from "@apollo/client";
import { FormEvent, useRef } from "react";
import UserOperation from "@/graphql/operations/user";

interface Props {}

const CreateConversation = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const [searchUser, { data, loading, error }] = useLazyQuery<
    SearchUserResData,
    SearchUserReqData
  >(UserOperation.Queries.searchUsers);

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    searchUser({ variables: { username: inputRef.current?.value as string } });
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="w-full">
        <Button variant="secondary" className="w-full">
          Find or Start a conversation
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Search for conversation</DialogTitle>
          <DialogDescription>
            <form onSubmit={(e) => onSearchSubmit(e)}>
              <Input
                placeholder="Enter username"
                className="my-4"
                ref={(el) => (inputRef.current = el)}
              />
              <Button variant="secondary" className="cursor-pointer">
                Search
              </Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateConversation;
