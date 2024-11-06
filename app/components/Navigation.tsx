import Link from "next/link";

export default function Home() {
    return (
      <nav>
        <div className ="title">
          <h1>MemoryMax!</h1>
        </div>
        <Link href = "/">Learn </Link>
        <Link href = "/List">View All Cards </Link>
        <Link href = "/Add">Add A Card </Link>
      </nav>
    );
  }