import {Router} from 'express'
import { getClientes, getCliente, postClientes, putClientes, patchClientes, deleteClientes }
from '../controllers/clientes.controllers.js'

const router = Router()

router.get('/clientes',getClientes)

router.get('/clientes/:id',getCliente)

router.post('/clientes',postClientes)

router.put('/clientes/:id',putClientes)

router.patch('/clientes/:id',patchClientes)

router.delete('/clientes/:id',deleteClientes)

export default router