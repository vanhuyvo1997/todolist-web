import TextInput from "./text-input";

export default function LabeledInput({ id, type, labelContent, placeholder, name }: { id: string, type: "password" | "text" | "email", labelContent: string, placeholder?: string, name: string }) {
  return (
    <div className="w-full my-1">
      <label className="block px-1 mb-1" htmlFor={id}>{labelContent}:</label>
      <TextInput name={name} id={id} type={type} placeholder= {placeholder}/>
    </div>);
}