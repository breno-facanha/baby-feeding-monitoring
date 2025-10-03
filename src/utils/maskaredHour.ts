export function maskaredHour(hour: string): string {
    const timePart = hour.split('T')[1]; 
    const timeOnly = timePart.split('.')[0]; 
    const [hours, minutes] = timeOnly.split(':');
    
    return `${hours}:${minutes}`;

}