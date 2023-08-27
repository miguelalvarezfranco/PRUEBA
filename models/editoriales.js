const shemaEditoriales = new mongoose.Shema({
    _id:{
        type:ObjectId,
    },
    nombreEditorial:{
        type:String,
        maxlength:100,
    },
    direccion:{
        type:String,
        maxlength:100,
    },
    telefono:{
        type:Number,
    }
});