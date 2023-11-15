import Turno from "../models/turno.model.js";

let today = new Date();

// Obtiene el día, mes y año
let day = String(today.getDate()).padStart(2, "0");
let month = String(today.getMonth() + 1).padStart(2, "0"); // El mes es indexado desde 0
let year = today.getFullYear();

// Formatea la fecha como dd/mm/yyyy
let formattedDate = `${day}/${month}/${year}`;

const excluirTurnos = async (Turno) => {
  const filtro = await Turno.find({
    excludedDates: { $in: formattedDate },
    enUso: true,
  });

  const refresh = { $set: { enUso: false, revertir: true } };

  const result = await Turno.updateMany(
    { _id: { $in: filtro.map((turno) => turno._id) } },
    refresh
  );
  return result;
};

const revertirTurnos = async (Turno) => {
  const filtro = await Turno.find({
    excludedDates: { $nin: formattedDate },
    enUso: false,
    revertir: true,
  });

  const refresh = { $set: { enUso: true, revertir: false } };

  const result = await Turno.updateMany(
    { _id: { $in: filtro.map((turno) => turno._id) } },
    refresh
  );
  return result;
};

export const getTurnos = async (req, res) => {
  try {
    const excluir = await excluirTurnos(Turno);
    const revertir = await revertirTurnos(Turno);

    const turnos = await Turno.find();
    // res.json({
    //   //message: `${numTurnosActualizados} turnos actualizados`,
    //   desactivados: `${excluir.modifiedCount}`,
    //   revertidos: `${revertir.modifiedCount}`,
    //   explain: turnos,
    // });
    res.json(turnos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error en el servidor" });
  }
};

export const createTurno = async (req, res) => {
  const { nombre, activo, horaDesde, horaHasta } = req.body;

  const newTurno = new Turno({
    nombre,
    revertir: false,
    excludedDates: [],
    enUso: false,
    activo: true,
    horaDesde,
    horaHasta,
  });

  const savedTurno = await newTurno.save();
  res.json(savedTurno);
};

export const getTurno = async (req, res) => {
  await excluirTurnos(Turno);
  await revertirTurnos(Turno);

  const turno = await Turno.findById(req.params.id).populate("_id");

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json({
    _id: turno._id,
    nombre: turno.nombre,
    excludedDates: [],
    horaDesde: turno.horaDesde,
    horaHasta: turno.horaHasta,
    activo: turno.activo,
    enUso: turno.enUso,
  });
};

export const deleteTurno = async (req, res) => {
  const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};

export const updateTurno = async (req, res) => {
  const turno = await Turno.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};

//////

export const createExcluder = async (req, res) => {
  const newExcluder = req.body.excludedDates;

  const excluderFound = await Turno.findOne({
    _id: req.params.id,
    excludedDates: { $in: newExcluder },
  });

  if (excluderFound)
    return res
      .status(400)
      .json({ message: "Ya está programada la inhabilitacion para esa fecha" });

  const turno = await Turno.findByIdAndUpdate(
    req.params.id,
    { $push: { excludedDates: req.body.excludedDates } },
    { new: true }
  );

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};

export const deleteExcluder = async (req, res) => {
  const delExcluder = req.body.excludedDates;

  const excluderFound = await Turno.findOne({
    _id: req.params.id,
    excludedDates: { $in: delExcluder },
  });

  if (!excluderFound)
    return res
      .status(400)
      .json({ message: "No se encontró la fecha a eliminar" });

  const turno = await Turno.findByIdAndUpdate(
    req.params.id,
    { $pull: { excludedDates: req.body.excludedDates } },
    { new: true }
  );

  if (!turno) return res.status(404).json({ message: "Turno no encontrado" });

  res.json(turno);
};
