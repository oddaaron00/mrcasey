import { keyboardOptions } from "../app/constants";
import KeyVisual from "./KeyVisual";

interface IKeyboardVisual {
  keyboardLayout: keyof typeof keyboardOptions;
  activeCharacter: string;
}

interface IGeneratedKeyVisual {
  character: string;
  scale: number;
  hideLabel?: boolean;
  activeCharacter: string;
}

const GeneratedKeyVisual: React.FC<IGeneratedKeyVisual> = ({
  character,
  scale,
  hideLabel,
  activeCharacter,
}) => (
  <KeyVisual
    character={character}
    scale={scale}
    hideLabel={hideLabel}
    isActive={character === activeCharacter}
  />
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
          {row.map(({ key: characterKey, scale, hideLabel }) => (
            <GeneratedKeyVisual
              key={`${characterKey}${scale}`}
              character={characterKey}
              scale={scale}
              hideLabel={hideLabel}
              activeCharacter={activeCharacter}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KeyboardVisual;
