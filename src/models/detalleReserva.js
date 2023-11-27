import mongoose from 'mongoose'
import { boolean } from 'zod';


const detalleReservaSchema = new mongoose.Schema(
    {
    cliente: {
        type: mongoose.Schema.ObjectId,
        ref:'users',
        require:true,
        
    },
    reserva:{
        type: mongoose.Schema.ObjectId,
        ref:'reservas',
        require:true,
    },
    circuito: {
        type: mongoose.Schema.ObjectId,
        ref:'circuitos',
        require:true,
    },
    numBoletos: {
        type: Number,
        require:true,
        require:true,
    },
    precioBoletos: {
        type: Number,
        require:true,
        
    },
    subTotal: {
        type: Number,
        require:true
        
    },
    fechaReserva: {
        type: Date,
        require:true,
    },
    bote: {
        type: mongoose.Schema.ObjectId,
        ref: 'botes',
        
    },
    
    


});

export default mongoose.model('detalleReserva', detalleReservaSchema);