import { HeaderLink } from ".";

export default function Header() {
  return (
    <header className="sticky top-0 flex items-center bg-white text-center text-lg">
      <HeaderLink href="#about" label="About Me" />
      <HeaderLink href="#projects" label="Projects" />
      <HeaderLink href="#cv" label="CV" />
    </header>
  );
}
