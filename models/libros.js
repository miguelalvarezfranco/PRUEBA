//const mongoose = require("../config/conexion");

const SchemaLibros = new mongoose.Schema({
    id:{
        type: ObjectId,
        descripcion: 'por defecto mongo'
    },
    isbn:{
        type:String,
        required:true,
    },
    titulo:{
        type:String,
        maxlength:150,
        required:true,
    },
    autor:{
        type:ObjectId,

    },
    editorial:{
        type:ObjectId,
    },
    materias:{
        type:Array, 
    },
    fechaPublicacion:{
        type:Date,
        required:true,
    },
    cantidadCopias:{
        type:Number,
        required:true,
    },
    idioma:{
        type:Object,
        required: ["nombreIdioma"],
        propertis:{
            nombreIdioma:{
                type:String,
                maxlength:50,
            }
        }
    }
});