import AppError from '../utilities/app.error.js';

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
        id, 
        Rtn,
        nombreRestaurante,
        domocilio,
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
        anular

    } = req.body;

    console.log( 
        id, 
        Rtn,
        nombreRestaurante,
        domocilio,
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
        anular
        );

        const emptyParams = Object.values({
        id, 
        Rtn,
        nombreRestaurante,
        domocilio,
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
        anular
        }).some((val) => !val);

    if (emptyParams) {
        return next(new AppError('Favor completar todos los campos', 400));
    }

    const [newFactura] = await db.query(
        'CALL new_bill(:Name, :price, :id)',
        {
            replacements: {
        
            },
        }
    );

    return res.status(201).json({
        status: 'Ok',
        msg: newFactura.msg,
    });

}catch(error)
{
    return next(
        new AppError(
            'Ha ocurrido algún error al crear el nuevo producto',
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