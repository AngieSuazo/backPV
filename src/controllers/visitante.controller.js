import Visitante from "../models/visitante.model.js";

export const getVisitante = async (req, res) => {
    const visitante = await Visitante.find();
    res.json(visitante);
};

export const createVisitante = async (req, res) => {
    const { visitante_dni, nombre, apellidoP, celular, fecha_nacimiento } = req.body;

    const newVisitante = new Visitante({
        visitante_dni,
        nombre,
        apellidoP,
        celular,
        fecha_nacimiento
    });

    const savedVisitante = await newVisitante.save();
    res.json(savedVisitante);
};

export const getVisitantes = async (req, res) => {
    const visitante = await Visitante.findById(req.params.id);

    if (!visitante) return res.status(404).json({ message: "Visitante no encontrado" });

    res.json({
        visitante_dni: visitante.visitante_dni,
        nombre: visitante.nombre,
        apellidoP: visitante.apellidoP,
        celular: visitante.celular,
        fecha_nacimiento: visitante.fecha_nacimiento
    });
};

export const deleteVisitante = async (req, res) => {
    const visitante = await Visitante.findByIdAndDelete(req.params.id);

    if (!visitante) return res.status(404).json({ message: "Visitante no encontrado" });

    res.json(visitante);
};

export const updateVisitante = async (req, res) => {
    const visitante = await Visitante.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    });

    if (!visitante) return res.status(404).json({ message: "Visitante no encontrado" });

    res.json(visitante);
};
