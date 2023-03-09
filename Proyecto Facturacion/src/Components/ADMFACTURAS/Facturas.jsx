import React, { useState,useEffect } from 'react';
import { InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import { FaSearch, FaEdit, FaPrint, FaTrash } from 'react-icons/fa';
import { getFactura} from '../../services/Factura';
import axios from 'axios'
import { setCurrentEditFactura, showModalFactura , closeModalFactura} from '../../features/editFacturaSlice';
import EditRTNNAME from  '../editRTN&NAME';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './Fact.css';


function Facturas() {
  const dispatch = useDispatch();
    const [facturas, setFacturas] = useState([]);
    const showF = useSelector((state) => state.editFactura).modalState;
    console.log("modal:"+showF);
    useEffect(() => {
      async function fetchFacturas() {
        try {
          const response = await axios.get('http://localhost:3000/bills');
          setFacturas(response.data.allFacturas);
        } catch (error) {
          console.log(error);
        }
      }
      fetchFacturas();
    }, [showF]);

  const [searchTerm, setSearchTerm] = useState('');
  const [showEditModalFactura, setShowEditModalFactura] = useState(false);
  const [editFacturas, setEditFacturas] = useState(null);
 
  const handleShowEditModal = async (Numero_factura, Impresa) => 
  {
    console.log("sas"  + Impresa)
    if(Impresa == 1)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta factura ya no es editable',
    });
    }
    else
    {
      await getFactura(Numero_factura).then((data) => 
      {
        //a
          console.log("sase" + JSON.stringify(data))
         dispatch(setCurrentEditFactura(data.factura));
         dispatch(showModalFactura());
      })
    }
   
};

  const handleSearch = () => {
    const results = facturas.filter((factura) => {
      return (
        factura.noFactura.toLowerCase().includes(searchTerm.toLowerCase()) ||
        factura.cliente.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setFacturas(results);
  };

 /*  const handleEditFactura = (noFactura) => {
    const factura = facturas.find((f) => f.noFactura === noFactura);
    setEditFacturas(factura);
    setShowEditModal(true);
  }; */

  const handlePrintFactura = (noFactura) => {
    console.log(`Imprimir factura ${noFactura}`);
  };

  const handleDeleteFactura = (noFactura) => {
    const nuevasFacturas = facturas.filter((f) => f.noFactura !== noFactura);
    setFacturas(nuevasFacturas);
  };

  

  return (
    <div> 
      <EditRTNNAME/>
   
    <div className="facturas">
      <h1>ADMINISTRAR FACTURAS</h1>
      <div className="busqueda">
        <InputGroup size="sm">
          <FormControl
            type="text"
            placeholder="# de factura o cliente"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="primary" onClick={handleSearch}>
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
          <th>Número de factura</th>
            <th>Nombre del cliente</th>
            <th>RTN del cliente</th>
            <th>Fecha de creación</th>
            <th>Subtotal</th>
            <th>Total</th>
            <th>Usuario que atiende</th>
            <th>Anular</th>
          </tr>
        </thead>
        <tbody>
        {facturas.length > 0 && facturas.map((factura, index) => (
              <tr key={index}>
      <td>{factura.Numero_factura}</td>
      <td>{factura.Nombre_cliente}</td>
      <td>{factura.RTN_cliente}</td>
      <td>{factura.Fecha_creacion}</td>
      <td>{factura.Subtotal}</td>
      <td>{factura.Total}</td>
      <td>{factura.Usuario_atiende}</td>
      <td>{factura.Anular}</td>
      <td>
        
    {factura.estado === 'Pagada' && (
    <span className="pagado">Pagado</span>
        )}
    {factura.estado === 'Pendiente' && (
    <span className="pendiente">Pendiente</span>
        )}
    {factura.estado === 'No pagada' && (
    <span className="no-pagado">No Pagado</span>
        )}

      </td>
      <td>{factura.total}</td>
      <td className="acciones">
        <Button variant="primary" onClick={() => handleShowEditModal(factura.Numero_factura, factura.Pagado)}>
          <FaEdit />
        </Button>{' '}
        <Button variant="info" onClick={() => handlePrintFactura(factura.noFactura)}>
          <FaPrint />
        </Button>{' '}
        <Button variant="danger" onClick={() => handleDeleteFactura(factura.noFactura)}>
          <FaTrash />
        </Button>
      </td>
    </tr>
  ))}
        </tbody>
        </Table>

    </div>
    </div>
    );
    
}

/* {showEditModal && ( <EditFacturaModal factura={editFacturas} handleClose={() => setShowEditModal(false)}
/>
)} */
export default Facturas;




