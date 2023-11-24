interface IKeyVisual {
  character: string;
  isActive: boolean;
}

const KeyVisual: React.FC<IKeyVisual> = ({ character, isActive }) => {
  return (
    <div className={isActive ? "bg-black-75 font-bold" : ""}>{character}</div>
  );
};

export default KeyVisual;
