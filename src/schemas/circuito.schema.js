import { z } from "zod";

export const circuitoSchema = z.object({
  nombre: z
    .string({
      required_error: "El nombre es requerido",
    })
    .max(30, {
      message: "El nombre de circuito debe tener máximo 30 caracteres",
    }),

  descripcion: z
    .string({
      required_error: "La descripcion es requerido",
    })
    .max(500, {
      message: "La descripción no debe tener mas de 500 caracteres",
    }),
});
