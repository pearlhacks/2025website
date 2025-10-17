import { link_hackerguide } from "@/utils/Urls";

export const HackerGuideLink = () => {
  return (
    <p className="text-[#ca8d5c] font-medium">
      For more information, check out{" "}
      <a
        href={link_hackerguide}
        className="my-2 bg-[#9ccce6] hover:bg-[#7fb8d8] transition ease-in-out delay-150 text-[#ffffff] rounded-full px-2 p-1"
      >
        our 2025 Hacker Guide
      </a>
    </p>
  );
};
