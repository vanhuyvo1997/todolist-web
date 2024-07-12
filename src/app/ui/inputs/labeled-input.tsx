import TextInput from "./text-input";

export default function LabeledInput({ id, type, labelContent, placeholder, name, required, errors }: { id: string, type: "password" | "text" | "email", labelContent: string, placeholder?: string, name: string, required?: boolean, errors?: string[] }) {
  return (
    <div className="w-full my-1">
      <label className="block px-1 mb-1" htmlFor={id}>{labelContent}:</label>
      <TextInput required={required} name={name} id={id} type={type} placeholder={placeholder} errors={errors} />
    </div>);
}