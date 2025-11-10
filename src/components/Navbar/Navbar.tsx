import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

interface NavbarProps {
  mode: "landing" | "generic"; // Assuming these two modes
}

export function Navbar({ mode }: NavbarProps) {
  const codingStart = new Date("2025-02-15T00:00:00-05:00");
  const codingEnd = new Date("2025-02-16T23:00:00-05:00");
  const now = new Date();
  return (
    <>
      <div
        className={`w-full h-full text-md flex flex-row items-center justify-between p-5 ${
          mode === "landing" ? "text-brown" : "text-pink"
        }`}
      >
        <Link className="z-30" href="/">
          <span
            className={`group font-bold font-sans ${
              mode == "landing"
                ? "hover:text-white"
                : "text-white hover:text-pink"
            } transition ease-in-out pr-2 rounded-lg  flex flex-row items-center space-x-2`}
          >
            <img
              src="/images/PH2025Logo.svg"
              className="w-10 h-10 group-hover:opacity-50"
              alt="Pearl Hacks Logo"
            />
            <h1>Pearl Hacks</h1>
          </span>
        </Link>
        <span className="z-30 flex flex-wrap items-center">
          <span className="hidden sm:flex flex-row space-x-4 mr-[170px]">
            {["About", "FAQ", "Resources", "Schedule", "Programs"]
              .map((link) => (
                <div key={link}>
                  <p className="text-yellow-light transition ease-in-out hover:text-white">
                    <Link href={link.toLowerCase()}>{link}</Link>
                  </p>
                </div>
              ))}
          </span>

          <a
            id="mlh-trust-badge"
            className="block w-[80px] md:w-[100px] absolute right-[50px] top-0 w-[10%]"
            href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2026-season&utm_content=white"
            target="_blank"
          >
            <img
              src="https://s3.amazonaws.com/logged-assets/trust-badge/2026/mlh-trust-badge-2026-white.svg"
              alt="Major League Hacking 2026 Hackathon Season"
              className="w-full"
            />
          </a>

          <HamburgerMenu mode={mode} />
        </span>
      </div>
    </>
  );
}
