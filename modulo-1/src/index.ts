import { calcularMedia, calcularMediana, filtrarAtipicos } from "./math-utils";

const datos = [10, 20, 30, 1000, 40, 50];

console.log("Media:", calcularMedia(datos));
console.log("Mediana:", calcularMediana(datos));
console.log("Filtrados (limite 100):", filtrarAtipicos(datos, 100));
