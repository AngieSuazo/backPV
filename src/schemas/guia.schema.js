import { z } from "zod";

export const createGuiaSchema = z.object({
    nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .max(20, {
      message: "El nomnbre de turno debe tener máximo 20 caracteres",
    }),

    apellido: z
    .string({
        required_error: "El Apellido es requerido",
      }).min(1, {
        message: "El Apellido es requerido",
      })
      .regex(new RegExp(/^[a-zA-ZñÑ]+$/), {
        message: "Revise el campo de Apellido Materno (Solo letras)",
      }),

    imagen: z
    .string({
      required_error: "La foto es requerida",
    })
    .min(1, {
      message: "La foto es requerida",
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
      }),
    dni: z
    .string({
      required_error: "El DNI es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
      message: "Revise el campo de DNI (Solo números)",
    })
    .length(8, {
      message: "El DNI debe tener 8 dígitos",
    }),
    direccion: z
    .string({
      required_error: "La direccion es requerido",
    })
    .max(20, {
      message: "El nomnbre de turno debe tener máximo 20 caracteres",
    }),

    fecha_ingreso: z
    .string({
      required_error: "La fecha de ingreso es requerido",
    })
    .max(20, {
      message: "La fecha de ingreso es requerido",
    }),
    tipoGuia: z
    .string({
      required_error: "El tipo de guia es requerido",
    })
    .max(20, {
      message: "El guia debe de ser tradicional o especializado ",
    }),
    horario: z
    .string({
      required_error: "El horario es requerido",
    })
    .max(20, {
      message: "El horario es requerido",
    }),
    estado: z
    .string({
      required_error: "El estado es requerido",
    })
    .max(20, {
      message: "El estabo debe de ser activo o inactivo",
    }),
});
