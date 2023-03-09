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
    const [Categories, setCategories] = useState([]);
    const [DATA, setData] = useState([]);

    useEffect(() => {
        const getAllRoles = async () => {
            await fetch('http://localhost:3000/roles/RoleandPermissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ User: localStorage.getItem('USER') }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.RolesPermissions[0].ARRAY);
                    setCategories(data.RolesPermissions[0].ARRAY.Categorias);
                    console.log('JUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN');
                    console.log(Categories);
                });
        };

        getAllRoles();
    }, []);

    const optionsSidebar = [
        {
            Categoria: 'Configuración del sistema',
            Icono: 'Gear',
            Categorias: [
                {
                    N_Permiso: 'Roles',
                    link: '/roles',
                    icono: 'BookmarkFill',
                },
                {
                    N_Permiso: 'Usuarios',
                    link: '/Users',
                    icono: 'PeopleFill',
                },
                {
                    N_Permiso: 'Recuperar Contraseña',
                    link: '/Recuperar',
                    icono: 'PeopleFill',
                },
            ],
        },
        {
            Categoria: 'Configuración del negocio',
            Icono: 'Shop',
            Categorias: [
                {
                    N_Permiso: 'Menú',
                    link: '/productos',
                    icono: 'LayoutTextSidebar',
                },
                {
                    N_Permiso: 'Pedidos',
                    link: '/Pedidos',
                    icono: 'ListCheck',
                },
                {
                    N_Permiso: 'Impuestos',
                    link: '/Impuestos',
                    icono: 'Percent',
                },
                // {
                //     name: "Facturas",
                //     url: "/bills",
                //     icon: "PeopleFill"
                // }
            ],
        },
        {
            Categoria: 'Reportes',
            Icono: 'BarChartLineFill',
            Categorias: [
                {
                    N_Permiso: 'Reportes',
                    link: '/reports',
                    icono: 'FileEarmarkBarGraphFill',
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
                                {
                                    // <div>
                                    //     {infoUser.Categorias[0]}
                                    // </div>
                                    Categories ? (
                                        Categories.map((category, index) => {
                                            const {
                                                [category.Icono]:
                                                    TempIconHeader,
                                            } = Icons;
                                            return category.Permisos ? (
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
                                                            (
                                                                permission,
                                                                index
                                                            ) => {
                                                                const {
                                                                    [permission.icono]:
                                                                        TempIcon,
                                                                } = Icons;
                                                                return (
                                                                    <div
                                                                        className="sidebar-item"
                                                                        key={
                                                                            index
                                                                        }
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
                                                            }
                                                        )}
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            ) : (
                                                ''
                                            );
                                        })
                                    ) : (
                                        <b>No se encontraron permisos</b>
                                    )
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
