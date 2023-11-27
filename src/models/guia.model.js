import mongoose from "mongoose";

const GuiaSchema = new mongoose.Schema(
    {
        nombre: {
        type: String,
        required: true,
        trim: true,
        unique: true,
      },
      apellido: {
        type: String,
        required: true,
        trim: true,
      },
      imagen: {
        type: String,
      },
      fecha_nacimiento: {
        type: String,
      },
      dni: {
        type: Number,
        required: true,
      },
      direccion: {
        type: String,
        required: true,
      },
      fecha_ingreso: {
        type: String,
        required: true,
      },
      tipoGuia: {
        type: String,
        required: true,
      },
      horario: {
        type: String,
        required: true,
      },
      estado: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("Guia", GuiaSchema);