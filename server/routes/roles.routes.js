import express from 'express';

import { 
    getAllRoles,
    getAllPermisos, 
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/permits').get(getAllPermisos);
rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;