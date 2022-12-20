const mongoose = require('mongoose')

const paquetesScheme = new mongoose.Schema(
    {
        paquete: {
            type: String
        },
        origen: {
            type: String,
        },
        destino: {
            type: String
        },
        fechaInicial:{
            type: String
        },
        fechaFinal:{
            type: String
        }
    },{
        versionKey: false,
        timestamps: true
    }
)

module.exports = mongoose.model('paquetes', paquetesScheme)