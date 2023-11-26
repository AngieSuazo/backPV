import mongoose from "mongoose";


const ReservaSchema = new mongoose.Schema(
  {
    CReserva: { // codigo de Reserva
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    TReserva: { // Titular de Reserva
      type: String,
      required: true,
      trim: true,
    },
    Gtitular: {  //grupo del titular
      type: String,
      required: true,
    },
    turnoR: { // turno de la Reserva
      type: String,
    },
    fechaR: { //fecha de la Reserva
      type: Date,
      required: true,
    },
    horaR: { //hora de la Reserva
      type: String,
      required: true,
    },
    miListaDesplegableE: { //estado de Reserva
      type: String,
      required: true,
    },
    miListaDesplegableT: {//tipo de circuito
      type: String,
      required: true,
    },
    miListaDesplegableG: {//guia de circuito
      type: String,
      required: true,
     
    },
    comentarios: {
      type: String,
      required: false,
    },
   
    isActive: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Reserva", ReservaSchema);
