import { cn } from "@/lib/utils";

interface Props {
  classname?: string;
  children: React.ReactNode;
}

const Flex = ({ classname, children, ...props }: Props) => {
  return <div className={cn("flex", classname)}>{children}</div>;
};

export default Flex;
