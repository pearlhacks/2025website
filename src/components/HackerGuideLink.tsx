import { link_hackerguide } from "@/utils/Urls";

export const HackerGuideLink = () => {
  return (
    <div className="flex justify-center">
        <p className="text-brown font-medium">
        For more information, check out{" "}
        <a
          href={link_hackerguide}
          className="my-2 bg-blue-light hover:bg-blue-hover transition ease-in-out delay-150 text-white rounded-full px-2 p-1"
        >
          our 2025 Hacker Guide
        </a>
      </p>
    </div>

  );
};
