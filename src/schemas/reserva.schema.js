import { z } from "zod";



export const reservaSchema = z.object({
  Creserva: z
    .string({
      required_error: "El código de reserva es requerido",
    })
    .regex(new RegExp(/^[0-9]+$/), {
      message: "Revise el código de reserva (Solo números)",
    }),

  Treserva: z.string({
    required_error: "El titular de la reserva es requerido",
  }),

  Gtitular: z.string({
    required_error: "El grupo del titular es requerido",
  }),

  turnoR: z.string().optional(),

  fechaR: z.string({
    required_error: "La fecha de reserva es requerida",
  }),

  horaR: z.string({
    required_error: "La hora de reserva es requerida",
  }),

  miListaDesplegableE: z.string({
    required_error: "El estado de reserva es requerido",
  }),

  miListaDesplegableT: z.string({
    required_error: "El tipo de circuito es requerido",
  }),

  miListaDesplegableG: z.string({
    required_error: "El guía asignado es requerido",
  }),

  comentarios: z.string({
    required_error: "Los comentarios son requeridos",
  }),

  isActive: z.boolean({
    required_error: "El estado de activación es requerido",
  }),
});


