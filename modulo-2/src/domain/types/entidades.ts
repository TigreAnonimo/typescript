export interface Estudiante {
    readonly id: string;
    nombreCompleto: string;
    email: string;
    fechaNacimiento: Date;
  }
  
  export interface Asignatura {
    readonly id: string;
    nombre: string;
    creditos: number;
  }
  