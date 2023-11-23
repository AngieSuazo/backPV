import mongoose from "mongoose";

const circuitoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  activo: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Circuito", circuitoSchema);