import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
    setNewRoles,
    CreateNewRole,
    DeleteRole,
    getUsers_RoleandPermissions,
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/permits').get(getAllPermisos);
rolesRoutes.route('/ForBarralateral').get(getAllForBarralateral);
rolesRoutes.route('/NuevosPermisos').post(setNewRoles);
rolesRoutes.route('/CreateNewRole').post(CreateNewRole);
rolesRoutes.route('/DeleteRole').post(DeleteRole);
rolesRoutes.route('/RoleandPermissions').post(getUsers_RoleandPermissions);
rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
