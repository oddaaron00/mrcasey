import Link from "next/link";

interface IHeaderLink {
  href: string;
  label: string;
}

export default function HeaderLink({ href, label }: IHeaderLink) {
  return (
    <Link href={href} className="m-2 p-2">
      {label}
    </Link>
  );
}
