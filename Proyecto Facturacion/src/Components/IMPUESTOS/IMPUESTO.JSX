import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


function IMPUESTO() {
  
    return (
   
      <div>
   <form class="row g-3">
  <div class="col-12">
    <label for="inputAddress" class="form-label">Precio Normal</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Precio de compra"/>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Precio Actual</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Precio actual con el impuesto"/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Impuesto</label>
    <select id="inputState" class="form-select">
      <option selected>Escoger...</option>
      <option>15%</option>
    </select>
  </div>
  <div class="col-8">
    <label for="inputZip" class="form-label">Clase de impuesto</label>
    <input type="text" class="form-control" id="inputZip"/>
  </div>
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Aceptar</button>
  </div>
</form>
<div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://scontent.fsap12-2.fna.fbcdn.net/v/t39.30808-6/257921772_106348201871327_2934671299322626152_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7J8RlxMS8uoAX90v-4k&_nc_ht=scontent.fsap12-2.fna&oh=00_AfBmL2jIEXBobkE6k4HOFgpGPZTed-tosw3zpLUfCjFoEw&oe=63E2E1FC"
                class="w-full"
                alt="Sample image"
              />
            </div>
  </div>
        
      );
    }
export default IMPUESTO;
