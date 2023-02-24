import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
    FormLabel,
    CloseButton,
} from 'react-bootstrap';
import Swal from 'sweetalert2';

import { Register } from '../../services/REGISTER';
import { showModalCR, closeModalCR } from '../../features/creacionRoles';
import { useDispatch, useSelector } from 'react-redux';

function Example() {
    const dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const handleClose = () => {
        console.log("entro");
        dispatch(closeModalCR());
    };


    const show2 = useSelector((state) => state.createrol);
    console.log(show2);
    return (
        <>
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Creación de Roles</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <CREARROL></CREARROL>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button className="bg-blue" form="test" type="submit">
                        Guardar rol
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function CREARROL() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [checkedList, setCheckedList] = useState([]);
    const listaPermisos = [
      { id: "1", value: "Crear facturas" },
      { id: "2", value: "Crear y modificar usuarios" },
      { id: "3", value: "Crear y modificar productos" },
      { id: "4", value: "Ver y generar reportes" },
    ];
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    function findErrors() 
    {
        const newErrors = {};
        return newErrors;
    }
    const handleSelect = (event) => {
        const value = event.target.value;
        const isChecked = event.target.checked;
     
        if (isChecked) {
          //Add checked item into checkList
          setCheckedList([...checkedList, value]);
        } else {
          //Remove unchecked item from checkList
          const filteredList = checkedList.filter((item) => item !== value);
          setCheckedList(filteredList);
        }
      };
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        // console.log(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
           console.log("FUNCIONA")
        }
    }

    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos correspondientes del nuevo
                rol.{' '}
            </h5>
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">
                                    Nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre del rol"
                                    onChange={(e) =>
                                        setField('nombre', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                       
                    </Row>
                    
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Permisos
                                </Form.Label>
                                {listaPermisos.map((item, index) => {
                                    return (
                                    <div key={item.id} className="checkbox-container">
                                        <input
                                        type="checkbox"
                                        name="permisos"
                                        value={item.value}
                                        onChange={handleSelect}                 
                                        />
                                        <label>&nbsp;{item.value }</label>
                                    </div>
                                    );
                                })}
                                
                            
                            
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;