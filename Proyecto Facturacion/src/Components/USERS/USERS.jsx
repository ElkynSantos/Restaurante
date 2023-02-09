import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Container, Card, Form, InputGroup } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { PersonPlusFill, Search, PencilFill, Trash3Fill, Display } from 'react-bootstrap-icons';
import Swal from 'sweetalert2'

import { initUsers ,addUser, changeUserStatus } from '../../features/usersSlice';

import BarraLateral from '../common/index';

function USUARIOS() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const users = useSelector(state => state.users);

    const handleAdd = () => {
        dispatch(addUser({Birthday : "1995-01-28", DNI : "458378", Email :  "juadn@gmil.com", FullName :  "Daniel Ponce", Gender :  "H", Phone :  "9393", PlaceofBirth :  "Choloma", Rol :  "Administrador", UsernName :  "JUAR453"}));
    };

    const handleDelete = (DNI, status) => {
        Swal.fire({
            icon: "info",
            text: `¿Desea eliminar al usuario con el DNI ${DNI}?`,
            showCancelButton: true,
            cancelButtonColor: '#DC3545',
            confirmButtonColor: 'var(--blue)',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch("http://localhost:3000/users/status", {
                  method: 'PATCH',
                  body: JSON.stringify({
                    userDni: DNI,
                    opt: status == 1? 0 : 1
                  }),
                  headers:{
                    'Content-Type': 'application/json'
                  }
               })
                  .then((response) => response.json())
                  .then(data => {
                    if(data.status != "Ok") {
                        Swal.fire("No se pudo");
                        return;
                    }

                    dispatch(changeUserStatus(DNI));
                    Swal.fire({
                        text: '¡Usuario eliminado!', 
                        type: 'success'
                    });
                })
                  .catch(error => {console.error(error)})
            }
        })
    };

    const handleInitUsers = (data) => {
        dispatch(initUsers(data));
    };


    useEffect(() => {
        const getAllUsers = async () => {
            await fetch("http://localhost:3000/users")
            .then((response) => response.json())
            .then(data => {handleInitUsers(data.allUsers)})
            .catch(error => {console.error(error)})
        }

        getAllUsers();
    }, []);

    const columns = [
        {
            name: 'DNI',
            selector: row => row.DNI,
        },
        {
            name: 'Nombre Completo',
            selector: row => row.FullName,
        },
        {
            name: 'Rol',
            selector: row => row.Rol,
        },
        {
            name: "Género",
            selector: row => row.Gender
        },
        {
            name: "Fecha de nacimiento",
            selector: row => row.Birthday
        },
        {
            name: "Teléfono",
            selector: row => row.Phone
        },
        {
            name: "Correo",
            selector: row => row.Email
        },
        {
            name: "Esta",
            selector: row => {
                return row.status == 1?  "Inactivo" : "Activo";
            }
        },
        {
            name: "Acciones",
            selector: (row) => {
                return <Row >
                    <Col>
                        <button className='btn-transparent text-blue p-0' title='Editar' onClick={() => console.log("Editar", row.DNI)}><PencilFill/></button>
                    </Col> 
                    <Col>
                        <button className='btn-transparent text-danger p-0' title='Eliminar' onClick={() => handleDelete(row.DNI, row.status)}><Trash3Fill/></button>
                    </Col>
                </Row>
            }
        }
    ];
    
    const customStyles = {
        headCells: {
            style: {
                backgroundColor: "var(--blue)",
                fontWeight: "bold",
                justifyContent: "center",
                color: "white"
            },
        },
        cells: {
            style: {
                justifyContent: "center",
            }
        },
        rows: {
            style: {
                // backgroundColor: "var(--yellow-light)"
            },
        },
    }

    // useEffect()
    console.log(data);
    // console.log("USUARIOS", users);
    return (
        <div>
            <BarraLateral />
            <Container className="mt-5 rounded bg-white pt-5 pb-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Usuarios</h2>
                    </Col>
                    <Col md="auto">
                        <button className='btn-transparent h3 text-dark'><PersonPlusFill title='Agregar usuario' onClick={() => handleAdd({ id: 4, name: "Daniel Eduardo Ponce", rol: "Administrador", gender: "M"})}/></button>
                    </Col>
                    <Col sm={4}>
                        <InputGroup>
                            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                            <InputGroup.Text><Search/></InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <DataTable className='mt-3' columns={columns} data={users} customStyles={customStyles} noDataComponent={<div className='p-4'>No se encontraron usuarios</div>}/>
            </Container>
        </div>
    );
}

export default USUARIOS;
