interface ISubtitle {
  text: string;
  extraClasses?: string;
}

export default function Subtitle({ text, extraClasses }: ISubtitle) {
  const defaultClasses = "text-xl";
  const classes = extraClasses
    ? `${defaultClasses} ${extraClasses}`
    : defaultClasses;
  return <h2 className={classes}>{text}</h2>;
}
