import mongoose from 'mongoose';


const reservaSchema = new mongoose.Schema(
    {
    cliente: {
        type: mongoose.Schema.ObjectId,
        ref:'users',
        require:true,
        
    },
    fechaReserva: {
        type: Date,
        require:true,
    },
    
    turnos: {
        type: mongoose.Schema.ObjectId,
        ref: 'turnos',
        require:true,
    },
    estado:{
        type:Boolean,
        require:true
    },
    total:{
        type:Number
    }


});

export default mongoose.model('reservas', reservaSchema);



