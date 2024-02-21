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
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { useLazyQuery } from "@apollo/client";
import {
  Dispatch,
  FormEvent,
  MutableRefObject,
  SetStateAction,
  useRef,
  useState,
} from "react";
import UserOperation from "@/graphql/operations/user";
import SearchUserList from "./SearchUserList";
import Participants from "./Participants";
import { Session } from "next-auth";
import { useDebounce, useWindowSize } from "rooks";
interface Props {
  session: Session;
}

const Modal = ({ session }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const [participants, setParticipants] = useState<Array<SearchUser>>([]);
  const [open, setOpen] = useState(false);
  const { innerWidth } = useWindowSize();

  const [searchUser, { data, loading, error }] = useLazyQuery<
    SearchUserResData,
    SearchUserReqData
  >(UserOperation.Queries.searchUsers);

  const onSearchChange = async () => {
    searchUser({ variables: { username: inputRef.current?.value as string } });
  };
  const debouncedSearch = useDebounce(onSearchChange, 500);

  const addParticipant = (user: SearchUser) => {
    setParticipants((prev) => [...prev, user]);
  };

  const removeParticipant = (userId: string) => {
    setParticipants((prev) => prev.filter((prev) => prev.id !== userId));
  };

  const isDesktop = innerWidth > 640 ? true : false;

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="w-full">
            Find or Create Conversation
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create Conversation</DialogTitle>
          </DialogHeader>
          <Content
            debouncedSearch={debouncedSearch}
            addParticipant={addParticipant}
            data={data}
            participants={participants}
            removeParticipant={removeParticipant}
            session={session}
            setOpen={setOpen}
            setParticipants={setParticipants}
            inputRef={inputRef}
          />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="w-full">
          Find or Create Conversation
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DialogTitle>Create Conversation</DialogTitle>
          <Content
            debouncedSearch={debouncedSearch}
            addParticipant={addParticipant}
            data={data}
            participants={participants}
            removeParticipant={removeParticipant}
            session={session}
            setOpen={setOpen}
            setParticipants={setParticipants}
            inputRef={inputRef}
          />
        </DrawerHeader>
      </DrawerContent>
    </Drawer>
  );
};

export default Modal;

const Content = ({
  debouncedSearch,
  setOpen,
  session,
  participants,
  removeParticipant,
  setParticipants,
  data,
  addParticipant,
  inputRef,
}: {
  debouncedSearch: () => void;
  setOpen: Dispatch<SetStateAction<boolean>>;
  session: Session;
  participants: SearchUser[];
  removeParticipant: (userId: string) => void;
  setParticipants: Dispatch<SetStateAction<SearchUser[]>>;
  data: SearchUserResData | undefined;
  addParticipant: (user: SearchUser) => void;
  inputRef?: MutableRefObject<HTMLInputElement | null | undefined>;
}) => {
  return (
    <section className="p-2">
      <Input
        placeholder="Enter username"
        className="my-4"
        ref={(el) => (inputRef.current = el)}
        onChange={debouncedSearch}
      />
      <Participants
        setOpen={setOpen}
        session={session}
        participants={participants}
        removeParticipant={removeParticipant}
        setParticipants={setParticipants}
      />

      <SearchUserList
        users={data?.searchUsers as [SearchUser]}
        addParticipants={addParticipant}
        removeParticipant={removeParticipant}
        participants={participants}
      />
    </section>
  );
};
