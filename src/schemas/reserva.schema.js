import { z } from "zod";

export const createSchema = z.object({
  nombrec: z
    .string({
      required_error: "El nombre completo es requerido",
    })
    .max(20, {
      message: "El nomnbre debe tener máximo 25 caracteres",
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

    cantidad: z
    .string({
      required_error: "Un numero de cantidad es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
      message: "Revise el campo de Cantidad (Solo números)",
    })
});

