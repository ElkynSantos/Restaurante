import AppError from '../utilities/app.error.js';

import db from '../db.js';

const setNewRoles = async (req, res, next) => {
    try {
        const { idrol, NuevoNombre, ArrayPermisos } = req.body;
        const permisosString = ArrayPermisos.join(',');

        const Permisos = await db.query(
            'CALL editar_permisos_rol(' +
                idrol +
                ', "' +
                NuevoNombre +
                '", "' +
                ArrayPermisos +
                '", @resultado);'
        );

        return res.status(200).json('Rol Editado Correctamente');
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const CreateNewRole = async (req, res, next) => {
    try {
        const { NombreRol, ArrayPermisos } = req.body;

        console.log('===========================LUGAR===========');
        console.log(ArrayPermisos);

        let permisos_str = ArrayPermisos.join();
        let permisos = JSON.stringify(permisos_str);
        await db.query(
            'CALL crear_rol("' + NombreRol + '", "' + ArrayPermisos + '");'
        );

        return res.status(200).json('Se Creo el Rol');
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const DeleteRole = async (req, res, next) => {
    try {
        const { NRol } = req.body;

        await db.query('CALL eliminar_rol(' + NRol + ');');

        return res.status(200).json('Rol Editado Correctamente');
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getAllRoles = async (req, res, next) => {
    try {
        const allRoles = await db.query(`CALL get_all_roles()`);

        console.log(allRoles);

        return res.status(200).json({
            allRoles,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getAllCategoriesByUser = async (req, res, next) => {
    try {
        // let { username } = req.params;
        let { currentUsername } = req;
        console.log('uwu');
        console.log('USEEEEER', currentUsername);
        const allRoles = await db.query(
            `CALL ObtenerRolYPermisos(:p_Nom_Usuario)`,
            {
                replacements: {
                    p_Nom_Usuario: 'JORO7226',
                },
            }
        );

        return res.status(200).json(allRoles);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getPermissionsByUser = async (req, res, next) => {
    try {
        let { currentUsername } = req;

        const permissions = await db.query(
            `CALL get_permissions_by_user(:username)`,
            {
                replacements: {
                    username: currentUsername,
                },
            }
        );

        return res.status(200).json(permissions[0].permissions);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getAllForBarralateral = async (req, res, next) => {
    try {
        const allRoles = await db.query(`CALL obtener_roles_con_permisos()`);

        console.log(allRoles);

        return res.status(200).json({
            allRoles,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getAllPermisos = async (req, res, next) => {
    try {
        const allRoles = await db.query(`CALL get_all_permits()`);

        return res.status(200).json({
            allRoles,
        });
    } catch (error) {
        console.log(error);
        return next(new AppError(`Ups! Error en la base de datos`, 500));
    }
};

export {
    getAllRoles,
    getAllPermisos,
    getAllForBarralateral,
    getAllCategoriesByUser,
    getPermissionsByUser,
    setNewRoleandPermits,
    CreateNewRole,
    getUsers_RoleandPermissions,
    getPermisosdeRol,
    unable_enable_role,
};
