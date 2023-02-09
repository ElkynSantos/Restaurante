import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear Producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Nuevo Producto</Modal.Title>
        </Modal.Header>
        <Modal.Body><BasicExample></BasicExample>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
           Salir
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Guardar producto
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}







function BasicExample() {
  return (
    <Form>

<Form.Group>
      <NOMBRE></NOMBRE>
      </Form.Group> <br></br>
      
      <Form.Group>
      <Form.Label>Código del producto</Form.Label>
        <Form.Control type="text" placeholder="letras y/o numeros no mas de 5 caracteres" required minlength ="6" maxlength="6" pattern="[a-z]{1,}"/>
        <Form.Text className="text-muted">
          Añada un código que cumpla con las siguientes condiciones 
        </Form.Text>
      </Form.Group> <br></br>
      
      <InputGroup className="mb-3">
      <Form.Label>Precio del producto</Form.Label>
      <InputGroup className="mb-3"></InputGroup>
        <InputGroup.Text>Lps</InputGroup.Text>
        <NUMEROS></NUMEROS>
        <InputGroup.Text>.00</InputGroup.Text>
      </InputGroup>

      <InputGroup>
      <Form.Label>Descripción del producto</Form.Label>
      <InputGroup className="mb-3"></InputGroup>
        <InputGroup.Text>Producto</InputGroup.Text>
        <Form.Control as="textarea" aria-label="describa detalladamente el producto" />
      </InputGroup>

      <br></br>
      <Form.Label>Asignar impuesto</Form.Label>
      <Form.Select aria-label="Asignar impuesto">
      <option value="1">Impuesto 1</option>
      <option value="2">Impuesto 2</option>
      <option value="3">impuesto 3</option>
    </Form.Select>

      
    </Form>
  );
}


const NUMEROS = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    if (/^\d*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <Form> 
      <FormControl  value={value} aria-label="Amount (to the nearest dollar)" onChange={handleChange} required minlength="0" maxlength="4" />
    </Form>
  );
};

class NOMBRE extends React.Component {
  
  constructor(){
    super();
    this.state={UserName:''}
    this.handleChangeUserName = this.handleChangeUserName.bind(this);
  }
  
  handleChangeUserName(e){
    if(e.target.value.match("^[a-zA-Z ]*$")!=null) {
      this.setState({UserName: e.target.value});
    }
  }

  render(){
    return(
      <div className="form-group">
        <label className="col-sm-0 control-label" htmlFor="textinput"> Nombre del producto &nbsp; </label>
        <input type="text" value={this.state.UserName} onChange={this.handleChangeUserName}  placeholder="Asignar nombre al producto" className="form-control"></input>
      </div>
    )
  }
};





export default Example;