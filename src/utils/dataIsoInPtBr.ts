export function dataIsoInPtBr(dateIso: string): string {
   // transorme a hora iso 2025-07-21T19:04:15.000+00:00 em iso com fusohorario -3
    const date = new Date(dateIso);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Sao_Paulo'
    };
    const formattedDate = new Intl.DateTimeFormat('pt-BR', options).format(date);
    // formattedDate example: "22/07/2025 14:52"
    const [datePart, timePart] = formattedDate.replace(',', '').split(' ');
    const [day, month, year] = datePart.split('/');
    const [hour, minute] = timePart.split(':');
    return `${year}-${month}-${day}T${hour}:${minute}:00.000Z`;

}