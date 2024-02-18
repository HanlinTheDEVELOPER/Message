import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  classname?: string;
}

const Stack = ({ classname, children }: Props) => {
  return (
    <div className={cn("flex flex-col gap-12 items-center", classname)}>
      {children}
    </div>
  );
};

export default Stack;
