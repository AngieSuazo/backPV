import { z } from "zod";

export const createSchema = z.object({
  id_caja: z
    .number({
      required_error: "El id_caja es requerido",
    }),

  id_reserva: z
    .number({
      required_error: "El id_reserva es requerido",
    }),

  pago: z
    .number({
      required_error: "El pago es requerido",
    }),

  celular: z
    .string({
      required_error: "El número de celular es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
      message: "Revise el campo de Celular (Solo números)",
    })
    .length(9, {
      message: "El número de celular debe tener 9 dígitos",
    }),

  fecha: z
    .string({
      required_error: "La fecha es requerida",
    }),

  user_dni: z
    .string({
      required_error: "El DNI es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
      message: "Revise el campo de DNI (Solo números)",
    })
    .length(8, {
      message: "El DNI debe tener 8 dígitos",
    }),
});
