import Reserva from "../models/reserva.model.js";
import detalleReserva from "../models/detalleReserva.js";

export const  registrarReserva= async function(req,res){
    if(req.user){
        let data= req.body
        console.log(req)
        let reserva= await Reserva.create(data)
        res.status(200).send(reserva)

        
    }else{
        res.status(500).send({data:undefined,message:'Error Token'})
    }
}
export const getReservaByCliente = async function(req,res){
    if(req.user){
        let reserva= await Reserva.find({cliente: req.user.sub}).populate('cliente')
        res.status(200).send(reserva)
    }else{
        res.status(500).send({data:undefined,message:'Error Token'})
    }
}
export const getDetalleReservaByCliente= async function(req,res){
    if(req.user){
        let id= req.params['id'];
        let reserva= await Reserva.findById({_id:id}).populate('cliente')
        let detalleReserva= await detalleReserva.find({venta:id}).populate('circuito')
        res.status(200).send({reserva,detalleReserva});
    }
    else{
        res.status(500).send({data: undefined, message:'Error token'})
    }
}


export const getReservas = async (req, res) => {
    const reservas = await Reserva.find();
    res.json(reservas);
};

export const createReserva = async (req, res) => {
  const { fechaReserva, estado, total} = req.body;

  const newReserva = new Reserva({
    fechaReserva,
    estado,
    total
  });

  const savedReserva = await newReserva.save();
  res.json(savedReserva);
};

export const getReserva = async (req, res) => {
  const reserva = await Reserva.findById(req.params.id).populate('_id');; 

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });

  res.json({
    _id: reserva._id,
    fechaReserva: reserva.fechaReserva,
    estado: reserva.estado,
    total: reserva.total,
  });
};

export const deleteReserva = async (req, res) => {
  const reserva = await Reserva.findByIdAndDelete(req.params.id);

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrado" });

  res.json(reserva);
};

export const updateReserva = async (req, res) => {
  const reserva = await Reserva.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  });

  if (!reserva) return res.status(404).json({ message: "Reserva no encontrada" });

  res.json(reserva);
};
