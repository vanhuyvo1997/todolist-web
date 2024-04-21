export function capitalize(s: string) {
    const words = s.split(" ");
    const capitalizedWords = words.map(s => s.charAt(0).toUpperCase() + s.slice(1));
    return capitalizedWords.join(" ");
}

export const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const onlyLetterRegex = /^[A-Za-z ]+$/;