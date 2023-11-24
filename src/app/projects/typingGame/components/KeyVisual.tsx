interface IKeyVisual {
  character: string;
  isActive: boolean;
}

const KeyVisual: React.FC<IKeyVisual> = ({ character, isActive }) => {
  return (
    <div>
      {character}
      {isActive && " ACTIVE"}
    </div>
  );
};

export default KeyVisual;
