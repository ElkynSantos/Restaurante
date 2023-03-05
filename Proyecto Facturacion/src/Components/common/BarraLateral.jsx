import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Accordion } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { BsHouseFill } from 'react-icons/bs';
import { IoIosExit } from 'react-icons/io';
import { IoRestaurantSharp } from 'react-icons/io5';
import CREARUSUARIO from '../CREARUSUARIO/index';
import './BarraLateral.css';

import MESA from '../MESAS/Mesa';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [DATA, setData] = useState([]);

    useEffect(() => {
        const getAllRoles = async () => {
            await fetch('http://localhost:3000/roles/ForBarralateral')
                .then((response) => response.json())
                .then((data) => {
                    console.log('================================');
                    console.log(data.allRoles);

                    setData(data.allRoles);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getAllRoles();
    }, []);

    const optionsSidebar = [
        {
            name: 'Configuración del sistema',
            icon: 'Gear',
            permissions: [
                {
                    name: 'Roles',
                    url: '/roles',
                    icon: 'BookmarkFill',
                },
                {
                    name: 'Usuarios',
                    url: '/Users',
                    icon: 'PeopleFill',
                },
                {
                    name: 'Recuperar Contraseña',
                    url: '/Recuperar',
                    icon: 'PeopleFill',
                },
            ],
        },
        {
            name: 'Configuración del negocio',
            icon: 'Shop',
            permissions: [
                {
                    name: 'Menú',
                    url: '/productos',
                    icon: 'LayoutTextSidebar',
                },
                {
                    name: 'Pedidos',
                    url: '/Pedidos',
                    icon: 'ListCheck',
                },
                {
                    name: 'Impuestos',
                    url: '/Impuestos',
                    icon: 'Percent',
                },
                // {
                //     name: "Facturas",
                //     url: "/bills",
                //     icon: "PeopleFill"
                // }
            ],
        },
        {
            name: 'Reportes',
            icon: 'BarChartLineFill',
            permissions: [
                {
                    name: 'Reportes',
                    url: '/reports',
                    icon: 'FileEarmarkBarGraphFill',
                },
            ],
        },
    ];

    const User = localStorage.getItem('USER');
    const Rol = localStorage.getItem('ROL');

    return (
        <>
            <Navbar className="bg-blue" expand="lg">
                <Container>
                    <span className="d-flex justify-content-between gap-3">
                        <Button
                            className="btn-navbar"
                            size="xxl"
                            onClick={handleShow}
                        >
                            <Icons.List></Icons.List>
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
                            <h6 className="profile-name">
                                {User || 'Username'}
                            </h6>
                            <h7 className="profile-rol">{Rol || 'Rol'}</h7>
                        </span>
                        <span className="profile-image">
                            <a href="/profile" title="Ver perfil">
                                <Icons.PersonCircle className="fs-1 text-center text-white"></Icons.PersonCircle>
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
                            <Button href="/home" className="bg-blue" size="lg">
                                <BsHouseFill></BsHouseFill> Inicio
                            </Button>
                        </div>
                        <p></p>

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
                                href="Pedidos"
                                className="bg-blue"
                                size="lg"
                            >
                                <IoRestaurantSharp></IoRestaurantSharp> Pedidos
                            </Button>
                            <Button href="Roles" className="bg-blue" size="lg">
                                <BsFillBookmarkFill></BsFillBookmarkFill> Roles
                            </Button>
                            <Button href="/users" className="bg-blue" size="lg">
                                <BsFillPersonPlusFill></BsFillPersonPlusFill>{' '}
                                Usuarios
                            </Button>
                            <Button
                                href="/Reportes "
                                className="bg-blue"
                                size="lg"
                            >
                                <BsFillFileEarmarkBarGraphFill></BsFillFileEarmarkBarGraphFill>{' '}
                                Reportes
                            </Button>
                            <Button href="/" className="bg-blue" size="lg">
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
