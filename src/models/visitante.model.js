import mongoose from "mongoose";

const VisitanteSchema = new mongoose.Schema({
    visitante_dni: {
            type: Number,
            required: true,
    },
    nombre: {
        type: String,
        required: true,
    },
    apellidoP: {
        type: String,
        required: true,
    },
    celular:{
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    fecha_nacimiento: {
        type: String,
        required: true,
    }
    },
    {
      timestamps: true,
    }
  );
  
  export default mongoose.model("Visitante", VisitanteSchema);