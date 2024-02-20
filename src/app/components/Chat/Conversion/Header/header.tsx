import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Flex from "@/components/ui/flex";
import TypographyH4 from "@/components/ui/h4";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import getProfilePlaceholder from "@/lib/getProfilePlaceholder";
import { Session } from "next-auth";
import { useTheme } from "next-themes";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

type Props = {
  session: Session;
};

const Header = ({ session }: Props) => {
  const { theme, setTheme } = useTheme();
  const image = session.user.image as string | undefined;
  const imagePlaceholder = getProfilePlaceholder(session.user.username);

  const onThemeChange = () => {
    setTheme(theme === "white" ? "dark" : "white");
  };

  return (
    <div className="flex justify-between mb-2">
      <TypographyH4>Messages</TypographyH4>
      <Flex classname="items-center gap-2">
        <Avatar className="w-7 h-7">
          <AvatarImage src={image} />
          <AvatarFallback>{imagePlaceholder}</AvatarFallback>
        </Avatar>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {theme === "white" ? (
                <IconMoonStars
                  stroke={2}
                  className="w-7 h-7 font-bold border rounded-full p-1 border-black active:animate-spin"
                  onClick={onThemeChange}
                />
              ) : (
                <IconSun
                  stroke={2}
                  className="w-7 h-7 font-bold border rounded-full p-1 border-white active:animate-spin"
                  onClick={onThemeChange}
                />
              )}
            </TooltipTrigger>
            <TooltipContent>
              <p>Change Theme</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <SettingModal /> */}
      </Flex>
    </div>
  );
};

export default Header;
