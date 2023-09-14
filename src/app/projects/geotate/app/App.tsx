"use client";

import Loading from "@/app/loading";
import "mapbox-gl/dist/mapbox-gl.css";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ScopeScreen from "./components/ScopeScreen";
import {
  CAPITALS_AFRICA,
  CAPITALS_ASIA,
  CAPITALS_EUROPE,
  CAPITALS_NORTH_AMERICA,
  CAPITALS_OCEANIA,
  CAPITALS_SOUTH_AMERICA,
} from "./constants";
import { CityObject, Stage } from "./types";
const GameScreen = dynamic(() => import("./components/GameScreen"), {
  ssr: false,
  loading: Loading,
});
const ScoreScreen = dynamic(() => import("./components/ScoreScreen"), {
  ssr: false,
  loading: Loading,
});

export default function App() {
  const [stage, setStage] = useState<Stage>(Stage.SCOPE);
  const [scope, setScope] = useState<string>();
  const [cities, setCities] = useState<Record<string, unknown>[]>([]);
  const [scores, setScores] = useState<Record<string, unknown>[]>([]);
  const [cumulativeScore, setCumulativeScore] = useState(0);
  const [continentCodeCountryCodeDict, setContinentCodeCountryCodeDict] =
    useState<null | Record<string, string[]>>(null);
  const [allCities, setAllCities] = useState<null | Record<string, CityObject>>(
    null,
  );

  useEffect(() => {
    import("./assets/continentCodeCountryCodeDict.json").then((data) =>
      setContinentCodeCountryCodeDict(data.default),
    );
    import("./assets/worldCitiesComplete.json").then((data) =>
      // @ts-ignore
      setAllCities(data.default),
    );
  }, []);

  const getCapitalsInContinent = (continentCode: string) => {
    const continentCountryCodes = (
      continentCodeCountryCodeDict as Record<string, string[]>
    )[continentCode];
    const citiesInContinent = Object.values(allCities!).filter((city) =>
      continentCountryCodes.includes(city.iso2),
    );
    const capitals = citiesInContinent.filter(
      (city) => city.capital === "primary",
    );
    return capitals;
  };

  const submitScope = (scope: string, cityCount: number) => {
    let scopeCities: Record<string, unknown>[];
    switch (scope) {
      case CAPITALS_AFRICA:
        scopeCities = getCapitalsInContinent("AF");
        break;
      case CAPITALS_ASIA:
        scopeCities = getCapitalsInContinent("AS");
        break;
      case CAPITALS_EUROPE:
        scopeCities = getCapitalsInContinent("EU");
        break;
      case CAPITALS_NORTH_AMERICA:
        scopeCities = getCapitalsInContinent("NA");
        break;
      case CAPITALS_OCEANIA:
        scopeCities = getCapitalsInContinent("OC");
        break;
      case CAPITALS_SOUTH_AMERICA:
        scopeCities = getCapitalsInContinent("SA");
        break;
      default:
        scopeCities = [];
    }
    const citySet = new Set<Record<string, unknown>>();
    if (cityCount < 1) {
      citySet.add(scopeCities[Math.floor(Math.random() * scopeCities.length)]);
    } else {
      while (citySet.size < cityCount) {
        citySet.add(
          scopeCities[Math.floor(Math.random() * scopeCities.length)],
        );
        if (cityCount > scopeCities.length) {
          break;
        }
      }
    }
    setCities(Array.from(citySet));
    setStage(Stage.GAME);
  };

  const setHasComplete = () => {
    setStage(Stage.SCORE);
  };

  const addScore = (cityObject: Record<string, unknown>, points: number) => {
    const score = {
      city: cityObject.city,
      country: cityObject.country,
      code: cityObject.iso2,
      points,
    };
    setScores([...scores, score]);
  };

  return (
    <article className="flex flex-col items-center">
      {stage === Stage.SCOPE ? (
        <ScopeScreen
          scope={scope}
          setScope={setScope}
          submitScope={submitScope}
          isNextDisabled={!continentCodeCountryCodeDict || !allCities}
        />
      ) : stage === Stage.GAME ? (
        <GameScreen
          cities={cities}
          cumulativeScore={cumulativeScore}
          setCumulativeScore={setCumulativeScore}
          setHasComplete={setHasComplete}
          addScore={addScore}
        />
      ) : (
        <ScoreScreen scores={scores} cumulativeScore={cumulativeScore} />
      )}
    </article>
  );
}
