import Visita from "../models/visita.model.js";

export const getVisitas = async (req, res) => {
    const visitas = await Visita.find();
    res.json(turnos);
};

export const createVisita = async (req, res) => {
  const { fecha, pago, estado, user_dni, guia_tipo } = req.body;

  const newVisita = new Visita({
    fecha,
    pago: true,
    estado,
    user_dni,
    guia_tipo
  });

  const savedVisita = await newVisita.save();
  res.json(savedVisita);
};

export const getVisita = async (req, res) => {
  const visita = await Visita.findById(req.params.id).populate('_id');; 

  if (!visita) return res.status(404).json({ message: "Visita no encontrado" });

  res.json({
    _id: visita._id,
    id_circuito: visita.id_circuito,
    fecha: visita.fecha,
    pago: visita.pago,
    id_turno: visita.id_turno,
    user_dni: visita.user_dni,
    guia_tipo: visita.guia_tipo,
  });
};

// export const deleteTurno = async (req, res) => {
//   const turno = await Turno.findByIdAndDelete(req.params.id);

//   if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

//   res.json(turno);
// };

// export const updateTurno = async (req, res) => {
//   const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, {
//     new: true
//   });

//   if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

//   res.json(turno);
// };