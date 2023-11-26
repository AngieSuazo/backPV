import { z } from "zod";

export const createSchema = z.object({
  fechaReserva: z
    .string({
      required_error: "La fecha de la reserva es requerida",
    }),

    estado: z
    .string({
      required_error: "El estado es requerido",
    }),

    total: z
    .number({
      required_error: "El total es requerido",
    })
});

