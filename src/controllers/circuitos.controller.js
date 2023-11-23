import Circuito from "../models/circuito.model.js";

export const getCircuitos = async (req, res) => {
  const Circuitos = await Circuito.find();
  res.json(Circuitos);
};

export const createCircuito = async (req, res) => {
  const { nombre, descripcion } = req.body;

  const newCircuito = new Circuito({
    nombre,
    descripcion,
    activo: true,
  });

  const savedCircuito = await newCircuito.save();
  res.json(savedCircuito);
};

export const getCircuito = async (req, res) => {
  const circuito = await Circuito.findById(req.params.id).populate('_id'); //podria incluir tambien todos los datos de usuario con el .populate

  if (!circuito) return res.status(404).json({ message: "Circuito no encontrado" });

  return res.json(circuito);
};

export const deleteCircuito = async (req, res) => {
  const circuito = await Circuito.findByIdAndDelete(req.params.id);

  if (!circuito) return res.status(404).json({ message: "Circuito no encontrado" });

  res.json(circuito);
};

export const updateCircuito = async (req, res) => {
  const circuito = await Circuito.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!circuito) return res.status(404).json({ message: "Circuito no encontrado" });

  res.json(circuito);
};
