import { Session } from "next-auth";
import { useSearchParams } from "next/navigation";

interface Props {
  session: Session;
}

const FeedWrapper = ({ session }: Props) => {
  const searchParams = useSearchParams();
  return <div>{searchParams.get("conversation")}</div>;
};

export default FeedWrapper;
