export enum Stage {
  SCOPE,
  GAME,
  SCORE,
}

export type CityObject = {
  city: string;
  lat: number;
  lng: number;
  country: string;
  iso2: string;
  capital: string;
  population: number;
};
