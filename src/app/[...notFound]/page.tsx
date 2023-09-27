import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex-1 flex-col text-center">
      <h1>Page Not Found</h1>
      <Link href="/">Back to Home</Link>
    </main>
  );
}
