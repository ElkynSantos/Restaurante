import React, { useState, useEffect } from 'react';
import { Button, Col, Row, Container, Card, Form, InputGroup } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import { PersonPlusFill, Search, PencilFill, Trash3Fill, Display } from 'react-bootstrap-icons';

import { initUsers ,addUser, deleteUser } from '../../features/usersSlice';

import BarraLateral from '../common/index';

function USUARIOS() {
    const dispatch = useDispatch();

    const handleAdd = (user) => {
        dispatch(addUser(user));
    };

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    const handleInitUsers = (data) => {
        dispatch(initUsers(data));
    };

    const [data, setData] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            await fetch("http://localhost:5000/users")
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
            name: "Cumpleaños",
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
            name: "Acciones",
            selector: (row) => {
                return <Row >
                    <Col>
                        <button className='btn-transparent text-dark p-0' title='Editar' onClick={() => console.log("Editar", row.id)}><PencilFill/></button>
                    </Col> 
                    <Col>
                        <button className='btn-transparent text-dark p-0' title='Eliminar' onClick={() => handleDelete(row.id)}><Trash3Fill/></button>
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
    const users = useSelector(state => state.users);
    // console.log("USUARIOS", users);
    return (
        <div>
            <BarraLateral />
            <Container className="mt-5 rounded bg-yellow-light pt-5 pb-5">
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
