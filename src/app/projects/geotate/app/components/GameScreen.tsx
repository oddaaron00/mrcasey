import destination from "@turf/destination";
import { feature, geometry, point } from "@turf/helpers";
import mapboxgl, { GeoJSONSource } from "mapbox-gl";
import { FormEvent, useEffect, useRef, useState } from "react";
import "./GameScreen.css";

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN!;

function onMapLoad(
  event: mapboxgl.MapboxEvent<undefined> & mapboxgl.EventData,
  city: Record<string, unknown>,
  initialBearing: number,
) {
  const centerPointFromPosition = point([
    city.lng as number,
    city.lat as number,
  ]);
  const bearingLineTopPoint = destination(
    centerPointFromPosition,
    50,
    initialBearing,
    { units: "kilometers" },
  );
  const bearingLineBottomPoint = destination(
    centerPointFromPosition,
    -50,
    initialBearing,
    { units: "kilometers" },
  );
  event.target.addSource("userBearing", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          bearingLineTopPoint.geometry.coordinates,
          [city.lng as number, city.lat as number],
          bearingLineBottomPoint.geometry.coordinates,
        ],
      },
    },
  });
  event.target.addLayer({
    id: "userBearing",
    type: "line",
    source: "userBearing",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#de90d0",
      "line-width": 8,
      "line-opacity": 0.75,
    },
  });
}

function onMapRotate(
  event: mapboxgl.MapboxEvent<MouseEvent | TouchEvent | undefined> &
    mapboxgl.EventData,
  city: Record<string, unknown>,
) {
  const currentBearing = event.target.getBearing();
  const centerPointFromPosition = point([
    city.lng as number,
    city.lat as number,
  ]);
  const bearingLineTopPoint = destination(
    centerPointFromPosition,
    50,
    currentBearing,
    { units: "kilometers" },
  );
  const bearingLineBottomPoint = destination(
    centerPointFromPosition,
    -50,
    currentBearing,
    { units: "kilometers" },
  );
  const updatedLineGeometry = geometry("LineString", [
    bearingLineTopPoint.geometry.coordinates,
    [city.lng as number, city.lat as number],
    bearingLineBottomPoint.geometry.coordinates,
  ]);
  const updatedLineFeature = feature(updatedLineGeometry);
  (event.target.getSource("userBearing") as GeoJSONSource).setData(
    updatedLineFeature,
  );
}

function removeSelectedBearingFromMap(map: mapboxgl.Map) {
  map.removeLayer("selectedBearing");
  map.removeSource("selectedBearing");
}

function removeUserBearingFromMap(map: mapboxgl.Map) {
  map.removeLayer("userBearing");
  map.removeSource("userBearing");
}

function setMapCenter(map: mapboxgl.Map, city: Record<string, unknown>) {
  map.setCenter([city.lng as number, city.lat as number]);
}

function addUserBearingToMap(
  map: mapboxgl.Map,
  city: Record<string, unknown>,
  initialBearing: number,
) {
  const centerPointFromPosition = point([
    city.lng as number,
    city.lat as number,
  ]);
  const bearingLineTopPoint = destination(
    centerPointFromPosition,
    50,
    initialBearing,
    { units: "kilometers" },
  );
  const bearingLineBottomPoint = destination(
    centerPointFromPosition,
    -50,
    initialBearing,
    { units: "kilometers" },
  );
  map.addSource("userBearing", {
    type: "geojson",
    data: {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          bearingLineTopPoint.geometry.coordinates,
          [city.lng as number, city.lat as number],
          bearingLineBottomPoint.geometry.coordinates,
        ],
      },
    },
  });
  map.addLayer({
    id: "userBearing",
    type: "line",
    source: "userBearing",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#de90d0",
      "line-width": 8,
      "line-opacity": 0.75,
    },
  });
}

interface IGameScreen {
  cities: Record<string, unknown>[];
  cumulativeScore: number;
  setCumulativeScore: (cumulativeScore: number) => void;
  setHasComplete: () => void;
  addScore: (city: Record<string, unknown>, points: number) => void;
}

