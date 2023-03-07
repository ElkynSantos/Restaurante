import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Crear.css';
import BarraLateral from '../common/index.js';
import { Container } from 'react-bootstrap';
import '../../features/taxesSlice';
import { CreateTax, getAllTaxes, editTax, deleteTax } from '../../services/Taxes';
import Swal from 'sweetalert2';

function ECBMPUESTO() {
    /*CreateTax('IVA', 16).then(response => {
        console.log('El nuevo impuesto ha sido creado:', response);
            }).catch(error => {
        console.error('Error al crear el impuesto:', error);
            });
    
    
        getAllTaxes().then(response => {
        console.log('Todos los impuestos:', response);
        console.error('Error al obtener los impuestos:', error);
        console.error('Error al obtener los impuestos:', error);
            });
    
    
    
    
        deleteTax(1, 1).then(response => {
        console.log('El impuesto ha sido eliminado:', response);
            }).catch(error => {
        console.error('Error al eliminar el impuesto:', error);
            });*/
 
    const [nombreImpuesto, setNombreImpuesto] = useState('');
    const [porcentajeImpuesto, setPorcentajeImpuesto] = useState('');
    const [impuestos, setImpuestos] = useState([]);
    const [impuestoEditando, setImpuestoEditando] = useState(null);

    const handleAddImpuesto = async (e) => {
        e.preventDefault();
        if (!nombreImpuesto || !porcentajeImpuesto) return; // restricción para valores vacíos
        if (impuestoEditando !== null) {
          console.log("entro")
          await editTax({  taxName: nombreImpuesto, taxAmount: porcentajeImpuesto}).then(response => {


            if(response.status = "Ok")
            {
              setImpuestos(
                impuestos.map((impuesto, index) =>
                  index === impuestoEditando ? { nombre: nombreImpuesto, porcentaje: porcentajeImpuesto } : impuesto
                )
              );
              setNombreImpuesto('');
              setPorcentajeImpuesto('');
              setImpuestoEditando(null);
    
            Swal.fire({
            text: "Se creo correctamente",
            icon: "success"
            })
           return
            }
            Swal.fire({
              text: response.msg,
              icon: "error"
            })}).catch(() => {
                Swal.fire({
                text: "ocurrio un error a la hora de editar",
                icon: "error"
            })})
    
          // editando un impuesto existente
          
    
        } else {
          console.log("en2tro")
          // agregando un nuevo impuesto
          
          setImpuestos([...impuestos, {  nombre: nombreImpuesto, porcentaje: porcentajeImpuesto }]);
          setNombreImpuesto('');
          setPorcentajeImpuesto('');
        }
      };








    const handleEditImpuesto = (index) => {
        const impuesto = impuestos[index];
        setNombreImpuesto(impuesto.nombre);
        setPorcentajeImpuesto(impuesto.porcentaje);
        setImpuestoEditando(index);
    };


// ARREGLAR DELETE IMPUESTO
    const handleDeleteImpuesto = async  (index) => {
        setImpuestos(impuestos.filter((_, i) => i !== index));
        console.log("entssssro")
    
    
    };

    return (
        <Container>
            <BarraLateral />

            <div className="impuestos-table">
                <h2>Lista de Impuestos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr className="table-header">
                            <th>Nombre</th>
                            <th>Porcentaje</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {impuestos.map((impuesto, index) => (
                            <tr key={index}>
                                <td>{impuesto.nombre}</td>
                                <td>{impuesto.porcentaje}</td>
                                <td>
                                    <Button
                                        variant="warning"
                                        className="mr-2"
                                        onClick={() =>
                                            handleEditImpuesto(index)
                                        }
                                    >
                                        Editar
                                    </Button>
                                    <Button
                                        variant="danger"
                                        onClick={() =>
                                            handleDeleteImpuesto(index)
                                        }
                                    >
                                        Eliminar
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Form onSubmit={handleAddImpuesto}>
                    <Form.Group>
                        <Form.Label>Nombre del impuesto</Form.Label>
                        <Form.Control
                            type="text"
                            value={nombreImpuesto}
                            onChange={(e) => setNombreImpuesto(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Porcentaje del impuesto</Form.Label>
                        <Form.Control
                            type="text"
                            value={porcentajeImpuesto}
                            onChange={(e) =>
                                setPorcentajeImpuesto(e.target.value)
                            }
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-3">
                        Agregar Impuesto
                    </Button>{' '}
                    <Button
                        variant="secondary"
                        className="mt-3"
                        onClick={() => {
                            setNombreImpuesto('');
                            setPorcentajeImpuesto('');
                            setImpuestoEditando(null);
                        }}
                    >
                        Cancelar
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default ECBMPUESTO;
