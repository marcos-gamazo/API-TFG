const mongoose = require('mongoose');

const EcoSchema = mongoose.Schema({
    //_id: mongoose.SchemaTypes.ObjectId,
    Fecha: mongoose.SchemaTypes.String,
    Id_Estacion: {
        type: Number,
        default: 1 
    },
    Duracion: mongoose.Types.Decimal128
});

module.exports = mongoose.model('Eco', EcoSchema);