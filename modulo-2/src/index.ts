import { generarReporte } from "./domain/types/generar-reporte";
import { obtenerRecurso } from "./services/api-client";

const estado = { tipo: "ACTIVA", asignaturas: ["MAT101", "HIS202"] } as const;

console.log(generarReporte(estado));

obtenerRecurso<{ mensaje: string }>("/test").then((r) =>
  console.log("Respuesta API:", r)
);
