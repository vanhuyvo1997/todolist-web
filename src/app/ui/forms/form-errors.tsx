export default function FormErrors({ message }: { message: string | undefined }) {
    return message && <div aria-atomic="true" aria-live="polite">
        {<p className="mt-2 text-sm text-red-500"> {message}</p>}
    </div>
}