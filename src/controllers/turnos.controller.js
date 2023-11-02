import Turno from "../models/turno.model.js";

export const getTurnos = async (req, res) => {
    const turnos = await Turno.find();
    res.json(turnos);
};

export const createTurno = async (req, res) => {
  const { nombre, activo, horaDesde, horaHasta } = req.body;

  const newTurno = new Turno({
    nombre,
    activo: true,
    horaDesde,
    horaHasta
  });

  const savedTurno = await newTurno.save();
  res.json(savedTurno);
};

export const getTurno = async (req, res) => {
  const turno = await Turno.findById(req.params.id).populate('_id');; //podria incluir tambien todos los datos de usuario con el .populate

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json({
    _id: turno._id,
    nombre: turno.nombre,
    horaDesde: turno.horaDesde,
    horaHasta: turno.horaHasta,
    activo: turno.activo,
  });
};

export const deleteTurno = async (req, res) => {
  const turno = await Turno.findByIdAndDelete(req.params.id);

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};

export const updateTurno = async (req, res) => {
  const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};