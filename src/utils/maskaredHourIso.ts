export function maskaredHourIso (hourIso: string): string {
    // Formato esperado: 2025-07-21T19:04:15.000+00:00 returna 19:04
    const date = new Date(hourIso);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
    
}