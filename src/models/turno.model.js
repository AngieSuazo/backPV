import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  revertir: {
    type: Boolean,
    required: true,
  },
  excludedDates: {
    type: [String],
    required: true,
  },
  enUso: {
    type: Boolean,
    required: true,
  },
  activo: {
    type: Boolean,
    required: true,
  },
  horaDesde: {
    type: String,
    required: true,
  },
  horaHasta: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Turno", turnoSchema);
