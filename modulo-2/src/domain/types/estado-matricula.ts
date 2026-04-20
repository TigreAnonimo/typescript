export interface MatriculaActiva {
    tipo: "ACTIVA";
    asignaturas: string[]; // IDs de asignaturas
  }
  
  export interface MatriculaSuspendida {
    tipo: "SUSPENDIDA";
    motivo: string;
  }
  
  export interface MatriculaFinalizada {
    tipo: "FINALIZADA";
    notaMedia: number;
  }
  
  export type EstadoMatricula =
    | MatriculaActiva
    | MatriculaSuspendida
    | MatriculaFinalizada;
  