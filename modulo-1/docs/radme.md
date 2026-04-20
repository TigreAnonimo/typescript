# Módulo 1 — Utilidades Matemáticas en TypeScript

Este módulo contiene tres funciones matemáticas implementadas en TypeScript con tipado estricto:

- `calcularMedia`
- `calcularMediana`
- `filtrarAtipicos`

Todas se encuentran en el archivo `src/math-utils.ts`.

---

## 📌 1. calcularMedia(valores: number[]): number | null

Calcula la media aritmética de un conjunto de números.

### Ejemplo:
```ts
calcularMedia([10, 20, 30]); // 20
calcularMedia([]); // null
