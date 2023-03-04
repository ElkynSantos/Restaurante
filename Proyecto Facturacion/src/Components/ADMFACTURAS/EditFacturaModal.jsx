/*import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const EditFacturaModal = ({ show, handleClose, handleSave, factura }) => {
  const [noFactura, setNoFactura] = useState(factura.noFactura);
  const [fecha, setFecha] = useState(factura.fecha);
  const [cliente, setCliente] = useState(factura.cliente);
  const [vendedor, setVendedor] = useState(factura.vendedor);
  const [estado, setEstado] = useState(factura.estado);
  const [total, setTotal] = useState(factura.total);

  const handleSubmit = (event) => {
    event.preventDefault();
    const editedFactura = {
      noFactura,
      fecha,
      cliente,
      vendedor,
      estado,
      total
    };
    handleSave(editedFactura);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Factura</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formNoFactura">
            <Form.Label>Número de Factura</Form.Label>
            <Form.Control
              type="text"
              value={noFactura}
              onChange={(event) => setNoFactura(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formFecha">
            <Form.Label>Fecha</Form.Label>
            <Form.Control
              type="date"
              value={fecha}
              onChange={(event) => setFecha(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCliente">
            <Form.Label>Cliente</Form.Label>
            <Form.Control
              type="text"
              value={cliente}
              onChange={(event) => setCliente(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formVendedor">
            <Form.Label>Vendedor</Form.Label>
            <Form.Control
              type="text"
              value={vendedor}
              onChange={(event) => setVendedor(event.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formEstado">
            <Form.Label>Estado</Form.Label>
            <Form.Control
              as="select"
              value={estado}
              onChange={(event) => setEstado(event.target.value)}
            >
              <option value="Pendiente">Pendiente</option>
              <option value="Pagada">Pagada</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="formTotal">
            <Form.Label>Total</Form.Label>
            <Form.Control
              type="number"
              step="0.01"
              value={total}
              onChange={(event) => setTotal(event.target.value)}
            />
          </Form.Group>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button type="submit" variant="primary">
              Guardar cambios
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditFacturaModal;*/