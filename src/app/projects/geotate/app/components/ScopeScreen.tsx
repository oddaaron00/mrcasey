import { FormEvent, useState } from "react";
import { capitalCountMap, scopeOptions } from "../constants";
import ScopeGroup from "./ScopeGroup";

interface IScopeScreen {
  scope: string | undefined;
  setScope: (scope: string) => void;
  submitScope: (scope: string, cityCount: number) => void;
  isNextDisabled: boolean;
}

export default function ScopeScreen({
  scope,
  setScope,
  submitScope,
  isNextDisabled,
}: IScopeScreen) {
  const [cityCount, setCityCount] = useState(5);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitScope(scope!, cityCount);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <ScopeGroup scopes={scopeOptions} setScope={setScope} />
        <div className="border-black-75 rounded-lg border-2">
          <input
            type="number"
            name="cityCount"
            id="cityCount"
            min={1}
            value={cityCount}
            onChange={(event) => setCityCount(Number(event.target.value))}
            className="mx-1 bg-white"
          />
          <label htmlFor="cityCount" aria-label="City count" />
          <button
            type="submit"
            disabled={
              scope === undefined ||
              cityCount > (capitalCountMap.get(scope) ?? 0) ||
              isNextDisabled
            }
            className="cursor-pointer px-2 py-1"
          >
            {isNextDisabled ? "Loading data" : "Go"}
          </button>
        </div>
      </form>
    </section>
  );
}
