export function FooterContent({ title, children }) {
  return (
    <div className="w-full">
      <h2 className="text-pink font-sans font-bold  uppercase">{title}</h2>
      <p className="text-pink-accent">{children}</p>
    </div>
  );
}
