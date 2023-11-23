import mongoose from "mongoose";

const grupoSchema = new mongoose.Schema({
      estado: {
        type: String,
        required: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },
      tipo: {
        type: String,
        required: true,
      },
});

export default mongoose.model("Grupo", grupoSchema);