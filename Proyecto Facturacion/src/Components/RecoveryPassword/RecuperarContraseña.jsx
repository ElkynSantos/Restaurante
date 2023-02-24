import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function RecuperarContraseña() {
  
    return (
      <div>
      <section class="h-screen">
        <div class="px-6 h-full text-gray-800">
          <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
              <img
                src="https://scontent.fsap12-2.fna.fbcdn.net/v/t39.30808-6/257921772_106348201871327_2934671299322626152_n.png?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=7J8RlxMS8uoAX90v-4k&_nc_ht=scontent.fsap12-2.fna&oh=00_AfBmL2jIEXBobkE6k4HOFgpGPZTed-tosw3zpLUfCjFoEw&oe=63E2E1FC"
                class="w-full"
                alt="Sample image"
              />
            </div>
            <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                  <h1 class="text-2xl font-bold mb-0 mr-4">
                    Su contraseña a sido cambiada correctamente{" "}
                  </h1>
                </div>

                <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <h2>Regrese a HOME </h2>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

   
export default RecuperarContraseña;
