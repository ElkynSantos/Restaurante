import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
    getAllCategoriesByUser,
    getPermissionsByUser,
    setNewRoles,
    CreateNewRole,
    DeleteRole,
} from '../controllers/roles.controllers.js';

import { tokenVerification } from '../middlewares/jwt.verification.js';

const rolesRoutes = express.Router();

// rolesRoutes.route('/categories').get(getAllCategoriesByRole);
rolesRoutes.route('/permissions').get(getAllPermisos);
rolesRoutes.route('/user-permissions').get(tokenVerification, getPermissionsByUser);
rolesRoutes.route('/categories').get(tokenVerification, getAllCategoriesByUser);
rolesRoutes.route('/NuevosPermisos').post(setNewRoles);
rolesRoutes.route('/CreateNewRole').post(CreateNewRole);
rolesRoutes.route('/DeleteRole').post(DeleteRole);
rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
