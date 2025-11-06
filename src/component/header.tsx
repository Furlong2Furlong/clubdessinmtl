import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between px-5 ">
      <div>
        <Image
          src="/eraser.jpg"
          height={250}
          width={250}
          alt="Eraser"
          priority
          className=""
        />
      </div>
      <ul className="flex items-center gap-3">
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/members">Members</Link>
        </li>
        <li>
          {" "}
          <Link href="/about">About</Link>
        </li>
        <li>
          {" "}
          <Link href="/admin">Admin</Link>
        </li>
      </ul>
    </div>
  );
}
