import Subtitle from "./Subtitle";

interface ISection {
  id?: string;
  subtitle: string;
  extraClasses?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  subtitle,
  extraClasses,
  children,
}: ISection) {
  return (
    <section id={id} className={extraClasses}>
      <Subtitle text={subtitle} />
      {children}
    </section>
  );
}

export function PaddedSection({
  id,
  subtitle,
  extraClasses,
  children,
}: ISection) {
  const defaultClasses = "p-8";
  const classes = extraClasses
    ? `${defaultClasses} ${extraClasses}`
    : defaultClasses;
  return (
    <Section id={id} subtitle={subtitle} extraClasses={classes}>
      {children}
    </Section>
  );
}
