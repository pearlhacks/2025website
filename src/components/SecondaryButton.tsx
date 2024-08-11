export function SecondaryButton({ children }) {
  return (
    <button className="font-sans font-bold text-white border-2 transition ease-in-out p-2 px-4 justify-center border-green uppercase items-center hover:bg-transparent bg-green rounded-full">
      {children}
    </button>
  );
}
