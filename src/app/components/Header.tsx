import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <header className="grid grid-flow-col justify-stretch text-center text-lg">
      <HeaderLink href="/" label="Home" />
    </header>
  );
}
