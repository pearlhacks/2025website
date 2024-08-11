export default function NavItem({ children }) {
  return (
    <span className="text-gray-brown hover:text-pink transition ease-in-out delay-150">
      {children}
    </span>
  );
}
