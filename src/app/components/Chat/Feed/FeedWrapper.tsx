import { Session } from "next-auth";
import { useSearchParams } from "next/navigation";

interface Props {
  session: Session;
}
// {searchParams.get("conversation")}
const FeedWrapper = ({ session }: Props) => {
  const searchParams = useSearchParams();
  return <div></div>;
};

export default FeedWrapper;
