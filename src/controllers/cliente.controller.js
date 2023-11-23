import cliente from "../models/cliente.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const registerCliente = async (req, res) => {
  const {
    cliente_dni,
    pnombre,
    snombre,
    apellidop,
    apellidom,
   clientename,
    celular,
    password,
    fecha_nac,
    email,
    tipo_cliente,
    cantidad_cliente,
  } = req.body;

  try {
    const passwordHash = await bcrypt.hash(password, 10);

    const newCliente = new Cliente({
      cliente_dni,
      pnombre,
      snombre,
      apellidop,
      apellidom,
      clientename,
      password: passwordHash,
      celular,
      fecha_nac,
      email,
      tipo_cliente,
      cantidad_cliente,
      isActive: true,
    });

    const clienteFound = await Cliente.findOne({ email });

    if (clienteFound)
      return res.status(400).json({ message: "Cliente duplicado" });

    const clienteSaved = await newcliente.save();
    const token = await createAccessToken({ id: clienteSaved._id });

    res.cookie("token", token);
    res.json({
      id: clienteSaved._id,
     cliente_dni: clienteSaved.cliente_dni,
     clientename: clienteSaved.clientename,
      email: clienteSaved.email,
      createdAt: clienteSaved.createdAt,
      updatedAt: clienteSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const clienteFound = awaitcliente.findOne({ email });

    if (!clienteFound)
      return res.status(400).json({ message: "Cliente no encontrado" });

    const isMatch = await bcrypt.compare(password, clienteFound.password);

    if (!isMatch)
      return res.status(400).json({ message: "Password incorrecto" });

    const token = await createAccessToken({ id: clienteFound._id });

    res.cookie("token", token);
    res.json({
      token,
      id: clienteFound._id,
      isActive: clienteFound.isActive,
     clientename: clienteFound.clientename,
      email: clienteFound.email,
      createdAt: clienteFound.createdAt,
      updatedAt: clienteFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const clienteFound = awaitcliente.findById(req.cliente.id);
  if (!clienteFound) res.status(400).json({ message: "Cliente no encontrado" });

  res.json({
    id: clienteFound._id,
   clientename: clienteFound.clientename,
    email: clienteFound.email,
    createdAt: clienteFound.createdAt,
    updatedAt: clienteFound.updatedAt,
  });
};
//metodos RUD (sin create) para usuarios, probablemente se necesite un nuevo controller para ellos
export const getClientes = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const clientes = await Cliente.find({ _id: { $ne: "651a425a3f2658512f3fad59" } });
  const resultCliente = clientes.slice(startIndex, endIndex);
  res.json(resultCliente);
};

export const getCliente = async (req, res) => {
  const cliente = await Cliente.findById(req.params.id).populate('_id'); //podria incluir tambien todos los datos de usuario con el .populate

  if (!cliente) return res.status(404).json({ message: "Cliente no encontrado" });

  res.json({
    _id: cliente._id,
    cliente_dni: cliente.cliente_dni,
    pnombre:cliente.pnombre,
    snombre:cliente.snombre,
    apellidop:cliente.apellidop,
    apellidom:cliente.apellidom,
   clientename:cliente.clientename,
    celular:cliente.celular,
    fecha_nac:cliente.fecha_nac,
    email:cliente.email,
    tipo_cliente: cliente.tipo_cliente,
    cantidad_cliente: cliente.cantidad_cliente,
    isActive:cliente.isActive,
  });
};

export const updateCliente = async (req, res) => {
  constcliente = awaitcliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!cliente) return res.status(404).json({ message: "Usuario no encontrado" });

  res.json(cliente);
};

export const deletecliente = async (req, res) => {
  constcliente = awaitcliente.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!cliente) return res.status(404).json({ message: "Usuario no encontrado" });

  res.json(cliente);
};




