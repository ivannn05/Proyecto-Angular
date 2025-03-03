import { Timestamp } from "rxjs";

export interface Usuario {
    id?: number;
    nombre: string;
    apellidos: string;
    correo: string;
    direccion: string;
    contrasena: string;
    fechaRegistro?: number;
    rol?: string;
    token?: string;
    fechaToken?: string;
}
