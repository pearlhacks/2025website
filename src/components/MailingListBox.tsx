export function MailingListBox() {
  return (
    <div className="w-full flex flex-row rounded-full">
      <input
        className="text-sm px-3 focus:outline-none rounded-l-full "
        placeholder="jane@doe.com"
      />
      <button className="bg-green hover:bg-pink-accent transition ease-in-out delay-150 text-white p-3 py-1 rounded-r-full">
        Submit
      </button>
    </div>
  );
}
