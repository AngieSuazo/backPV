import mongoose from "mongoose";

const eventoSchema = new mongoose.Schema({
    visitantes: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    turno: {
      type: String,
      required: true,
    },
    bote: {
      type: String,
      required: true,
    }
  });

  export default mongoose.model("Evento", eventoSchema);
