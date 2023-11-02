import mongoose from "mongoose";

const turnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
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
