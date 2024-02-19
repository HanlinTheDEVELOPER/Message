import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Flex from "@/components/ui/flex";
import TypographyP from "@/components/ui/p";
import { Switch } from "@/components/ui/switch";

import { useTheme } from "next-themes";

type Props = {};

const Modal = (props: Props) => {
  const { setTheme, theme } = useTheme();

  return (
    <Dialog>
      <DialogTrigger>se</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Setting</DialogTitle>
          <Flex classname="justify-between">
            <TypographyP>Dark Mode</TypographyP>
            <Switch
              checked={theme === "dark"}
              onCheckedChange={() =>
                setTheme(theme === "white" ? "dark" : "white")
              }
            />
          </Flex>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
