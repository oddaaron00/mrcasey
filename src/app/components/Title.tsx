interface ITitle {
  text: string;
  extraClasses?: string;
}

export default function Title({ text, extraClasses }: ITitle) {
  const defaultClasses = "text-4xl";
  const classes = extraClasses
    ? `${defaultClasses} ${extraClasses}`
    : defaultClasses;
  return <h1 className={classes}>{text}</h1>;
}
