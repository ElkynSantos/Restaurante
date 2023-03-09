import { Container, Row, Col, Badge, Button } from 'react-bootstrap';
import './PriFactu.css';

function Invoice() {
  return (
    <Container fluid className="page-content">
      <div className="page-header bg-white border-bottom">
        <h1 className="page-title text-secondary">Garifuna Food</h1>


        <div className="page-info">
          <i className="fa fa-angle-double-right text-primary"></i>
          <span>ID: #111-222</span>
        </div>
        <div className="page-tools">
          <Button className="bg-white btn-light mx-1 text-95" href="#" title="Print">
            <i className="mr-1 fa fa-print text-primary text-120 w-2"></i>
            Print
          </Button>
          <Button className="bg-white btn-light mx-1 text-95" href="#" title="PDF">
            <i className="mr-1 fa fa-file-pdf-o text-danger text-120 w-2"></i>
            Export
          </Button>
        </div>
      </div>

      <Container fluid className="px-0">
        <Row className="mt-4">
          <Col xs={12} lg={12}>
            <Row>
              <Col xs={12}>
                <div className="text-center text-150">
                  <i className="fa fa-book fa-2x text-success mr-1"></i>
                  <img src="" alt="" />
                </div>
              </Col>
            </Row>

            <hr className="row brc-default-l1 mx-n1 mb-4" />

            <Row>
              <Col sm={6}>
                <div>
                  <span className="text-sm text-grey align-middle">Para: </span>
                  <span className="text-600 text-110 text-primary align-middle">Ricardo Vasquez</span>
                </div>
                <div className="text-grey">Salida a tela contiguo </div>
                <div className="text-grey">al obelisco El Progreso,</div>
                <div className="text-grey">Honduras</div>
                <div className="text-grey">(504) 8828-5098</div>
              </Col>

              <Col sm={6}>
                <div className="text-95 mt-3 mt-md-0">
                  <div className="text-grey-m2 mb-1">CAI:</div>
                  <div className="text-secondary-d1">5341151515</div>
                </div>
                <div className="text-95">
                  <div className="text-grey-m2 mb-1">Fecha:</div>
                  <div className="text-secondary-d1">Marzo 06, 2023</div>
                </div>
              </Col>
            </Row>

            <div className="table-responsive mt-4">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr className="bgc-default-tp1">
                    <th className="text-center">#</th>
                    <th>Producto</th>
                    <th className="text-center">Unidad</th>
                    <th className="text-right">Precio Unitario</th>
                    <th className="text-right">Monto</th>
                  </tr>
                </thead>

                <tbody>
                 
                    <tr>
                <td className="text-center">1</td>
                <td>Coca Cola</td>
                 <td className="text-center">1</td>
                <td className="text-right">25 Lps</td>
                <td className="text-right">25 Lps</td>
                    </tr>

                    <tr>

                <td className="text-center">2</td>
                <td>Pescado Frito</td>
                 <td className="text-center">1</td>
                <td className="text-right">120 Lps</td>
                <td className="text-right">120 Lps</td>
              </tr>

              <tr>
              <td className="text-center">3</td>
            <td>Sopa Marinera</td>
            <td className="text-center">1</td>
            <td className="text-right">150 Lps</td>
            <td className="text-right">150 Lps</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Col>
    </Row>

    <div className="row mt-4">
      <div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
        <br />
      </div>

      <div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
        <div className="row my-2 align-items-center bgc-primary-l3 p-2">
          <div className="col-7 text-right">
            SubTotal :
          </div>
          <div className="col-5">
            <span className="text-120 text-secondary-d1">{(256.52).toFixed(2)} Lps</span>
          </div>
        </div>

        <div className="row my-2 align-items-center bgc-primary-l3 p-2">
          <div className="col-7 text-right">
            Impuesto (15%) :
          </div>
          <div className="col-5">
            <span className="text-110 text-secondary-d1">{(38.48).toFixed(2)} Lps</span>
          </div>
        </div>


        <div className="row my-2 align-items-center bgc-primary-l3 p-2">
          <div className="col-7 text-right">
            Total Cuenta :
          </div>
          <div className="col-5">
            <span className="text-150 text-success-d3 op-9">295.00 Lps</span>
          </div>
        </div>

        <div className="row my-2">
          <div className="col-sm-12 text-secondary-d1 text-90 align-self-start mt-3">
            <p className="text-600">Gracias por la Compra </p>

          
          </div>
        </div>
      </div>
    </div>
  </Container>
</Container>

);
}

export default Invoice;