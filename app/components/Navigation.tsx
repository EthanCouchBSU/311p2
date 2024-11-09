import Link from "next/link";

export default function Home() {
    return (
      <nav>
        <div className ="title">
          <h1>MemoryMax!</h1>
        </div>
        <Link href = "/">Learn </Link>
        <Link href = "/List">List</Link>
        <Link href = "/Add">Add</Link>
      </nav>
    );
  }