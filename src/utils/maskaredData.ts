export function maskaredData(data: string): string {
    // pegue esse padrao 2025-07-21T19:04:15.000+00:00 que vai vir do backend e retorne 21/07/2025 
    const date = new Date(data);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Meses começam do 0
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;  
}