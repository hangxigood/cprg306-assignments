import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-24">
      <h1 className="text-4xl font-bold mb-5">CPRG 306: Web Development 2 - Assignments</h1>
      <div className="flex flex-col space-y-2"> 
      <Link href={`/week-2`} className="hover:text-green-400 hover:underline">Week 2</Link>
      <Link href={`/week-3`} className="hover:text-green-400 hover:underline">Week 3</Link>
      <Link href={`/week-4`} className="hover:text-green-400 hover:underline">Week 4</Link>
      <Link href={`/week-5`} className="hover:text-green-400 hover:underline">Week 5</Link>
      </div>
    </main>
  );
}
