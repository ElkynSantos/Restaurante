import React, { useState, useEffect } from 'react';
import { FaMoneyBillWave, FaBox, FaBan } from 'react-icons/fa';
import BarraLateral from '../common/index.js';
import {
    Container,
    Row,
    Col,
    ButtonGroup,
    Button,
    DropdownButton,
    Dropdown,
    Table,
} from 'react-bootstrap';
import './RepoFac.css';
import Swal from 'sweetalert2';
// Datos de muestra

function Report() {
    const [selectedPeriod, setSelectedPeriod] = useState('Día');
    const hoy = new Date().toISOString().split('T')[0];

    const [DateStart, setDateStart] = useState(hoy);
    const [DateEnd, setDateEnd] = useState(hoy);
    // const [reportType, setReportType] = useState('Ganancias Obtenidas Monto');

    const [reportType, setReportType] = useState('(Seleccion un Reporte)');
    const [reportData, setReportData] = useState([]);

    const handlePeriodSelect = (eventKey) => {
        setSelectedPeriod(eventKey);

        if (eventKey == 'Dia') {
            setDateStart(hoy);
            setDateEnd(hoy);
        } else if (eventKey == 'Mes') {
            const fechas = getFechaInicialYFinalDelMes();
            console.log(fechas);

            setDateStart(fechas.fechaInicial);
            setDateEnd(fechas.fechaFinal);
        } else if (eventKey == 'Año') {
            const fechas = getFechaInicialYFinalDelAño();
            console.log(fechas);

            setDateStart(fechas.fechaInicial);
            setDateEnd(fechas.fechaFinal);
        }

        if (reportType == 'Ganancias por Producto') {
            handleTable1Click(DateStart, DateEnd);
        } else if (reportType == 'Ganancias por Mesero') {
            handleTable2Click(DateStart, DateEnd);
        } else {
            handleTable3Click(DateStart, DateEnd);
        }
    };

    const handleReportTypeClick = (reportType) => {
        setReportType(reportType);
    };

    function getFechaInicialYFinalDelAño() {
        const hoy = new Date();
        const anioActual = hoy.getFullYear();
        const fechaInicial = `${anioActual}-01-01`;
        const fechaFinal = `${anioActual}-12-31`;
        return { fechaInicial, fechaFinal };
    }

    function getFechaInicialYFinalDelMes() {
        const hoy = new Date();
        const mesActual = hoy.getMonth() + 1;
        const anioActual = hoy.getFullYear();
        const fechaInicial = `${anioActual}-${mesActual
            .toString()
            .padStart(2, '0')}-01`;
        const ultimoDiaDelMes = new Date(anioActual, mesActual, 0).getDate();
        const fechaFinal = `${anioActual}-${mesActual
            .toString()
            .padStart(2, '0')}-${ultimoDiaDelMes.toString().padStart(2, '0')}`;
        return { fechaInicial, fechaFinal };
    }

    const getSingleReportData = () => {
        // Aquí puede agregar sus condiciones para filtrar la información según el tipo de informe y el período seleccionado
        return reportData;
    };
    useEffect(() => {
        if (reportType == 'Ganancias por Producto') {
            handleTable1Click(DateStart, DateEnd);
        } else if (reportType == 'Ganancias por Mesero') {
            handleTable2Click(DateStart, DateEnd);
        } else {
            handleTable3Click(DateStart, DateEnd);
        }
    }, [reportType, DateStart, DateEnd]);
    const handleTable1Click = async (Initial, Final) => {
        setReportType('Ganancias por Producto');

        const Respuesta = await fetch(
            `http://localhost:3000/reportroute/product`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    InitialDate: Initial,
                    FinalDate: Final,
                }),
            }
        );

        const DATA = await Respuesta.json();
        console.log(DATA);
        setReportData(DATA);
    };

    const handleTable2Click = async (Initial, Final) => {
        setReportType('Ganancias por Mesero');

        const Respuesta = await fetch(
            `http://localhost:3000/reportroute/waiter`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    InitialDate: Initial,
                    FinalDate: Final,
                }),
            }
        );

        const DATA = await Respuesta.json();

        setReportData(DATA);
    };

    const handleTable3Click = async (Initial, Final) => {
        setReportType('Facturas Anuladas');

        const Respuesta = await fetch(
            `http://localhost:3000/reportroute/factanuladas`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    InitialDate: Initial,
                    FinalDate: Final,
                }),
            }
        );

        const DATA = await Respuesta.json();

        setReportData(DATA);
    };

    return (
        <div>
            {' '}
            <BarraLateral />
            <Container>
                <Row className="mt-5">
                    <Col>
                        <ButtonGroup className="ButtonGroup">
                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    handleTable1Click(DateStart, DateEnd)
                                }
                            >
                                <FaMoneyBillWave className="mr-2" />
                                Ganancias por Producto
                            </Button>
                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    handleTable2Click(DateStart, DateEnd)
                                }
                            >
                                <FaBox className="mr-2" />
                                Ganancias por Mesero
                            </Button>
                            <Button
                                variant="outline-primary"
                                onClick={() =>
                                    handleReportTypeClick('Facturas Anuladas')
                                }
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
                            <Dropdown.Item eventKey="Dia">Día</Dropdown.Item>
                            <Dropdown.Item eventKey="Mes">Mes</Dropdown.Item>
                            <Dropdown.Item eventKey="Año">Año</Dropdown.Item>
                        </DropdownButton>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>
                        <h4>{`${reportType} - ${selectedPeriod}`} </h4>
                        <Table striped bordered hover className="Table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Fecha</th>
                                    {reportType === 'Ganancias por Producto' ? (
                                        <React.Fragment>
                                            <th>Producto</th>
                                            <th>Ingresos</th>
                                            <th>Cantidad</th>
                                        </React.Fragment>
                                    ) : reportType ===
                                      'Ganancias por Mesero' ? (
                                        <React.Fragment>
                                            <th>Mesero ID</th>
                                            <th>Ganancia</th>
                                        </React.Fragment>
                                    ) : (
                                        <React.Fragment>
                                            <th>Numero Factura</th>

                                            <th>Usuario Atiende</th>
                                            <th>Id Orden</th>
                                        </React.Fragment>
                                    )}
                                </tr>
                            </thead>
                            <tbody>
                                {getSingleReportData().map((record, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{record.Fecha}</td>
                                        {reportType ===
                                        'Ganancias por Producto' ? (
                                            <React.Fragment>
                                                <td>{record.Producto}</td>
                                                <td>
                                                    {record.Ganancia.toFixed(2)}
                                                </td>
                                                <td>{record.Cantidad}</td>
                                            </React.Fragment>
                                        ) : reportType ===
                                          'Ganancias por Mesero' ? (
                                            <React.Fragment>
                                                <td>{record.MeseroID}</td>
                                                <td>
                                                    {record.Ganancia.toFixed(2)}
                                                </td>
                                            </React.Fragment>
                                        ) : (
                                            <React.Fragment>
                                                <td>{record.Numero_factura}</td>
                                                <td>
                                                    {record.Usuario_atiende}
                                                </td>
                                                <td>{record.id_orden}</td>
                                            </React.Fragment>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Report;
