import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  weight: "700",
});

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center bg-slate-900">
      <p
        className={`text-sky-600 rounded-xl text-3xl w-fit, ${roboto.className}`}
      >
        Welcome
      </p>
    </main>
  );
}
