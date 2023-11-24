"use client";

import { useCallback, useEffect, useState } from "react";
import KeyboardVisual from "../components/KeyboardVisual";
import { characterOptions } from "./constants";
import { KeyboardLayout } from "./types";

export default function App() {
  const getRandomCharacter = () =>
    characterOptions[Math.floor(Math.random() * characterOptions.length)];

  const [keyboardLayout, setKeyboardLayout] = useState<KeyboardLayout>(
    KeyboardLayout.EN_GB,
  );
  const [activeCharacter, setActiveCharacter] = useState<string>(
    getRandomCharacter(),
  ); // TODO: Type correctly?

  const keyboardListener = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === activeCharacter) {
        setActiveCharacter(getRandomCharacter());
      }
    },
    [activeCharacter],
  );

  useEffect(() => {
    document.addEventListener("keydown", keyboardListener);

    return () => {
      document.removeEventListener("keydown", keyboardListener);
    };
  }, [keyboardListener]);

  return (
    <article className="flex flex-col items-center">
      <KeyboardVisual activeCharacter={activeCharacter} />
    </article>
  );
}
