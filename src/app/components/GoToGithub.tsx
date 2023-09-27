import Image from "next/image";
import Link from "next/link";

interface IGoToGithub {
  href: string;
}

export default function GoToGithub({ href }: IGoToGithub) {
  return (
    <span className="pt-1 text-xl">
      <Link
        href={href}
        title="To GitHub"
        target="_blank"
        className="flex items-center justify-center"
      >
        <span className="pr-1">See the code:</span>
        <Image
          src="/github-mark.png"
          alt="GitHub Logo"
          width={40}
          height={40}
          className="p-1"
        />
      </Link>
    </span>
  );
}
