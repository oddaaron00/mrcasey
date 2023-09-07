interface ISubtitle {
  text: string;
  extraClasses?: string;
}

export default function Subtitle({ text, extraClasses }: ISubtitle) {
  return <h2 className={`text-xl ${extraClasses}`}>{text}</h2>;
}
