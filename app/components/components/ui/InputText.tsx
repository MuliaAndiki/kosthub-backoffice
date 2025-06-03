import { InputTextType } from "@/app/types/ui";
const InputText: React.FC<InputTextType> = ({
  label,
  onChange,
  value,
  ...ress
}) => {
  return (
    <main className="mb-4">
      {label && (
        <label
          htmlFor={ress.id || ress.name}
          className="font-bold text-[1.2rem] mb-2"
        >
          {label}
        </label>
      )}
      <input
        type="text"
        className="border-1 rounded-lg w-full p-1"
        value={value}
        onChange={onChange}
        {...ress}
      />
    </main>
  );
};

export default InputText;
