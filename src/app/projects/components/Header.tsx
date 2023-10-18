import { GoToGithub, Title } from "@/app/components";
import Link from "next/link";

interface IHeader {
  title: string;
  githubHref: string;
  description?: string;
}

const Header: React.FC<IHeader> = ({ title, githubHref, description }) => (
  <header className="sticky top-0 bg-white px-2 pb-2 pt-6 text-center">
    <div className="flex items-center justify-between text-lg">
      <div className="w-1/5">
        <Link href="/">Home</Link>
      </div>
      <div className="w-3/5">
        <Title text={title} />
      </div>
      <div className="w-1/5">
        <GoToGithub href={githubHref} />
      </div>
    </div>
    {description && <p className="py-4">{description}</p>}
  </header>
);

export default Header;
