import Evento from "../models/eventos.model.js";

export const createEvento = async (req, res) => {
  const { visitantes, turno, bote } = req.body;

  const newEvento = new Evento({
    visitantes,
    turno,
    bote
  });

  const savedEvento = await newEvento.save();
  res.json(savedEvento);
};

export const getEvento = async (req, res) => {
  const evento = await Evento.findById(req.params.id).populate('_id');; //podria incluir tambien todos los datos de usuario con el .populate

  if (!evento) return res.status(404).json({ message: "Evento no encontrado" });

  res.json({
    _id: evento._id,
    visitantes: evento.visitantes,
    turno: evento.turno,
    bote: evento.bote
  });
};
