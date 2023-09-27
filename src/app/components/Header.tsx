import { HeaderLink } from ".";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center bg-white px-2 pb-8 pt-6 text-center text-lg">
      <HeaderLink href="#about" label="About Me" />
      <HeaderLink href="#projects" label="Projects" />
      <HeaderLink href="#cv" label="CV" />
    </header>
  );
}
