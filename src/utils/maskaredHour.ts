export function maskaredHour(hour: string): string {
  // quero que o usuario digite no formato HH:MM e que ao digita o HH apareça automatico o :
  if (hour.length > 2 && hour[2] === ':') {
        return `${hour.slice(0, 2)}:${hour.slice(3, 5)}`;
    }  
  if (hour.length === 2 && !hour.includes(':')) {
        return `${hour}:`;
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length === 5 && hour[2] !== ':') {
        return `${hour.slice(0, 2)}:${hour.slice(3)}`;
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length === 3 && hour[2] !== ':') {
        return `${hour.slice(0, 2)}:${hour.slice(2)}`;
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length === 4 && hour[2] !== ':') {
        return `${hour.slice(0, 2)}:${hour.slice(2)}`;
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length === 1 && hour[0] !== ':') {
        return `${hour}:`;
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length === 0) {
        return '';
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    if (hour.length > 5) {
        return hour.slice(0, 5);
    }
    // quero que o usuario digite no formato HH:MM e que ao digita o MM apareça automatico o :
    // restrinja a 2 caracteres para horas e 2 para minutos
    
    return hour;
}