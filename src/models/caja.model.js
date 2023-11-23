import mongoose from "mongoose";

const cajaSchema = new mongoose.Schema({
    id_caja:{
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },

    id_reserva:{
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },
    
    pago:{
        type: Number,
        required: true,
        trim: true,
    },

    celular:{
        type: Number,
        required: true,
        trim: true,
        unique: true,
    },

    fecha:{
        type: String,
        required: true,
    },

    user_dni:{
        type: String,
        required: true,
        trim: true,
        unique: true,
    }
}, {
    timestamps: true
});

export default mongoose.model('Caja', cajaSchema);