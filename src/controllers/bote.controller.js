import Bote from "../models/bote.model.js";

export const getBotes = async (req, res) => {
    const botes = await Bote.find();
    res.json(botes);
};

export const createBote = async (req, res) => {
  const { tipo, capacidad, estado} = req.body;

  const newBote = new Bote({
    tipo,
    capacidad,
    estado
  });

  const savedBote = await newBote.save();
  res.json(savedBote);
};

export const getBote = async (req, res) => {
  const bote = await Bote.findById(req.params.id).populate('_id'); 

  if (!bote) return res.status(404).json({ message: "Bote no encontrado" });

  res.json({
    _id: bote._id,
    tipo: bote.tipo,
    capacidad: bote.capacidad,
    estado: bote.estado,
  });
};

export const updateBote = async (req, res) => {
  const bote = await Bote.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!bote) return res.status(404).json({ message: "Bote no encontrado" });

  res.json(bote);
};