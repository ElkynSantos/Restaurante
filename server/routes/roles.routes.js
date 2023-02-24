import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/permits').get(getAllPermisos);
rolesRoutes.route('/ForBarralateral').get(getAllForBarralateral);

rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
