import Link from "next/link";

interface IProjectItem {
  name: string;
  label: string;
}

export default function ProjectItem({ name, label }: IProjectItem) {
  return (
    <Link href={`/projects/${name}`} className="text-lg">
      {label}
    </Link>
  );
}
