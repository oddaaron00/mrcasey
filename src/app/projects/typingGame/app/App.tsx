"use client";

import { useCallback, useEffect, useState } from "react";
import KeyboardVisual from "../components/KeyboardVisual";
import { getCharacterOptionsFromKeyboard, keyboardOptions } from "./constants";

export default function App() {
  const [keyboardLayout, setKeyboardLayout] =
    useState<keyof typeof keyboardOptions>("QWERTY");

  const getRandomCharacter = useCallback(() => {
    const characterOptions = getCharacterOptionsFromKeyboard(keyboardLayout);
    return characterOptions[
      Math.floor(Math.random() * characterOptions.length)
    ];
  }, [keyboardLayout]);

  const [activeCharacter, setActiveCharacter] = useState<string>(
    getRandomCharacter(),
  ); // TODO: Type correctly?

  const keyboardListener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === activeCharacter) {
        setActiveCharacter(getRandomCharacter());
      }
    },
    [activeCharacter, getRandomCharacter],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, [keyboardListener]);

  return (
    <article className="flex flex-col items-center">
      <KeyboardVisual
        keyboardLayout={keyboardLayout}
        activeCharacter={activeCharacter}
      />
    </article>
  );
}
