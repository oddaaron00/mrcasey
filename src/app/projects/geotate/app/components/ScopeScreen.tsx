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
        <label htmlFor="cityCount">
          <input
            type="number"
            name="cityCount"
            id="cityCount"
            min={1}
            value={cityCount}
            onChange={(event) => setCityCount(Number(event.target.value))}
          />
        </label>
        <button
          type="submit"
          disabled={
            scope === undefined ||
            cityCount > (capitalCountMap.get(scope) ?? 0) ||
            isNextDisabled
          }
        >
          {isNextDisabled ? "Loading data" : "Go"}
        </button>
      </form>
    </section>
  );
}
