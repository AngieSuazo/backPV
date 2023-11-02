import { z } from "zod";

export const createSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .max(20, {
      message: "El nomnbre de turno debe tener máximo 20 caracteres",
    }),

  horaDesde: z
    .string({
      required_error: "La hora de inicio es requerida",
    })
    .min(1, {
      message: "La hora de inicio es requerida",
    })
    .regex(new RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]\s[APap][Mm]$/), {
      message: "Revise el campo de hora de inicio (Solo numeros)",
    }),

    horaHasta: z
    .string({
      required_error: "La hora de fin es requerida",
    })
    .min(1, {
      message: "La hora de fin es requerida",
    })
    .regex(new RegExp(/^(0[0-9]|1[0-2]):[0-5][0-9]\s[APap][Mm]$/), {
      message: "Revise el campo de hora de fin (Solo numeros)",
    }),
});

