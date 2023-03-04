import React, { useState } from 'react';
import { InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import { FaSearch, FaEdit, FaPrint, FaTrash } from 'react-icons/fa';
//import EditFacturaModal from './EditFacturaModal';


import './Fact.css';

function Facturas() {
  const [facturas, setFacturas] = useState([
    {
      noFactura: '001',
      fecha: '01/01/2023',
      cliente: 'Juan Perez',
      vendedor: 'Maria Garcia',
      estado: 'Pagada',
      total: '$100.00',
    },
    {
      noFactura: '002',
      fecha: '02/01/2023',
      cliente: 'Pedro Gomez',
      vendedor: 'Maria Garcia',
      estado: 'Pendiente',
      total: '$50.00',
    },
    {
      noFactura: '003',
      fecha: '03/01/2023',
      cliente: 'Juan Perez',
      vendedor: 'Maria Garcia',
      estado: 'No pagada',
      total: '$75.00',
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModal, setShowEditModal] = useState(false);
  const [editFactura, setEditFactura] = useState(null);

  const handleSearch = () => {
    const results = facturas.filter((factura) => {
      return (
        factura.noFactura.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factura.cliente.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFacturas(results);
  };

  const handleEditFactura = (noFactura) => {
    const factura = facturas.find((f) => f.noFactura === noFactura);
    setEditFactura(factura);
    setShowEditModal(true);
  };

  const handlePrintFactura = (noFactura) => {
    console.log(`Imprimir factura ${noFactura}`);
  };

  const handleDeleteFactura = (noFactura) => {
    const nuevasFacturas = facturas.filter((f) => f.noFactura !== noFactura);
    setFacturas(nuevasFacturas);
  };

  

  return (
    <div className="facturas">
      <h1>ADMINISTRAR FACTURAS</h1>
      <div className="busqueda">
        <InputGroup size="sm">
          <FormControl
            type="text"
            placeholder="# de factura o cliente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>No de factura</th>
            <th>Fecha</th>
            <th>Cliente</th>
            <th>Vendedor</th>
            <th>Estado</th>
            <th>Total</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
      {facturas.map((factura) => (
      <tr key={factura.noFactura}>
      <td>{factura.noFactura}</td>
      <td>{factura.fecha}</td>
      <td>{factura.cliente}</td>
      <td>{factura.vendedor}</td>
      <td>
        
    {factura.estado === 'Pagada' && (
    <span className="pagado">Pagado</span>
        )}
    {factura.estado === 'Pendiente' && (
    <span className="pendiente">Pendiente</span>
        )}
    {factura.estado === 'No pagada' && (
    <span className="no-pagado">No Pagado</span>
        )}

      </td>
      <td>{factura.total}</td>
      <td className="acciones">
        <Button variant="primary" onClick={() => handleEditFactura(factura.noFactura)}>
          <FaEdit />
        </Button>{' '}
        <Button variant="info" onClick={() => handlePrintFactura(factura.noFactura)}>
          <FaPrint />
        </Button>{' '}
        <Button variant="danger" onClick={() => handleDeleteFactura(factura.noFactura)}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  ))}
        </tbody>
        </Table>
        {showEditModal && ( <EditFacturaModal factura={editFactura} handleClose={() => setShowEditModal(false)}
        />
        )}
    </div>
    );
}

export default Facturas;