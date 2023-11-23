import Reserva from "../models/reserva.model.js";

export const getReservas = async (req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
};

export const createReserva = async (req, res) => {
  const { nombrec, telefono, cantidad} = req.body;

  const newReserva = new Reserva({
    nombrec,
    telefono,
    cantidad
  });

  const savedReserva = await newReserva.save();
  res.json(savedReserva);
};

export const getReserva = async (req, res) => {
  const reserva = await Reserva.findById(req.params.id).populate('_id');; 

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });

  res.json({
    _id: reserva._id,
    nombrec: reserva.nombrec,
    telefono: reserva.telefono,
    cantidad: reserva.cantidad,
  });
};

export const deleteReserva = async (req, res) => {
  const reserva = await Reserva.findByIdAndDelete(req.params.id);

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrado" });

  res.json(reserva);
};

export const updateReserva = async (req, res) => {
  const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });

  res.json(reserva);
};