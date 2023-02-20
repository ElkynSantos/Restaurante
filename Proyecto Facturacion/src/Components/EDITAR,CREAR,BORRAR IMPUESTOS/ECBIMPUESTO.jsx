import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./Crear.css";

function ECBMPUESTO() {
  const [nombreImpuesto, setNombreImpuesto] = useState('');
  const [porcentajeImpuesto, setPorcentajeImpuesto] = useState('');
  const [impuestos, setImpuestos] = useState([]);
  const [impuestoEditando, setImpuestoEditando] = useState(null);

  const handleAddImpuesto = (e) => {
    e.preventDefault();
    if (!nombreImpuesto || !porcentajeImpuesto) return; // restricción para valores vacíos
    if (impuestoEditando !== null) {
      // editando un impuesto existente
      setImpuestos(
        impuestos.map((impuesto, index) =>
          index === impuestoEditando ? { nombre: nombreImpuesto, porcentaje: porcentajeImpuesto } : impuesto
        )
      );
      setNombreImpuesto('');
      setPorcentajeImpuesto('');
      setImpuestoEditando(null);
    } else {
      // agregando un nuevo impuesto
      setImpuestos([...impuestos, { nombre: nombreImpuesto, porcentaje: porcentajeImpuesto }]);
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

  const handleDeleteImpuesto = (index) => {
    setImpuestos(impuestos.filter((_, i) => i !== index));
  };

  return (
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
                <Button variant="warning" className="mr-2" onClick={() => handleEditImpuesto(index)}>
                  Editar
                </Button>
                <Button variant="danger" onClick={() => handleDeleteImpuesto(index)}>
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
            onChange={(e) => setPorcentajeImpuesto(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Agregar Impuesto</Button>{' '}
        <Button variant="secondary" className="mt-3" onClick={() => {
    setNombreImpuesto('');
    setPorcentajeImpuesto('');
    setImpuestoEditando(null);
}}>
  Cancelar
</Button>
</Form>
</div>
);
}

export default ECBMPUESTO;