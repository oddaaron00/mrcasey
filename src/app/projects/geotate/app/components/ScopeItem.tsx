interface IScopeItem {
  label: string;
  value: string;
  setScope: (scope: string) => void;
}

export default function ScopeItem({ label, value, setScope }: IScopeItem) {
  return (
    <>
      <input
        type="radio"
        name="scope"
        id={value}
        value={value}
        onClick={() => setScope(value)}
        className="peer appearance-none"
      />
      <label
        htmlFor={value}
        key={value}
        className="peer-checked:bg-black-75 hover:bg-black-90 rounded-lg px-2 py-1"
      >
        {label}
      </label>
    </>
  );
}
