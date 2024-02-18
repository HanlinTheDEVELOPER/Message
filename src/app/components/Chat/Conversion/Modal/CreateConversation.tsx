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
import { FormEvent, useRef } from "react";

interface Props {}

const CreateConversation = (props: Props) => {
  const inputRef = useRef<HTMLInputElement | null>();
  const onSearchSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
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
              <Button className="cursor-pointer">Search</Button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default CreateConversation;
