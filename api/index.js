const express = require('express')
const iniDB = require('./db/db')
const app = express()
const port =3001
const usuarioRuta = require('./app/rutas/usuario')
const paqueteRuta = require('./app/rutas/paquete')
const cors = require('cors')
 
app.use(cors())


app.use(
    express.json({
        limit: '20mb'
    })
)
//esta linea de coigo es para entener los atos que vengan e un formularios ya sea json Xml  text u otros todo esto lo hace a travez del mectodo urlencoded
app.use(
    express.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.use(usuarioRuta)
app.use(paqueteRuta)

app.listen(port, ()=>{
    console.log('la app esta en linea ')
})

iniDB();

app.get('/', (req, res) =>{
    res.send('iniciamos api con exito')
})

