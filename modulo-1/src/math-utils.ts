// Calcula la media de un array numérico
export function calcularMedia(valores: number[]): number | null {
    if (valores.length === 0) return null;
    const suma = valores.reduce((acc, n) => acc + n, 0);
    return suma / valores.length;
  }
  
  // Calcula la mediana de un array numérico
  export function calcularMediana(valores: number[]): number | null {
    if (valores.length === 0) return null;
  
    const ordenados = [...valores].sort((a, b) => a - b);
    const mitad = Math.floor(ordenados.length / 2);
  
    if (ordenados.length % 2 === 0) {
      return (ordenados[mitad - 1] + ordenados[mitad]) / 2;
    } else {
      return ordenados[mitad];
    }
  }
  
  // Filtra valores atípicos según un límite
  export function filtrarAtipicos(valores: number[], limite: number): number[] {
    return valores.filter((v) => Math.abs(v) <= limite);
  }
  