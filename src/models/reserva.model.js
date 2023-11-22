import mongoose from "mongoose";

const reservaSchema = new mongoose.Schema({
      nombrec: {
        type: String,
        required: true,
      },
      telefono: {
        type: Number,
        required: true,
        unique: true,
        trim: true,
      },
      cantidad: {
        type: Number,
        required: true,
      },

});

export default mongoose.model("Reserva", reservaSchema);
