import { z } from "zod";

export const createSchema = z.object({
  visitantes: z
  .union([
    z.string({
        required_error: "Los datos de los visitantes son requeridos",
      })      
    .or(z.string().url({
        message: "Debe ser una URL válida que apunte al archivo."
      })),
  ]),
    
  turno: z
    .string({
      required_error: "Se necesita saber si la visita se realizó a la hora indicada o si existe algun evento",
    }),

    bote: z
    .string({
      required_error: "Asiganar un bote a la visita es requerido",
    }),

});

