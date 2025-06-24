export default function Input({
  name,
  value,
  type = "text",
  placeholder = "Type here...",
  onChange,
}: {
  name: string;
  value: string;
  type?: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="border border-border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary"
        placeholder={placeholder}
      />
    </div>
  );
}
