import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { List, PersonCircle } from 'react-bootstrap-icons';
import { Accordion } from 'react-bootstrap-accordion';
import {
    BsFillPersonPlusFill,
    BsFillFileEarmarkBarGraphFill,
    BsHouseFill,
    BsFillBookmarkFill,
    BsFillCalculatorFill,
} from 'react-icons/bs';

import { IoIosExit, IoIosJournal } from 'react-icons/io';
import { IoRestaurantSharp } from 'react-icons/io5';
import CREARUSUARIO from '../CREARUSUARIO/index';

import EditarProducto from '../EditarProducto/index';
import './BarraLateral.css';

import MESA from '../MESAS/Mesa';
import { useDispatch, useSelector } from 'react-redux';
function Example() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    /*
    const handleCloseM = () => {
        dispatch(closeModalEP());
    };
    const handleShowM = () => {
        dispatch(showModalEP());
    };
*/
    const borrar = () => localStorage.removeItem('USERNAME');

    const optionsSidebar = [
        'BsHouseFill',
        {
            name: 'Configuración del sistema',
            permissions: [{}, {}],
        },
        {
            name: 'Configuración del negocio',
        },
    ];

    return (
        <>
            <EditarProducto></EditarProducto>
            <Navbar className="bg-blue" expand="lg">
                <Container>
                    <span className="d-flex justify-content-between gap-3">
                        <Button
                            className="btn-navbar"
                            size="xxl"
                            onClick={handleShow}
                        >
                            <List></List>
                        </Button>
                        <a href="/home">
                            <img
                                id="nav-brand"
                                src="/assets/images/logo.png"
                                className="imagen"
                            ></img>
                        </a>
                    </span>
                    <span className="profile-container">
                        <span className="profile-info text-white">
                            <h6 className="profile-name">Usuario</h6>
                            <h7 className="profile-rol">Rol</h7>
                        </span>
                        <span className="profile-image">
                            <a href="/profile" title="Ver perfil">
                                <PersonCircle className="fs-1 text-center text-white"></PersonCircle>
                            </a>
                        </span>
                    </span>
                    {/* <p>Garifunas Food</p> */}
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} className="sidebar">
                <Offcanvas.Header
                    className="bg-blue"
                    closeButton
                    closeVariant="white"
                >
                    <Container fluid>
                        <img
                            src="/assets/images/logo.png"
                            className="imagen"
                        ></img>
                    </Container>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <div className="d-grid gap-2">
                            <Accordion defaultActiveKey="0">
                                {optionsSidebar.map((category, index) => {
                                    const { [category.icon]: TempIconHeader } =
                                        Icons;
                                    return (
                                        <Accordion.Item
                                            eventKey={index}
                                            key={index}
                                        >
                                            <Accordion.Header>
                                                <TempIconHeader />{' '}
                                                {category.name}
                                            </Accordion.Header>
                                            <Accordion.Body>
                                                {category.permissions.map(
                                                    (permission, index) => {
                                                        const {
                                                            [permission.icon]:
                                                                TempIcon,
                                                        } = Icons;
                                                        return (
                                                            <div
                                                                className="sidebar-item"
                                                                key={index}
                                                            >
                                                                <TempIcon />
                                                                <a
                                                                    className="siidebar-link pl-1"
                                                                    href={
                                                                        permission.url
                                                                    }
                                                                >
                                                                    {
                                                                        permission.name
                                                                    }
                                                                </a>
                                                            </div>
                                                        );
                                                    }
                                                )}
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    );
                                })}
                                {/* <SidebarItems/> */}
                                {/* <Accordion.Item eventKey="1">
                                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                                    <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip ex ea commodo consequat. Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                    </Accordion.Body>
                                </Accordion.Item> */}
                            </Accordion>
                            {/* <Button href="/home" className="bg-blue" size="lg">
                                <BsHouseFill></BsHouseFill> Inicio
                            </Button>
                            <Button
                                href="/Pedidos"
                                className="bg-blue"
                                size="lg"
                            >
                                <IoRestaurantSharp></IoRestaurantSharp> Pedidos
                            </Button>
                            <Button
                                href="/Productos"
                                className="bg-blue"
                                size="lg"
                            >
                                <IoIosJournal></IoIosJournal>Menu
                            </Button>
                            <Button href="/Roles" className="bg-blue" size="lg">
                                <BsFillBookmarkFill></BsFillBookmarkFill> Roles
                            </Button>
                            <Button href="/users" className="bg-blue" size="lg">
                                <BsFillPersonPlusFill></BsFillPersonPlusFill>{' '}
                                Usuarios
                            </Button>
                            <Button
                                href="/Impuestos "
                                className="bg-blue"
                                size="lg"
                            >
                                <BsFillCalculatorFill></BsFillCalculatorFill>{' '}
                                Impuestos
                            </Button>
                            <Button
                                href="/Reportes "
                                className="bg-blue"
                                size="lg"
                            >
                                <BsFillFileEarmarkBarGraphFill></BsFillFileEarmarkBarGraphFill>{' '}
                                Reportes
                            </Button>
                            <Button
                                href="/"
                                className="bg-blue"
                                size="lg"
                                onClick={borrar}
                            >
                                <IoIosExit></IoIosExit> Salir
                            </Button> */}
                        </div>
                    </Container>
                </Offcanvas.Body>
                <div className="offcanvas-footer bg-blue">
                    <a className="bg-transparent rounded text-white" href="/">
                        Cerrar sesión{' '}
                        <Icons.ArrowBarRight className="fs-3"></Icons.ArrowBarRight>
                    </a>
                </div>
            </Offcanvas>
        </>
    );
}

function SidebarItems() {
    // let ItemsSidebar = [];
    // for (let i = 0; i < optionsSidebar.length; i++) {
    //     const permissions = optionsSidebar[i].permissions;
    //     // console.log(permissions);
    //     // for (let j = 0; j < permissions.length; j++) {
    //         ItemsSidebar.push(
    //             <Accordion.Item eventKey={`${i}`}>
    //                 <Accordion.Header>{optionsSidebar[i].name}</Accordion.Header>
    //                 <Accordion.Body>
    //                     {optionsSidebar[i].name}
    //                 </Accordion.Body>
    //             </Accordion.Item>
    //         )
    //     // }
    // }

    return <div>{ItemsSidebar}</div>;
}

function Borrar() {
    localStorage.removeItem('USERNAME');
}
export default Example;
//<BsFillBookmarkFill></BsFillBookmarkFill> Roles
