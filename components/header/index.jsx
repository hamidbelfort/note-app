import Link from "next/link";
const Header = () => {
  return (
    <header className="py-4 container mx-auto text-blue-600 flex justify-between items-center">
      <Link href={"/"} className="text-lg">
        یادداشت های من
      </Link>
      <Link
        href={"/create-note"}
        className="text-lg bg-zinc-100 px-4 py-1 rounded transition-all duration-500 hover:bg-zinc-200"
      >
        یادداشت جدید
      </Link>
    </header>
  );
};

export default Header;
