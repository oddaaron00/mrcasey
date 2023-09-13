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
    <ul>
      {scopes.map(({ label, value }) => (
        <li key={value}>
          <ScopeItem label={label} value={value} setScope={setScope} />
        </li>
      ))}
    </ul>
  );
}
