import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{type:String, require:true, unique:true},
    name:{type:String, require:true},
    password:{type:String, require:true},
    role:{type:String},
    reserve:{type:String}
},{
    timestamps: true
});

export default mongoose.model('User', userSchema);