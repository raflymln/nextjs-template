export const ucWords = (str: string) => {
    return str.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase());
};
