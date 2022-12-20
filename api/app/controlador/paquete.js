const  mongoose  = require('mongoose')
const paquete  = require('../modelo/paquete')

//el get es para que se muestren en pantalla los paquetes
exports.getPaquete = (req, res) =>{
    paquete.find({},(err, paq) => {
        res.send({
            paq
        })
    })
}

// el post sirve para guardar los paquetes
exports.postPaquete = (req, res) =>{
    const data = req.body
    paquete.create( data, (err, paq) => {
        if (err) {
            res.send({ 
                status: 'error',
                code: 500,
                message: err
            })
        } else {
            res.send({ paq })
        }
    })
}

exports.searchPaquete = (req, res) =>{
    const nameUser = req.params.nameUser
    console.log(nameUser);
    paquete.findOne( {nameUser}, (err, paq) => {
        if (err) {
            res.send({ 
                status: 'error',
                code: 500,
                message: err
            })
        } else {
            res.send({ paq})
            console.log(paq);
        }
    })
}

const parseId = (id) => {
    return mongoose.Types.ObjectId(id)
}

// el put sirve para actualizar los paquetes
exports.putPaquete = (req, res) =>{
    const {id} = req.params
    const body = req.body
    paquete.updateOne( 
        
        {_id: parseId(req.params.id)},
        body,
        (err, paq)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    items: paq
                }) 
            }
        }
    )
}

// este controlodor sirve para eliminar
exports.deletePaquete = (req, res) =>{
    const {id} = req.params
    paquete.deleteOne( 
        {_id: parseId(req.params.id)},
        (err, paq)=>{
            if (err) {
                res.send({ 
                    status: 'error',
                    code: 500,
                    message: err
                })
                console.log(err)
            } else {
               res.send({
                    items: paq
                })
            }
        }
    )
    
}
