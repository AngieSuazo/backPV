import Grupo from "../models/grupo.model.js";

export const getGrupos = async (req, res) => {
    const grupos = await Grupo.find();
    res.json(grupos);
};

export const createGrupo = async (req, res) => {
  const { estado, cantidad, tipo} = req.body;

  const newGrupo = new Grupo({
    estado,
    cantidad,
    tipo
  });

  const savedGrupo = await newGrupo.save();
  res.json(savedGrupo);
};

export const getGrupo = async (req, res) => {
  const grupo = await Grupo.findById(req.params.id).populate('_id');; 

  if (!grupo) return res.status(404).json({ message: "Grupo no encontrado" });

  res.json({
    _id: grupo._id,
    estado: grupo.estado,
    cantidad: grupo.cantidad,
    tipo: grupo.tipo,
  });
};

export const updateGrupo = async (req, res) => {
  const grupo = await Grupo.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!grupo) return res.status(404).json({ message: "Grupo no encontrado" });

  res.json(grupo);
};