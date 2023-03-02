import AppError from '../utilities/app.error.js';
import { integerSanitizer } from '../utilities/data.sanitizer.js';

import db from '../db.js';

const getFacturas = async(req,res,next)=>{
    try {
        const allFacturas = await db.query('CALL get_facturas()');
        return res.status(200).json({
            status: 'Ok',
            msg: 'Lista de todos las facturas',
            allFacturas,
        });
    } catch (error) {
        return next(new AppError('Ups! Error en la base de datos', 500));
    }
}

const editFacturas =async (req,res,next)=>{
try {
    const {bb,xx,cc,aa} = req.body;

    const updatedFactura = await db.query(
        'CALL edit_bill(:xx, :xx,  :xx,  :xx)',
        {
            replacements: {
            
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

const newFactura =async (req,res,next) =>{
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
        nombreCliente,
        RtnCliente,
        fechaCreacion,
        subtotal,
        total,
        tarjetaEfectivo,
        cambio,
        anular,
        usuarioAtiende

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
        nombreCliente,
        RtnCliente,
        fechaCreacion,
        subtotal,
        total,
        tarjetaEfectivo,
        cambio,
        anular,
        usuarioAtiende
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
        nombreCliente,
        RtnCliente,
        fechaCreacion,
        subtotal,
        total,
        tarjetaEfectivo,
        cambio,
        anular,
        usuarioAtiende,
        }).some((val) => !val);

    if (emptyParams) {
        return next(new AppError('Favor completar todos los campos', 400));
    }

    const [newFactura] = await db.query(
        'CALL new_bill(:p_RTN, :p_Nombre_Restaurante, :p_domicilio,:p_celular,:p_correo,:p_cai,:p_numero_factura,:p_descripcion_restaurante,:p_fecha_limite_emision,:p_rango_documentos,:p_nombre_cliente,:p_rtn_cliente,:p_fecha_creacion,:p_subtotal,:p_total,:p_tarjeta_efectivo,:p_cambio, :p_anular, :p_usuario_atiende)',
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
                p_nombre_cliente : nombreCliente, 
                p_rtn_cliente : RtnCliente, 
                p_fecha_creacion : fechaCreacion, 
                p_subtotal : subtotal, 
                p_total : total, 
                p_tarjeta_efectivo : tarjetaEfectivo, 
                p_cambio : cambio,  
                p_anular : anular,  
                p_usuario_atiende : usuarioAtiende
        
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
    getFacturas,
    editFacturas,
    newFactura 
}