import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="sticky top-0 grid grid-flow-col justify-stretch bg-white text-center text-lg">
      <HeaderLink href="/" label="Home" />
      <HeaderLink href="/projects" label="Projects" />
    </header>
  );
}
