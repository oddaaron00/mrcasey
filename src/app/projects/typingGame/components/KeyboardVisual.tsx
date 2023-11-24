import { keyboardOptions } from "../app/constants";
import KeyVisual from "./KeyVisual";

interface IKeyboardVisual {
  keyboardLayout: keyof typeof keyboardOptions;
  activeCharacter: string;
}

interface IGeneratedKeyVisual {
  character: string;
  activeCharacter: string;
}

const GeneratedKeyVisual: React.FC<IGeneratedKeyVisual> = ({
  character,
  activeCharacter,
}) => (
  <KeyVisual character={character} isActive={character === activeCharacter} />
);

const KeyboardVisual: React.FC<IKeyboardVisual> = ({
  keyboardLayout,
  activeCharacter,
}) => {
  const layoutObject = keyboardOptions[keyboardLayout];

  return (
    <div>
      {Object.entries(layoutObject).map(([index, row]) => (
        <div key={index} className="flex">
          {row.map((character) => (
            <GeneratedKeyVisual
              key={character}
              character={character}
              activeCharacter={activeCharacter}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyboardVisual;
