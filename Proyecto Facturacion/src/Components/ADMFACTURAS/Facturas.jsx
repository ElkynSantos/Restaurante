import React, { useState,useEffect } from 'react';
import { InputGroup, FormControl, Button, Table } from 'react-bootstrap';
import { FaSearch, FaEdit, FaPrint, FaTimes } from 'react-icons/fa';
import { anularFactura, getFactura} from '../../services/Factura';
import axios from 'axios'
import { setCurrentEditFactura, showModalFactura , closeModalFactura} from '../../features/editFacturaSlice';
import EditRTNNAME from  '../editRTN&NAME';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import './Fact.css';




function Facturas() {
  const dispatch = useDispatch();
  const [anular, setAnular] = useState(false);
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
    }, [showF, anular]);

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

  const handlePrintFactura = (id, Numero_factura,Nombre_cliente,RTN_cliente) => 
  {
			var a = window.open('', '', 'height=1000, width=1500');
			a.document.write('<html>');
      a.document.write('<header>');
      a.document.write('<style>');
      a.document.write('header {text-align: center;}');
      a.document.write('body {text-align: justify;} ');
      a.document.write('</style>');
      a.document.write('Espresso Americano S.A.');
      a.document.write('<br>');
      a.document.write('"La pasión del café"');
      a.document.write('<br>');
      a.document.write('Col. Miramontes 5ta Calle #2212');
      a.document.write('<br>');
      a.document.write('Tegucigalpa M.D.C. Honduras');
      a.document.write('<br>');
      a.document.write('Local: Espresso Americano/UNITEC');
      a.document.write('<br>');
      a.document.write('<br>');
      a.document.write('"F A C T U R A"');
      a.document.write('<br>');
      a.document.write('</header>');
			a.document.write('<body>');
      a.document.write('Correo: garifunasfood@gmail.com');
      a.document.write('<br>');
      a.document.write('RTN: 00000000000000');
      a.document.write('&emsp;');
      a.document.write('Tel: 89417810');
      a.document.write('<br>');
      a.document.write('C.A.I.: 0000000000000000000000000000');
      a.document.write('<br>');
      a.document.write('Fecha: 22/02/2023');
      a.document.write('<br>');
      a.document.write('Cliente: '+Nombre_cliente);
      a.document.write('<br>');
      a.document.write('RTN: '+RTN_cliente);
      a.document.write('<br>');
      a.document.write('No Compra Exenta:');
      a.document.write('<br>');
      a.document.write('No Constancia Registro Exonerado:');
      a.document.write('<br>');
      a.document.write('No Registro SAG:');
      a.document.write('<br>');
      a.document.write('Original: Cliente ');
      a.document.write('&emsp;');
      a.document.write('Copia: O.T. Emisor');
      a.document.write('<br>');
			a.document.write('</body></html>');
			a.document.close();
			a.print();
      
  };

  const handleDeleteFactura = async(id, Anular) => 
  {
    console.log("id" + id);
    console.log("Anular" + Anular);
    if(Anular == 1)
    {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Esta factura ya no es editable.',
    });
    setAnular(!anular);
    }
    else
    {
     const dataF2 = await anularFactura(id);
     Swal.fire({
      position: 'top-center',
      icon: 'success',
      title: dataF2.msg,
      showConfirmButton: false,
      timer: 1500,
  });
    setAnular(!anular);
    }
  };

  

  return (
    <div> 
     
      <EditRTNNAME/>
    <div id ="gugugaga"></div>
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
            <th>Anulada</th>
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
        <Button variant="info" onClick={() => handlePrintFactura(factura.id, factura.Numero_factura, factura. Nombre_cliente,factura.RTN_cliente )}>
          <FaPrint />
        </Button>{' '}
        <Button variant="danger" onClick={() => handleDeleteFactura(factura.id, factura.Anular)}>
          <FaTimes />
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


export default Facturas;




