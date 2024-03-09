import clsx from "clsx";

export default function Button({ size, submit, content, className }: { size: "S" | "M" | "L", submit: boolean, content: string, className: string }) {
  return <button className={
    clsx(
      "rounded-md shadow-md my-1 text-white hover:bg-black hover:text-white",
      {
        "px-3 py-2 text-lg": size === "L",
        [className] : !!className
      })
  } type={submit ? "submit" : "button"}>{content}</button>
}