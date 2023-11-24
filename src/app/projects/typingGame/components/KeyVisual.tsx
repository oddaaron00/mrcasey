interface IKeyVisual {
  character: string;
  scale: number;
  hideLabel?: boolean;
  isActive: boolean;
}

const KeyVisual: React.FC<IKeyVisual> = ({
  character,
  scale,
  hideLabel,
  isActive,
}) => {
  const defaultClasses = `flex justify-center items-center border-2 border-black h-16 w-${
    scale * 16
  }`;
  const extraClasses = "font-bold bg-black-75";
  const classes = isActive
    ? `${defaultClasses} ${extraClasses}`
    : defaultClasses;
  return <div className={classes}>{!hideLabel && character}</div>;
};

export default KeyVisual;
