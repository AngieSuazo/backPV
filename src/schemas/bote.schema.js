import { z } from "zod";

export const createSchema = z.object({
    tipo: z
    .string({
      required_error: "El tipo de bote es requerido",
    }),

   capacidad: z
    .string({
      required_error: "La cantidad es requerido",
    }),

    estado: z
    .string({
      required_error: "El estado es requerido",
    }),
});

