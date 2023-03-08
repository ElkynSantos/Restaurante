import AppError from '../utilities/app.error.js';

import db from '../db.js';

const setNewRoles = async (req, res, next) => {
    try {
        const { idrol, ArrayPermisos } = req.body;
        const permisosString = ArrayPermisos.join(',');

        await db.query(
            'CALL asignar_permisos_rol(' +
                idrol +
                ', "' +
                permisosString +
                '", @resultado);'
        );

        return res.status(200).json({});
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const CreateNewRole = async (req, res, next) => {
    try {
        const { NombreRol } = req.body;

        await db.query("CALL crear_rol('" + NombreRol + "', 1);");

        return res.status(200).json({});
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const DeleteRole = async (req, res, next) => {
    try {
        const { NRol } = req.body;

        await db.query('CALL eliminar_rol(' + NRol + ');');

        return res.status(200).json({});
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
        console.log("uwu");
        console.log("USEEEEER", currentUsername);
        const allRoles = await db.query(`CALL ObtenerRolYPermisos(:p_Nom_Usuario)`, {
            replacements: {
                p_Nom_Usuario: currentUsername
            }
        });

        return res.status(200).json( allRoles[0].ARRAY);
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
};

const getPermissionsByUser = async (req, res, next) => {
    try {
        let { currentUsername } = req;

        const permissions = await db.query(`CALL get_permissions_by_user(:username)`, {
            replacements: {
                username: currentUsername
            }
        });

        return res.status(200).json( permissions[0].permissions );
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
    setNewRoles,
    CreateNewRole,
    DeleteRole,
};
