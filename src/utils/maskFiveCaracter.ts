export function maskFiveCaracter(text: string): string {
    // retorne hora da seguinte forma: 00:00
    if (text.length === 2 && !text.includes(':')) {
        return `${text}:`;  
    }
    if (text.length === 5 && text[2] !== ':') {
        return `${text.slice(0, 2)}:${text.slice(3)}`;
    }
    if (text.length === 3 && text[2] !== ':') {
        return `${text.slice(0, 2)}:${text.slice(2)}`;
    }
    if (text.length === 4 && text[2] !== ':') {
        return `${text.slice(0, 2)}:${text.slice(2)}`;
    }
    if (text.length === 1 && text[0] !== ':') {
        return `${text}:`;
    }
    if (text.length === 0) {
        return '';
    }
    if (text.length > 5) {
        return text.slice(0, 5);
    }
    // restrinja a 2 caracteres para horas e 2 para minutos
    return text;
}