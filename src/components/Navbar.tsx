import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export function Navbar({ mode }) {
  const color = mode == "landing" ? "brown" : "pink";
  const hoverColor = mode == "landing" ? "pink" : "white";
  return (
    <>
      <div
        className={`w-full h-full text-${color} text-md flex flex-row items-center justify-between p-5`}
      >
        <Link href="/">
          <span
            className={`group font-bold font-sans transition ease-in-out hover:text-${hoverColor}  flex flex-row items-center space-x-2`}
          >
            <img
              src="/images/PH2025Logo.svg"
              className="w-10 h-10 group-hover:opacity-50"
            />
            <h1>Pearl Hacks</h1>
          </span>
        </Link>
        <span className="flex flex-wrap items-center">
          <span className="hidden sm:flex flex-row space-x-2">
            {["About", "FAQ", "Resources"].map((link) => {
              return (
                <>
                  <p
                    className={`transition ease-in-out hover:text-${hoverColor}`}
                  >
                    <Link href={link.toLowerCase()}>
                      {link}
                    </Link>
                  </p>
                </>
              );
            })}
          </span>
          <HamburgerMenu mode={mode} />
        </span>
      </div>
    </>
  );
}
