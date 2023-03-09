/*import React from "react";
import { Button } from "react-bootstrap";
import { PDFDownloadLink, PDFViewer, Document, Page, Text, View, Image } from "@react-pdf/renderer";

const Factura = () => {
  return (
    <>
      <Image src="logo.png" />
      <Text>Fecha y hora actual: {new Date().toLocaleString()}</Text>
      <Text>Dirección del local: 123 Calle Principal</Text>
      <View>
        <Text>Items comprados:</Text>
        <Text>Item 1 - $10</Text>
        <Text>Item 2 - $20</Text>
        <Text>Item 3 - $30</Text>
      </View>
      <Text>Total: $60</Text>
      <Text>Número de factura: 12345</Text>
      <Text>Lo esperamos pronto</Text>
      <Button variant="primary">
        <PDFDownloadLink document={<FacturaPDF />} fileName="factura.pdf">
          Descargar factura
        </PDFDownloadLink>
      </Button>
    </>
  );
};

const FacturaPDF = () => {
  return (
    <Document>
      <Page>
        <Image src="logo.png" />
        <Text>Fecha y hora actual: {new Date().toLocaleString()}</Text>
        <Text>Dirección del local: 123 Calle Principal</Text>
        <View>
          <Text>Items comprados:</Text>
          <Text>Item 1 - $10</Text>
          <Text>Item 2 - $20</Text>
          <Text>Item 3 - $30</Text>
        </View>
        <Text>Total: $60</Text>
        <Text>Número de factura: 12345</Text>
        <Text>Lo esperamos pronto</Text>
      </Page>
    </Document>
  );
};

const App = () => {
    return (
      <>
        <Factura />
        <PDFViewer>
          <FacturaPDF />
        </PDFViewer>
      </>
    );
  };
  
  export default App;
  */