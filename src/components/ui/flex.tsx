import { cn } from "@/lib/utils";

interface Props {
  classname?: string;
  children: React.ReactNode;
}

const Flex = ({ classname, children }: Props) => {
  return <div className={cn("flex  h-100vh", classname)}>{children}</div>;
};

export default Flex;
