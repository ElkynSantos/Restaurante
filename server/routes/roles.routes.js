import express from 'express';

import { 
    getAllRoles, 
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/').get(getAllRoles);

export default rolesRoutes;