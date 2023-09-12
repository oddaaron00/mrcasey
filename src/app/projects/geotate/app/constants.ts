const CAPITALS = "capitals";
const WORLD = "world";
const AFRICA = "africa";
const ASIA = "asia";
const EUROPE = "europe";
const NORTH_AMERICA = "north_america";
const OCEANIA = "oceania";
const SOUTH_AMERICA = "south_america";

export const CAPITALS_WORLD = `${CAPITALS}_${WORLD}`;
export const CAPITALS_AFRICA = `${CAPITALS}_${AFRICA}`;
export const CAPITALS_ASIA = `${CAPITALS}_${ASIA}`;
export const CAPITALS_EUROPE = `${CAPITALS}_${EUROPE}`;
export const CAPITALS_NORTH_AMERICA = `${CAPITALS}_${NORTH_AMERICA}`;
export const CAPITALS_OCEANIA = `${CAPITALS}_${OCEANIA}`;
export const CAPITALS_SOUTH_AMERICA = `${CAPITALS}_${SOUTH_AMERICA}`;

export const scopeOptions = [
  {
    label: "World Capitals",
    value: CAPITALS_WORLD,
  },
  {
    label: "African Capitals",
    value: CAPITALS_AFRICA,
  },
  {
    label: "Asian Capitals",
    value: CAPITALS_ASIA,
  },
  {
    label: "European Capitals",
    value: CAPITALS_EUROPE,
  },
  {
    label: "North American Capitals",
    value: CAPITALS_NORTH_AMERICA,
  },
  {
    label: "Oceanic Capitals",
    value: CAPITALS_OCEANIA,
  },
  {
    label: "South American Capitals",
    value: CAPITALS_SOUTH_AMERICA,
  },
];

export const capitalCountMap = new Map<string, number>([
  [CAPITALS_AFRICA, 65],
  [CAPITALS_ASIA, 55],
  [CAPITALS_EUROPE, 56],
  [CAPITALS_NORTH_AMERICA, 40],
  [CAPITALS_OCEANIA, 24],
  [CAPITALS_SOUTH_AMERICA, 15],
]);
