import { Subtitle } from "@/app/components";
import ScopeItem from "./ScopeItem";

interface IScopeGroup {
  scopes: {
    label: string;
    value: string;
  }[];
  setScope: (scope: string) => void;
}

export default function ScopeGroup({ scopes, setScope }: IScopeGroup) {
  return (
    <div className="text-left">
      <Subtitle text="Capital Cities" extraClasses="py-1 px-2" />
      <ul>
        {scopes.map(({ label, value }) => (
          <li key={value} className="flex flex-col">
            <ScopeItem label={label} value={value} setScope={setScope} />
          </li>
        ))}
      </ul>
    </div>
  );
}
