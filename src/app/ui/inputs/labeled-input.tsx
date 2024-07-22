import TextInput from "./text-input";

type LabeledInputProps = { id: string, type: "password" | "text" | "email", labelContent: string, placeholder?: string, name: string, required?: boolean, errors?: string[], value: string, onChange: (e: string) => void }

export default function LabeledInput({ id, type, labelContent, placeholder, name, required, errors, value, onChange }: Readonly<LabeledInputProps>) {
  return (
    <div className="w-full my-1">
      <label className="block px-1 mb-1" htmlFor={id}>{labelContent}:</label>
      <TextInput value={value} onChange={onChange} required={required} name={name} id={id} type={type} placeholder={placeholder} errors={errors} />
    </div>);
}