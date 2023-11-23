import { z } from "zod";

export const createSchema = z.object({
  visitantes: z
  .union([
    z.string({
        required_error: "Los datos de los visitantes son requeridos",
      }),
      
    z.instanceOf(File) // Esto asume que estás trabajando en un entorno de navegador
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

