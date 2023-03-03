import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
    setNewRoleandPermits,
    CreateNewRole,
    unable_enable_role,
    getUsers_RoleandPermissions,
    getPermisosdeRol,
} from '../controllers/roles.controllers.js';

const rolesRoutes = express.Router();

rolesRoutes.route('/permits').get(getAllPermisos);
rolesRoutes.route('/ForBarralateral').get(getAllForBarralateral);
rolesRoutes.route('/NuevosPermisos').post(setNewRoleandPermits);
rolesRoutes.route('/CreateNewRole').post(CreateNewRole);

rolesRoutes.route('/RoleandPermissions').post(getUsers_RoleandPermissions);

rolesRoutes.route('/PermisosdeRol').post(getPermisosdeRol);
rolesRoutes.route('/unable_enable_role').post(unable_enable_role);
rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
