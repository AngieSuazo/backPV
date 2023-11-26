import Reserva from "../models/reserva.model.js";

import { createAccessToken } from "../libs/jwt.js";

export const createReserva = async (req, res) => {
  const {
    CReserva,
    TReserva,
    Gtitular,
    turnoR,
    fechaR,
    horaR,
    miListaDesplegableE,
    miListaDesplegableT,
    miListaDesplegableG,
    comentarios,
    isActive,
    
  } = req.body;

  try {
   

    const newReserva = new Reserva({
      CReserva,
      TReserva,
      Gtitular,
      turnoR,
      fechaR,
      horaR,
      miListaDesplegableE,
      miListaDesplegableT,
      miListaDesplegableG,
      comentarios,
      isActive: true,
    });

    const ReservaFound = await Reserva.findOne({ CReserva });

    if (ReservaFound)
      return res.status(400).json({ message: "Reserva duplicada" });

    const ReservaSaved = await newReserva.save();
    const token = await createAccessToken({ id: ReservaSaved._id });

    res.cookie("token", token);
    res.json({
      id: ReservaGuardada._id,
      CReserva: ReservaGuardada.CReserva,
      TReserva: ReservaGuardada.TReserva,
      Gtitular: ReservaGuardada.Gtitular,
      turnoR: ReservaGuardada.turnoR,
      fechaR: ReservaGuardada.fechaR,
      horaR: ReservaGuardada.horaR,
      miListaDesplegableE: ReservaGuardada.miListaDesplegableE,
      miListaDesplegableT: ReservaGuardada.miListaDesplegableT,
      miListaDesplegableG: ReservaGuardada.miListaDesplegableG,
      comentarios: ReservaGuardada.comentarios,
      isActive: ReservaGuardada.isActive,
      createdAt: ReservaGuardada.createdAt,
      updatedAt: ReservaGuardada.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};



export const getReservas = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const Reservas = await Reserva.find({ _id: { $ne: "651a425a3f2658512f3fad59" } });
  const resultReserva = Reservas.slice(startIndex, endIndex);
  res.json(resultReserva);
};

export const getReserva = async (req, res) => {
  const Reserva = await Reserva.findById(req.params.id).populate('_id'); 

  if (!Reserva) return res.status(404).json({ message: "Reserva no encontrada" });

  res.json({
    id: Reserva._id,
      CReserva: Reserva.CReserva,
      TReserva: Reserva.TReserva,
      Gtitular: Reserva.Gtitular,
      turnoR: Reserva.turnoR,
      fechaR: Reserva.fechaR,
      horaR: Reserva.horaR,
      miListaDesplegableE: Reserva.miListaDesplegableE,
      miListaDesplegableT: Reserva.miListaDesplegableT,
      miListaDesplegableG: Reserva.miListaDesplegableG,
      comentarios: Reserva.comentarios,
      isActive: Reserva.isActive,
      createdAt: Reserva.createdAt,
      updatedAt: Reserva.updatedAt,
   
  });
};

export const updateReserva = async (req, res) => {
  const Reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!Reserva) return res.status(404).json({ message: "Reserva no encontrado" });

  res.json(Reserva);
};

export const deleteReserva = async (req, res) => {
  const Reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!Reserva) return res.status(404).json({ message: "Reserva no encontrado" });

  res.json(Reserva);
};