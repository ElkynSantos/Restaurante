import React from 'react';
import ReactToPrint from 'react-to-print';
import { useDispatch, useSelector } from 'react-redux';
import { showModalMI, closeModalMI } from '../../features/modalImprimirSlice';
export class ComponentToPrint extends React.PureComponent
 {
  
    render() 
    
    {
     ;
      const dispatch = useDispatch();

      // const [show, setShow] = useState(false);
      const handleClose = () => {
          dispatch(closeModalFactura());
      };
  
      const handleShow = () => {
          dispatch(showModalFactura());
      };
      const showM = useSelector((state) => state.ModalImprimir)
      return (
        <table>
          <thead>
            <th>column 1</th>
            <th>column 2</th>
            <th>column 3</th>
          </thead>
          <tbody>
            <tr>
              <td>data 1</td>
              <td>data 2</td>
              <td>data 3</td>
            </tr>
          </tbody>
        </table>
      );
    }
  }