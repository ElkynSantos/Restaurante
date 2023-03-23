import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

import db from '../db.js';

const getConfigFacturas = async(req,res,next)=>{
    try {
        const allConfig = await db.query('CALL get_configBills()');
        return res.status(200).json({
            status: 'Ok',
            msg: 'Funciona',
            allConfig,
        });
    } catch (error) 
    {   console.log(error);
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

const editConfigFacturas =async (req,res,next)=>{
try {
    const { 
        Rtn,
        nombreRestaurante,
        domicilio,
        celular,
        correo,
        cai,
        numeroFactura,
        descripcionRestaurante, 
        fechaLimiteEmision,
        rangoDocumentos, 
        mesas
        

    } = req.body;

    console.log( 

        Rtn,
        nombreRestaurante,
        domicilio,
        celular,
        correo,
        cai,
        numeroFactura,
        descripcionRestaurante, 
        fechaLimiteEmision,
        rangoDocumentos,
        mesas
        );

    const updatedFactura = await db.query(
        'CALL editar_configuracion_facturas(:p_RTN, :p_Nombre_Restaurante, :p_domicilio,:p_celular,:p_correo,:p_cai,:p_numero_factura,:p_descripcion_restaurante,:p_fecha_limite_emision,:p_rango_documentos,:p_mesas)',
        {
            replacements: {
                p_RTN : integerSanitizer(Rtn), 
                p_Nombre_Restaurante : nombreRestaurante, 
                p_domicilio : domicilio, 
                p_celular : integerSanitizer(celular),
                p_correo : correo, 
                p_cai :integerSanitizer(cai), 
                p_numero_factura : integerSanitizer(numeroFactura), 
                p_descripcion_restaurante : descripcionRestaurante, 
                p_fecha_limite_emision : fechaLimiteEmision, 
                p_rango_documentos : integerSanitizer(rangoDocumentos), 
                p_mesas : integerSanitizer(mesas)
                
        
            },
        }
    );

    if (updatedFactura[0].response === 0) {
        return res.status(400).json({
            status: 'fail',
            msg: updatedFactura[0].msg,
        });
    }

    return res.status(200).json({
        status: 'Ok',
        msg: updatedFactura[0].msg,
    });

}catch(error)
{
    console.log(error);
    return next(new AppError('Ha ocurrido algún error', 500));
}
}

const newConfigFactura =async (req,res,next) =>{
try{

    const { 
        Rtn,
        nombreRestaurante,
        domicilio,
        celular,
        correo,
        cai,
        numeroFactura,
        descripcionRestaurante, 
        fechaLimiteEmision,
        rangoDocumentos,
        mesas
        

    } = req.body;

    console.log( 

        Rtn,
        nombreRestaurante,
        domicilio,
        celular,
        correo,
        cai,
        numeroFactura,
        descripcionRestaurante, 
        fechaLimiteEmision,
        rangoDocumentos,
        mesas
        );

       const emptyParams = Object.values({
        Rtn,
        nombreRestaurante,
        domicilio,
        celular,
        correo,
        cai,
        numeroFactura,
        descripcionRestaurante, 
        fechaLimiteEmision,
        rangoDocumentos,
        mesas
        }).some((val) => !val);

    if (emptyParams) {
        return next(new AppError('Favor completar todos los campos', 400));
    }

    const [newFactura] = await db.query(
        'CALL new_configBill(:p_RTN, :p_Nombre_Restaurante, :p_domicilio,:p_celular,:p_correo,:p_cai,:p_numero_factura,:p_descripcion_restaurante,:p_fecha_limite_emision,:p_rango_documentos, :p_mesas)',
        {
            replacements: {
                p_RTN : integerSanitizer(Rtn), 
                p_Nombre_Restaurante : nombreRestaurante, 
                p_domicilio : domicilio, 
                p_celular : integerSanitizer(celular),
                p_correo : correo, 
                p_cai :integerSanitizer(cai), 
                p_numero_factura : integerSanitizer(numeroFactura), 
                p_descripcion_restaurante : descripcionRestaurante, 
                p_fecha_limite_emision : fechaLimiteEmision, 
                p_rango_documentos : integerSanitizer(rangoDocumentos), 
                p_mesas : integerSanitizer(mesas)                
        
            },
        }
    );

    return res.status(201).json({
        status: 'Ok',
        msg: newFactura.msg,
    });

}catch(error)
{
    console.log(error);
    return next(
        new AppError(
            'Ha ocurrido algún error al crear la nueva factura',
            500
        )
    );

}

}




export {
    getConfigFacturas,
    editConfigFacturas,
    newConfigFactura 
}