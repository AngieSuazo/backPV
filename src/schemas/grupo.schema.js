import { z } from "zod";

export const createSchema = z.object({
    estado: z
    .string({
      required_error: "Estado del grupo es requerido",
    }),

   cantidad: z
    .string({
      required_error: "La cantidad del grupo es requerido",
    }),

    tipo: z
    .string({
      required_error: "El del grupo requerido",
    }),
});

