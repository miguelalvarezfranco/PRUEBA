const SchemaBibliotecologos = new mongoose.Schema({
    _id:{
        type:ObjectId,
    },
    ccBibliotecologo:{
        type:Number,
    },
    nombre:{
        type:String,
        maxlength:100,
    },
    horarioEntrada:{
        type:Date,
    },
    horarioSalid:{
        type:Date,
    }
});