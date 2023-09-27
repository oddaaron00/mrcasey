import { GoToGithub, Title } from "@/app/components";
import Link from "next/link";

interface IHeader {
  title: string;
  githubHref: string;
}

const Header: React.FC<IHeader> = ({ title, githubHref }) => (
  <header className="sticky top-0 flex items-center justify-between bg-white px-2 pb-8 pt-6 text-center text-lg">
    <div className="w-1/5">
      <Link href="/">Home</Link>
    </div>
    <div className="w-3/5">
      <Title text={title} />
    </div>
    <div className="w-1/5">
      <GoToGithub href={githubHref} />
    </div>
  </header>
);

export default Header;
