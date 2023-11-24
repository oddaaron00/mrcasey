export const keyboardOptions = {
  QWERTY: {
    1: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
    2: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
    3: ["z", "x", "c", "v", "b", "n", "m"],
  },
};

export const getCharacterOptionsFromKeyboard = (
  layout: keyof typeof keyboardOptions,
): string[] => {
  const characterRows = keyboardOptions[layout];
  return Object.values(characterRows).flat();
};
