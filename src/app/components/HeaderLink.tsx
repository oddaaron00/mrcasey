interface IHeaderLink {
  href: string;
  label: string;
}

// TODO: Account for header size on fragment navigation
export default function HeaderLink({ href, label }: IHeaderLink) {
  return (
    <a href={href} className="m-2 p-2">
      {label}
    </a>
  );
}
