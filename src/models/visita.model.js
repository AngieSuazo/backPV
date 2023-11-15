import mongoose from "mongoose";
import { number } from "zod";

const visitaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  pago: {
    type: Boolean,
    required: true,
  },
  estado: {
    type: String,
    required: true,
  },
  user_dni: {
    type: number,
    required: true,
  },
  guia_tipo: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Visita", visitaSchema);