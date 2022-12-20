const express = require('express')

const controlador = require('../controlador/paquete')

const router = express.Router()

const path = 'paquete'

router.get(
      `/${path}`,
      controlador.getPaquete
)

router.post(
      `/${path}`,
      controlador.postPaquete
)

router.put(
      `/${path}/:id`,
      controlador.putPaquete
)

router.delete(
      `/${path}/:id`,
      controlador.deletePaquete
)

module.exports = router