interface IScopeItem {
  label: string;
  value: string;
  setScope: (scope: string) => void;
}

export default function ScopeItem({ label, value, setScope }: IScopeItem) {
  return (
    <label htmlFor={value} key={value}>
      <input
        type="radio"
        name="scope"
        id={value}
        value={value}
        onClick={() => setScope(value)}
      />
      {label}
    </label>
  );
}
