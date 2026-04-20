import { EstadoMatricula } from "./estado-matricula";

export function generarReporte(estado: EstadoMatricula): string {
  switch (estado.tipo) {
    case "ACTIVA":
      return `Matrícula activa con ${estado.asignaturas.length} asignaturas.`;

    case "SUSPENDIDA":
      return `Matrícula suspendida. Motivo: ${estado.motivo}.`;

    case "FINALIZADA":
      return `Matrícula finalizada con nota media ${estado.notaMedia}.`;

    default:
      const _exhaustivo: never = estado;
      throw new Error(`Estado no manejado: ${_exhaustivo}`);
  }
}
