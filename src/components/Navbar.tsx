import HamburgerMenu from "./HamburgerMenu";

export function Navbar() {
  return (
    <>
      <div className="w-full h-full text-brown text-md flex flex-row items-center justify-between p-5">
        <span className="group font-bold font-sans transition ease-in-out hover:text-pink  flex flex-row items-center space-x-2">
          <img
            src="/images/PH2025Logo.svg"
            className="w-10 h-10 group-hover:opacity-50"
          />
          <h1>Pearl Hacks</h1>
        </span>
        <span className="hidden md:flex flex-row space-x-2">
          {["About", "Schedule", "FAQ", "Resources"].map((link) => {
            return (
              <>
                <p className="transition ease-in-out hover:text-pink">{link}</p>
              </>
            );
          })}
        </span>
          <HamburgerMenu />
      </div>
    </>
  );
}
