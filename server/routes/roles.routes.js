import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
    setNewRoles,
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/permits').get(getAllPermisos);
rolesRoutes.route('/ForBarralateral').get(getAllForBarralateral);
rolesRoutes.route('/NuevosPermisos').post(setNewRoles);

rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
