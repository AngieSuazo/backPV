import mongoose from "mongoose";

const boteSchema = new mongoose.Schema({
      tipo: {
        type: String,
        required: true,
      },
      capacidad: {
        type: Number,
        required: true,
      },
      estado: {
        type: String,
        required: true,
      },

});

export default mongoose.model("Bote", boteSchema);