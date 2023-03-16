import React, { useState } from "react";
import { FaMoneyBillWave, FaBox, FaBan } from "react-icons/fa";

import {
  Container,
  Row,
  Col,
  ButtonGroup,
  Button,
  DropdownButton,
  Dropdown,
  Table,
} from "react-bootstrap";
import "./RepoFac.css";

// Datos de muestra
const dailyReport = [
  {
    id: 1,
    date: "2023-03-15",
    type: "Ganancias",
    product: "Producto A",
    quantity: 10,
    revenue: 100,
  },
  {
    id: 1,
    date: "2023-03-15",
    type: "Ganancias",
    product: "Producto A",
    quantity: 10,
    revenue: 100,
  },
  {
    id: 1,
    date: "2023-03-15",
    type: "Ganancias",
    product: "Producto A",
    quantity: 10,
    revenue: 100,
  },
 
  {
    id: 1,
    date: "2023-03-15",
    type: "Ganancias",
    product: "Producto A",
    quantity: 10,
    revenue: 100,
  },
  {
    id: 2,
    date: "2023-03-15",
    type: "Productos",
    product: "Producto B",
    quantity: 5,
    revenue: 75,
  },
  {
    id: 3,
    date: "2023-03-15",
    type: "Facturas",
    product: "Producto C",
    quantity: 2,
    revenue: 30,
  },
];

function Report() {
  const [selectedPeriod, setSelectedPeriod] = useState("Día");
  const [reportType, setReportType] = useState("Ganancias Obtenidas Monto");

  const handlePeriodSelect = (eventKey) => {
    setSelectedPeriod(eventKey);
  };

  const handleReportTypeClick = (reportType) => {
    setReportType(reportType);
  };

  const getSingleReportData = () => {
    if (reportType === "Ganancias Obtenidas Monto" && selectedPeriod === "Día") {
      return dailyReport.filter((record) => record.type === "Ganancias");
    } else if (reportType === "Cantidad Producto Vendido" && selectedPeriod === "Día") {
      return dailyReport.filter((record) => record.type === "Productos");
    } else if (reportType === "Facturas Anuladas" && selectedPeriod === "Día") {
      return dailyReport.filter((record) => record.type === "Facturas");
    }
    // Agrega más condiciones para Mes y Año si es necesario
    return [];
  };

  return (
    <Container className="App">
      <Row className="mt-5">
        <Col>
          <ButtonGroup className="ButtonGroup">
            <Button
  variant="outline-primary"
  onClick={() => handleReportTypeClick("Ganancias Obtenidas Monto")}
>
  <FaMoneyBillWave className="mr-2" />
  Ganancias Obtenidas Monto
</Button>
<Button
  variant="outline-primary"
  onClick={() => handleReportTypeClick("Cantidad Producto Vendido")}
>
  <FaBox className="mr-2" />
  Cantidad Producto Vendido
</Button>
<Button
  variant="outline-primary"
  onClick={() => handleReportTypeClick("Facturas Anuladas")}
>
  <FaBan className="mr-2" />
  Facturas Anuladas
</Button>

          </ButtonGroup>
        </Col>
        <Col>
          <DropdownButton
            id="dropdown-basic-button"
            title={`Seleccionar: ${selectedPeriod}`}
            onSelect={handlePeriodSelect}
            variant="outline-primary"
            className="DropdownButton"
          >
            <Dropdown.Item eventKey="Día">Día</Dropdown.Item>
            <Dropdown.Item eventKey="Mes">Mes</Dropdown.Item>
            <Dropdown.Item eventKey="Año">Año</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h4>{`${reportType} - ${selectedPeriod}`}  </h4>
          <Table striped bordered hover className="Table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Ingresos</th>
              </tr>
            </thead>
            <tbody>
              {getSingleReportData().map((record) => (
                <tr key={record.id}>
                  <td>{record.id}</td>
                  <td>{record.date}</td>
                  <td>{record.product}</td>
                  <td>{record.quantity}</td>
                  <td>{record.revenue}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Report;

