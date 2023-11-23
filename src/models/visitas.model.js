import mongoose from "mongoose";

const visitaSchema = new mongoose.Schema({

  id_Circuito: {
    type: Number,
    required: true,
  },

  /*id_Reserva: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Reserva // Referencia al modelo de Reserva
  },

  fecha: {
    type: String, //Campo de tipo String para almacenar fecha
    required: true,
  },

  estado: {
    type: Boolean, 
    required: true,
  },*/

  id_Turno: {
    type: Number,
    required: true,
  },

//---------------------------------------------------------------------------------------------------------

  /*id_Cliente: {
    type: mongoose.Schema.Types.ObjectId, // Tipo de dato ObjectId de MongoDB
    ref: Cliente // Referencia al modelo de Cliente
  }

  user_dni: {
    type: Number, //Campo de Number para almacenar dni
    required: true,
  },*/

//---------------------------------------------------------------------------------------------------------

  id_Guia: {
    type: mongoose.Schema.Types.ObjectId, // Tipo de dato ObjectId de MongoDB
    ref: Guia // Referencia al modelo de Guia
  },

  guia_dni: {
    type: Number, //Campo de Number para almacenar dni
    required: true,
  },
});

export default mongoose.model("Visita", visitaSchema);
