import Flex from "@/components/ui/flex";
import TypographyH4 from "@/components/ui/h4";
import React from "react";
import { GearIcon } from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type Props = {
  session: Session;
};

const Header = ({ session }: Props) => {
  const image = session.user.image as string | undefined;
  const imagePlaceholder = session.user.username
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("");
  console.log(imagePlaceholder);
  return (
    <Flex classname=" justify-between mb-2">
      <TypographyH4>Messages</TypographyH4>
      <Flex classname="items-center gap-2">
        <Avatar className="w-7 h-7">
          <AvatarImage src={image} />
          <AvatarFallback>{imagePlaceholder}</AvatarFallback>
        </Avatar>
        <GearIcon className="w-7 h-7" />
      </Flex>
    </Flex>
  );
};

export default Header;
