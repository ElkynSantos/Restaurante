import express from 'express';

import {
    getAllRoles,
    getAllPermisos,
    getAllCategoriesByUser,
    getPermissionsByUser,
    setNewRoleandPermits,
    CreateNewRole,
    unable_enable_role,
    getUsers_RoleandPermissions,
    getPermisosdeRol,
} from '../controllers/roles.controllers.js';

import { tokenVerification } from '../middlewares/jwt.verification.js';

const rolesRoutes = express.Router();

// rolesRoutes.route('/categories').get(getAllCategoriesByRole);
rolesRoutes.route('/permissions').get(getAllPermisos);
rolesRoutes
    .route('/user-permissions')
    .get(tokenVerification, getPermissionsByUser);
rolesRoutes.route('/categories').get(getAllCategoriesByUser);
//rolesRoutes.route('/categories').get(tokenVerification, getAllCategoriesByUser);
rolesRoutes.route('/CreateNewRole').post(CreateNewRole);
rolesRoutes.route('/RoleandPermissions').post(getUsers_RoleandPermissions);
rolesRoutes.route('/PermisosdeRol').post(getPermisosdeRol);

rolesRoutes.route('/NuevosPermisos').post(setNewRoleandPermits);
rolesRoutes.route('/unable_enable_role').post(unable_enable_role);
rolesRoutes.route('/').get(getAllRoles);
export default rolesRoutes;
