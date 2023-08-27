const ScheaMultas = new mongoose.Schema({
    _id:{
        type: ObjectId,
    },
    tiempoSancion:{
        type:Date,
    },
    motivo:{
        type:String,
        maxlength:100,
        
    }
});