export default function GameScreen({
  cities,
  cumulativeScore,
  setCumulativeScore,
  setHasComplete,
  addScore,
}: IGameScreen) {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [cityIndex, setCityIndex] = useState(0);
  const [initialBearing, setInitialBearing] = useState(
    Math.floor(Math.random() * 180) * (Math.round(Math.random()) * 2 - 1),
  );
  const [currentBearing, setCurrentBearing] = useState<number>(initialBearing);
  const [selectedBearing, setSelectedBearing] = useState<number>();
  const [hasGuessed, setHasGuessed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current!,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [
        cities[cityIndex].lng as number,
        cities[cityIndex].lat as number,
      ],
      zoom: 9,
      bearing: initialBearing,
      dragPan: false,
      boxZoom: false,
      touchZoomRotate: false,
      scrollZoom: false,
      doubleClickZoom: false,
      dragRotate: false,
      pitchWithRotate: false,
      touchPitch: false,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!map.current) return;
    map.current.on("load", (event) =>
      onMapLoad(event, cities[cityIndex], initialBearing),
    );
    map.current.on("rotate", (event) => {
      setCurrentBearing(event.target.getBearing());
      onMapRotate(event, cities[cityIndex]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cityIndex]);

  const submitGuess = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!map.current) return;
    setHasGuessed(true);
    const currentBearing = map.current.getBearing();
    addScore(cities[cityIndex], Math.abs(currentBearing));
    setCurrentBearing(currentBearing);
    setSelectedBearing(currentBearing);
    setCumulativeScore(cumulativeScore + Math.abs(currentBearing));
    const centerPointFromPosition = point([
      cities[cityIndex].lng as number,
      cities[cityIndex].lat as number,
    ]);
    const bearingLineTopPoint = destination(
      centerPointFromPosition,
      50,
      currentBearing,
      { units: "kilometers" },
    );
    const bearingLineBottomPoint = destination(
      centerPointFromPosition,
      -50,
      currentBearing,
      { units: "kilometers" },
    );
    map.current.addSource("selectedBearing", {
      type: "geojson",
      data: {
        type: "Feature",
        properties: {},
        geometry: {
          type: "LineString",
          coordinates: [
            bearingLineTopPoint.geometry.coordinates,
            [cities[cityIndex].lng as number, cities[cityIndex].lat as number],
            bearingLineBottomPoint.geometry.coordinates,
          ],
        },
      },
    });
    map.current.addLayer({
      id: "selectedBearing",
      type: "line",
      source: "selectedBearing",
      layout: {
        "line-join": "round",
        "line-cap": "round",
      },
      paint: {
        "line-color": "#a4a68d",
        "line-width": 8,
        "line-opacity": 0.75,
      },
    });
    map.current.easeTo({ bearing: 0 });
  };

  const nextCity = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!map.current) return;
    setIsLoading(true);
    removeSelectedBearingFromMap(map.current);
    removeUserBearingFromMap(map.current);

    const newCityIndex = cityIndex + 1;
    const newInitialBearing =
      Math.floor(Math.random() * 180) * (Math.round(Math.random()) * 2 - 1);
    setCurrentBearing(newInitialBearing);
    setMapCenter(map.current, cities[newCityIndex]);
    map.current.rotateTo(newInitialBearing);
    addUserBearingToMap(map.current, cities[newCityIndex], newInitialBearing);
    setCityIndex(newCityIndex);
    setInitialBearing(newInitialBearing);

    setHasGuessed(false);
    map.current.once("rotateend", () => setIsLoading(false));
  };

  const endGame = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasComplete();
  };

  return (
    <section>
      <div
        id="mapContainer"
        ref={mapContainer}
        style={isLoading ? { visibility: "hidden" } : {}}
      />
      <form
        id="guessForm"
        onSubmit={
          !hasGuessed
            ? submitGuess
            : cityIndex === cities.length - 1
            ? endGame
            : nextCity
        }
        style={isLoading ? { visibility: "hidden" } : {}}
      >
        <input
          id="guessFormInput"
          type="range"
          min={initialBearing - 179}
          max={initialBearing + 180}
          value={
            currentBearing > initialBearing + 180
              ? currentBearing - 360
              : currentBearing < initialBearing - 179
              ? currentBearing + 360
              : currentBearing
          }
          onChange={(event) =>
            map.current?.setBearing(Number(event.target.value))
          }
          disabled={hasGuessed}
        />
        <input
          type="submit"
          id="guessFormButton"
          value={
            !hasGuessed
              ? "Guess"
              : cityIndex === cities.length - 1
              ? "Finish"
              : "Next"
          }
        />
      </form>
      <div id="answerContainer">
        {hasGuessed && (
          <>
            <p>
              Selected bearing:{" "}
              {selectedBearing
                ? selectedBearing < 0
                  ? selectedBearing + 360
                  : selectedBearing
                : 0}
            </p>
            <p>Points: {cumulativeScore}</p>
          </>
        )}
      </div>
    </section>
  );
}
