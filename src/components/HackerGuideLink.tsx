import { link_hackerguide } from "@/utils/Urls";
import { Link } from "./Link";

export const HackerGuideLink = () => {
  return (
    <p className="text-pink-transition font-medium">
      For more information, check out{" "}
      <Link href={link_hackerguide}>our 2025 Hacker Guide</Link>!
    </p>
  );
};
