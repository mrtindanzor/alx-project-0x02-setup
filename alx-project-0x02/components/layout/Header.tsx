import Link from "next/link";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="h-15 bg-white/80 flex items-center justify-between px-4 backdrop-blur-md rounded-xl fixed top-4 inset-x-0 w-11/12 mx-auto">
      <Link href="/" className="text-white font-bold">
        Airbnb
      </Link>
      <Navbar />
    </header>
  );
}

// /home
// /about
// /users
// /posts
