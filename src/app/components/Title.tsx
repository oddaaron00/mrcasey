interface ITitle {
  text: string;
  extraClasses?: string;
}

export default function Title({ text, extraClasses }: ITitle) {
  return <h1 className={`text-4xl ${extraClasses}`}>{text}</h1>;
}
