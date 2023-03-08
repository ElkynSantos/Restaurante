import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { Container, Accordion } from 'react-bootstrap';
import * as Icons from 'react-bootstrap-icons';
import { BsHouseFill } from 'react-icons/bs';
import { IoIosExit } from 'react-icons/io';
import { IoRestaurantSharp } from 'react-icons/io5';

import { getAllCategoriesByUser } from '../../services/roles';

import CREARUSUARIO from '../CREARUSUARIO/index';
import MESA from '../MESAS/Mesa';

import './BarraLateral.css';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [infoUser, setInfoUser] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getAllRoles = async () => {
            // await getAllCategoriesByUser("JUAR5219")
            await getAllCategoriesByUser()
                .then(infoUser => {
                    setInfoUser({fullname: infoUser.Nombre, rol: infoUser.Rol});
                    setCategories(infoUser.Categorias);
                })
                .catch()
        };

        getAllRoles();
    }, []);

    // const categories = [
    //     {
    //         name: 'Configuración del sistema',
    //         icon: 'Gear',
    //         permissions: [
    //             {
    //                 name: 'Roles',
    //                 url: '/roles',
    //                 icon: 'BookmarkFill',
    //             },
    //             {
    //                 name: 'Usuarios',
    //                 url: '/Users',
    //                 icon: 'PeopleFill',
    //             },
    //             {
    //                 name: 'Recuperar Contraseña',
    //                 url: '/Recuperar',
    //                 icon: 'PeopleFill',
    //             },
    //         ],
    //     },
    //     {
    //         name: 'Configuración del negocio',
    //         icon: 'Shop',
    //         permissions: [
    //             {
    //                 name: 'Impuestos',
    //                 url: '/taxes',
    //                 icon: 'Percent',
    //             },
    //             {
    //                 name: 'Menú',
    //                 url: '/products',
    //                 icon: 'LayoutTextSidebar',
    //             },
    //             {
    //                 name: 'Pedidos',
    //                 url: '/orders',
    //                 icon: 'ListCheck',
    //             },
    //             // {
    //             //     name: "Facturas",
    //             //     url: "/bills",
    //             //     icon: "PeopleFill"
    //             // }
    //         ],
    //     },
    //     {
    //         name: 'Reportes',
    //         icon: 'BarChartLineFill',
    //         permissions: [
    //             {
    //                 name: 'Reportes',
    //                 url: '/reports',
    //                 icon: 'FileEarmarkBarGraphFill',
    //             },
    //         ],
    //     },
    // ];

    // console.log("INFOUSER:", infoUser);
    // console.log("CAtegories:", categories);

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
                                title='Volver al inicio'
                            ></img>
                        </a>
                    </span>
                    <span className="profile-container">
                        <span className="profile-info text-white">
                            <h5 className="profile-name">{infoUser.fullname}</h5>
                            <h6 className="profile-rol">{infoUser.rol}</h6>
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
                        <a href="/home">
                            <img
                                src="/assets/images/logo.png"
                                className="imagen"
                                title='Volver al inicio'
                            ></img>
                            {/* <img
                                id="nav-brand"
                                src="/assets/images/logo.png"
                                className="imagen"
                            ></img> */}
                        </a>
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
                                {
                                    // <div>
                                    //     {infoUser.Categorias[0]}
                                    // </div>
                                    categories
                                        ?categories.map((category, index) => {
                                            const { [category.Icono]: TempIconHeader } = Icons;
                                            return (
                                                category.Permisos?
                                                    <Accordion.Item
                                                        eventKey={index}
                                                        key={index}
                                                    >
                                                        <Accordion.Header>
                                                            <TempIconHeader />{' '}
                                                            {category.Categoria}
                                                        </Accordion.Header>
                                                        <Accordion.Body>
                                                            {category.Permisos.map(
                                                                (permission, index) => {
                                                                    const {
                                                                        [permission.icono]:
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
                                                                                    permission.link
                                                                                }
                                                                            >
                                                                                {
                                                                                    permission.N_Permiso
                                                                                }
                                                                            </a>
                                                                        </div>
                                                                    );
                                                                })
                                                            }
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                : ""
                                            )
                                        }) 
                                        : <b>No se encontraron permisos</b>
                                }
                            </Accordion>
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
