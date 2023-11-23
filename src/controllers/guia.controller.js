import Guia from "../models/guia.model.js";


export const registrarGuia = async (req, res) => {
  const { nombre, apellido, imagen, fecha_nacimiento,dni,direccion,fecha_ingreso,tipoGuia,horario, estado} = req.body;

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
  res.json(savedGuia);
};





