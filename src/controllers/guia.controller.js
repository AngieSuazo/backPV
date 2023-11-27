import Guia from "../models/guia.model.js";

export const getGuias = async (req, res) => {
  try {
    const guias = await Guia.find();
    res.json(guias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const registrarGuia = async (req, res) => {
  try {
    const { nombre, apellido, imagen, fecha_nacimiento, dni, direccion, fecha_ingreso, tipoGuia, horario, estado } = req.body;

    const newGuia = new Guia({
      nombre,
      apellido,
      imagen,
      fecha_nacimiento,
      dni,
      direccion,
      fecha_ingreso,
      tipoGuia,
      horario,
      estado
    });

    const savedGuia = await newGuia.save();
    res.status(201).json(savedGuia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getGuia = async (req, res) => {
  try {
    const guia = await Guia.findById(req.params.id).populate('_id');

    if (!guia) return res.status(404).json({ message: "Guía no encontrado" });

    res.json({
      _id: guia._id,
      nombre: guia.nombre,
      apellido: guia.apellido,
      imagen: guia.imagen,
      fecha_nacimiento: guia.fecha_nacimiento,
      dni: guia.dni,
      direccion: guia.direccion,
      fecha_ingreso: guia.fecha_ingreso,
      tipoGuia: guia.tipoGuia,
      horario: guia.horario,
      estado: guia.estado,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateGuia = async (req, res) => {
  try {
    const guia = await Guia.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    });

    if (!guia) return res.status(404).json({ message: "Guía no encontrado" });

    res.json(guia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteGuia = async (req, res) => {
  try {
    const guia = await Guia.findByIdAndDelete(req.params.id);

    if (!guia) return res.status(404).json({ message: "Guía no encontrado" });

    res.json({ message: "Guía eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






