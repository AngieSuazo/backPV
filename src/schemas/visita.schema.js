import { z } from "zod";

export const createSchema = z.object({
  id_Guia: z
    .string({
      required_error: "Un guia es requerido para la visita",
    })
});

