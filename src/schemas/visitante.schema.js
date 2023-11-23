import { z } from "zod";

export const createVisitanteSchema = z.object({
    visitante_dni: z
    .string({
        required_error: "El DNI es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
        message: "Revise el campo de DNI (Solo números)",
    })
    .length(8, {
        message: "El DNI debe tener 8 dígitos",
    }),

    nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .max(20, {
      message: "El nomnbre debe tener máximo 20 caracteres",
    }),

    apellidoP: z
    .string({
        required_error: "El Apellido es requerido",
    }).min(1, {
        message: "El Apellido es requerido",
    })
    .regex(new RegExp(/^[a-zA-ZñÑ]+$/), {
        message: "Revise el campo de Apellido Paterno (Solo letras)",
    }),
    
    celular: z
    .string({
        required_error: "Un numero celular es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
        message: "Revise el campo de Celular (Solo números)",
    })
    .length(9, {
        message: "El celular debe tener 9 dígitos",
    }),

    fecha_nacimiento: z
    .string({
        required_error: "La fecha de nacimiento es requerida",
    })
    .min(new Date("1900-01-01"), {
        message: "Como sigues vivo?",
    })
    .max(new Date("2005-01-01"), {
        message: "El registrado debe ser mayor de 18 años",
    })
});