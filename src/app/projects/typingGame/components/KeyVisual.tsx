interface IKeyVisual {
  character: string;
  isActive: boolean;
}

const KeyVisual: React.FC<IKeyVisual> = ({ character, isActive }) => {
  const defaultClasses = "flex justify-center items-center w-16 h-16";
  const extraClasses = "font-bold bg-black-75";
  const classes = isActive
    ? `${defaultClasses} ${extraClasses}`
    : defaultClasses;
  return <div className={classes}>{character}</div>;
};

export default KeyVisual;
