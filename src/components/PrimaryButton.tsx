export function PrimaryButton({ children }) {
  return (
    <button className="font-sans font-bold text-white border-2 border-pink transition ease-in-out p-2 px-4 justify-center hover:border-green hover:text-green uppercase items-center hover:bg-pink bg-pink-accent rounded-full">
      {children}
    </button>
  );
}
