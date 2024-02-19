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
import { FormEvent, useRef, useState } from "react";
import UserOperation from "@/graphql/operations/user";
import SearchUserList from "./SearchUserList";
import Participants from "./Participants";
import { Session } from "next-auth";

interface Props {
  session: Session;
}

const Modal = ({ session }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const [participants, setParticipants] = useState<Array<SearchUser>>([]);

  const [searchUser, { data, loading, error }] = useLazyQuery<
    SearchUserResData,
    SearchUserReqData
  >(UserOperation.Queries.searchUsers);

  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchUser({ variables: { username: inputRef.current?.value as string } });
  };

  const addParticipant = (user: SearchUser) => {
    setParticipants((prev) => [...prev, user]);
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((prev) => prev.id !== userId));
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

          <form onSubmit={(e) => onSearchSubmit(e)}>
            <Input
              placeholder="Enter username"
              className="my-4"
              ref={(el) => (inputRef.current = el)}
            />
            <Participants
              session={session}
              participants={participants}
              removeParticipant={removeParticipant}
            />
            <Button variant="secondary" className="cursor-pointer">
              Search
            </Button>
          </form>

          <SearchUserList
            users={data?.searchUsers as [SearchUser]}
            addParticipants={addParticipant}
            removeParticipant={removeParticipant}
            participants={participants}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
