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
  return (
    <div>
      <GeneratedKeyVisual character="q" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="w" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="e" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="r" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="t" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="y" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="u" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="i" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="o" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="p" activeCharacter={activeCharacter} />
      <br />
      <GeneratedKeyVisual character="a" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="s" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="d" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="f" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="g" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="h" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="j" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="k" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="l" activeCharacter={activeCharacter} />
      <br />
      <GeneratedKeyVisual character="z" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="x" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="c" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="v" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="b" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="n" activeCharacter={activeCharacter} />
      <GeneratedKeyVisual character="m" activeCharacter={activeCharacter} />
    </div>
  );
};

export default KeyboardVisual;
