//Import de librería de easyinvoice
var easyinvoice = require('easyinvoice');
//import de librería fs de NodeJS para guardar archivo
var fs = require('fs');
var path = require('path');

const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day}-${month}-${year}`;

const assetsDirectory = path.resolve(process.cwd(), "Proyecto Facturacion/public/assets/images");
//variable donde van los datos de la factura
var data = {

    //Información del cliente
    "client":{
        "company": "Daniel Castro",
        "address": "Unitec",
        "zip": "21101",
        "city": "SPS",
        "country": "Honduras"
    },

    //Información del restaurante
    "sender":{
        "company": "Garifunas Food",
        "address": "CA-13",
        "zip": "21101",
        "city": "Villanueva",
        "country": "Honduras"
    },

    //imágenes
    "images":{
        //Logo el cual puede ser url, una imagen hecha un string codificada en base64 o leída de un archivo local como base64
        //logo: "url",
        //logo: "string base64",
        logo: fs.readFileSync(path.join(assetsDirectory, "logo.png"), 'base64'),

        //fondo, funciona ugual que el logo
        //background: "url",
        //background: "string base64",
        //background: fs.readFileSync(path.join(assetsDirectory, "imagen"), 'base64'),
    },

    //Información de la factura. Fecha, número de factura, etc...
    "information":{
        "number": "0001",
        "date": currentDate
    },

    //Productos que se facturaron
    "products": [
        {
            "quantity": "2",
            "description": "Limonada",
            "tax-rate": 15,
            "price": 35
        },
        {
            "quantity": "1",
            "description": "Pollo Frito",
            "tax-rate": 15,
            "price": 90
        },
        {
            "quantity": "1",
            "description": "Pescado Frito",
            "tax-rate": 12,
            "price": 120
        }
    ],

    //Se puede poner un mensaje en el fondo de la factura
    "bottomNotice": "¡Vuelva Pronto!",

    //Configuración de factura
    "settings":{
        //moneda de la factura
        "currency": "HNL",
        //formato de la moneda ej: 123,456.25 OR 123.456,25
        "locale": "en-US",
        //tipo de impuesto. La otra opción es gst
        "tax-notation": "vat",

        //Dimensiones de la factura
        //"margin-top": 25,
        //"margin-right": 25,
        //"margin-left": 25,
        //"margin-bottom": 25,

        //Formato del papel
        //"format": "A4", //Otras opciones: A3, A4, A5, Legal, Letter, Tabloid
        //"height": "1000px", // unidades aceptadas: mm, cm, in, px
        //"width": "500px", // mismas unidades que height
        //"orientation": "landscape" // portrait or landscape
    },

    //traducción de las opciones de la factura
    "translate":{
        "invoice": "Factura",  // Default to 'INVOICE'
         "number": "Número", // Defaults to 'Number'
         "date": "Fecha", // Default to 'Date'
         "due-date": "Fecha Final", // Defaults to 'Due Date'
         "subtotal": "Subtotal", // Defaults to 'Subtotal'
         "products": "Productos", // Defaults to 'Products'
         "quantity": "Cantidad", // Default to 'Quantity'
         "price": "Precio", // Defaults to 'Price'
         "product-total": "Total", // Defaults to 'Total'
         "total": "Total" // Defaults to 'Total'   
    },

    //Opción para usar plantillas ya hechas de facturas. Siempre en base64
    /*"customize":{
        "template": fs.readFileSync('plantilla.html', 'base64')
    }*/

    //Otro ejemplo Customize
    /*
    var html = '<p>Hello world! This is invoice number %number%</p>';

const data = {
    customize: {
        // btoa === base64 encode
        template: btoa(html) // Your template must be base64 encoded
    },
    information: {
        number: '2022.0001'
    }
};

retorna un pdf con el contenido "Hello World! This is invoice number 2022.0001"
    */
};

//  Función de la librería para crear una factura
//La variable result tira un pdf codificado en base64
easyinvoice.createInvoice(data, function (result) {

    //función para guardar el pdf
    fs.writeFileSync("invoice.pdf", result.pdf, 'base64');
});

//Función para descargar factura con botón. SOLO EN BROWSER
/*
var data = {};
const result = await easyinvoice.createInvoice(data);
easyinvoice.download('myInvoice.pdf', result.pdf);
*/

//Función para renderizar/ver la factura. SOLO EN BROWSER
/*
//En el HTML
//Incluir solo cuando se va a renderizar
<script src="https://unpkg.com/pdfjs-dist/build/pdf.min.js"></script>
<script src="https://unpkg.com/pdfjs-dist/build/pdf.worker.min.js"></script>


//El pdf será renderizado dentro del div
<div id="pdf"></div>

//CSS opcional
#pdf {
    text-align: center;
}

#pdf canvas {
    border: 1px solid black;
    width: 95%;
}

//Función para el render
var data = {};
const elementId = 'pdf';
const result = await easyinvoice.createInvoice(data);
await easyinvoice.render(elementId, result.pdf);

*/