import Caja from "../models/caja.model.js";

export const getCaja = async (req, res) => {
    const caja = await Caja.find();
    res.json(caja);
};

export const createCaja = async (req, res) => {
  const { id_caja, id_reserva, pago, celular, fecha, user_dni } = req.body;

  const newCaja = new Caja({
    id_caja,
    id_reserva,
    pago,
    celular,
    fecha,
    user_dni
  });

  const savedCaja = await newCaja.save();
  res.json(savedCaja);
};

export const getCajas = async (req, res) => {
  const caja = await Caja.findById(req.params.id).populate('_id');; //podria incluir tambien todos los datos de usuario con el .populate

  if (!caja) return res.status(404).json({ message: "Caja no encontrada" });

  res.json({
    id_caja: caja.id_caja,
    id_reserva: caja.id_reserva,
    pago: caja.pago,
    celular: caja.celular,
    fecha: caja.fecha,
    user_dni: caja.dni_user
  });
};

export const deleteCajas = async (req, res) => {
  const caja = await Caja.findByIdAndDelete(req.params.id);

  if (!caja) return res.status(404).json({ message: "Caja no encontrada" });

  res.json(caja);
};

export const updateCaja = async (req, res) => {
  const caja = await Caja.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!caja) return res.status(404).json({ message: "Caja no encontrada" });

  res.json(caja);
};