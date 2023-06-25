import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
    platenumber:{
        type: String,
        require: true,
    },
    brand:{
        type: String,
        require: true,
    },
    state:{
        type: String,
        require: true,
    },
    dailyvalue:{
        type: String,
        require: true,
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }
}, {
        timestamps: true,
    });

export default mongoose.model('Car', carSchema);