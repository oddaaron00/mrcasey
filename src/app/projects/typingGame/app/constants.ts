export const keyboardOptions = {
  QWERTY: [
    [
      {
        key: "§",
        scale: 1,
        ignore: true,
      },
      {
        key: "1",
        scale: 1,
        ignore: true,
      },
      {
        key: "2",
        scale: 1,
        ignore: true,
      },
      {
        key: "3",
        scale: 1,
        ignore: true,
      },
      {
        key: "4",
        scale: 1,
        ignore: true,
      },
      {
        key: "5",
        scale: 1,
        ignore: true,
      },
      {
        key: "6",
        scale: 1,
        ignore: true,
      },
      {
        key: "7",
        scale: 1,
        ignore: true,
      },
      {
        key: "8",
        scale: 1,
        ignore: true,
      },
      {
        key: "9",
        scale: 1,
        ignore: true,
      },
      {
        key: "0",
        scale: 1,
        ignore: true,
      },
      {
        key: "-",
        scale: 1,
        ignore: true,
      },
      {
        key: "=",
        scale: 1,
        ignore: true,
      },
      {
        key: "Backspace",
        scale: 1.5,
        ignore: true,
      },
    ],
    [
      {
        key: "Tab",
        scale: 1.5,
        ignore: true,
      },
      {
        key: "q",
        scale: 1,
      },
      {
        key: "w",
        scale: 1,
      },
      {
        key: "e",
        scale: 1,
      },
      {
        key: "r",
        scale: 1,
      },
      {
        key: "t",
        scale: 1,
      },
      {
        key: "y",
        scale: 1,
      },
      {
        key: "u",
        scale: 1,
      },
      {
        key: "i",
        scale: 1,
      },
      {
        key: "o",
        scale: 1,
      },
      {
        key: "p",
        scale: 1,
      },
      {
        key: "[",
        scale: 1,
        ignore: true,
      },
      {
        key: "]",
        scale: 1,
        ignore: true,
      },
      {
        key: "Enter",
        scale: 1,
        ignore: true,
      },
    ],
    [
      {
        key: "CapsLock",
        scale: 2,
        ignore: true,
      },
      {
        key: "a",
        scale: 1,
      },
      {
        key: "s",
        scale: 1,
      },
      {
        key: "d",
        scale: 1,
      },
      {
        key: "f",
        scale: 1,
      },
      {
        key: "g",
        scale: 1,
      },
      {
        key: "h",
        scale: 1,
      },
      {
        key: "j",
        scale: 1,
      },
      {
        key: "k",
        scale: 1,
      },
      {
        key: "l",
        scale: 1,
      },
      {
        key: ";",
        scale: 1,
        ignore: true,
      },
      {
        key: "'",
        scale: 1,
        ignore: true,
      },
      {
        key: "\\",
        scale: 1,
        ignore: true,
      },
      {
        key: "Enter",
        scale: 0.5,
        hideLabel: true,
        ignore: true,
      },
    ],
    [
      {
        key: "Shift",
        scale: 1.25,
        ignore: true,
      },
      {
        key: "`",
        scale: 1,
        ignore: true,
      },
      {
        key: "z",
        scale: 1,
      },
      {
        key: "x",
        scale: 1,
      },
      {
        key: "c",
        scale: 1,
      },
      {
        key: "v",
        scale: 1,
      },
      {
        key: "b",
        scale: 1,
      },
      {
        key: "n",
        scale: 1,
      },
      {
        key: "m",
        scale: 1,
      },
      {
        key: ",",
        scale: 1,
        ignore: true,
      },
      {
        key: ".",
        scale: 1,
        ignore: true,
      },
      {
        key: "/",
        scale: 1,
        ignore: true,
      },
      {
        key: "Shift",
        scale: 2.25,
        ignore: true,
      },
    ],
  ],
};

export const getCharacterOptionsFromKeyboard = (
  layout: keyof typeof keyboardOptions,
): string[] => {
  const characterRows = keyboardOptions[layout];
  return characterRows
    .flat()
    .filter((obj) => !obj.ignore)
    .map((obj) => obj.key);
};
