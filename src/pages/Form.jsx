import React, { useState } from "react";
import api from '../API/api.js';
import { CustomButton } from "../components/Buttons.jsx";
import Label from "../components/Labels.jsx";

function Form() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [error, setError] = useState(null);

  const handleCorreoChange = (newCorreo) => {
    setCorreo(newCorreo);
  };

  const handleContrasenaChange = (newContrasena) => {
    setContrasena(newContrasena);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      const response = await api.post('/users', {
        correo: correo,
        contrasena: contrasena,
      });
  
      const responseData = response.data;
  
      if (responseData.user) {
        // Registro exitoso, puedes acceder a responseData.user para obtener detalles del usuario
        console.log('Registro exitoso:', responseData.message);
        console.log('Detalles del usuario:', responseData.user);
      } else {
        // Error en el registro
        setError(responseData.message);
        console.error('Error en el registro:', responseData.message);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error al verificar el correo y la contraseña:', error);
    }
  };
  

  return (
    <>
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="col-mb-3">
              <h1 className="text-center">Ingresa tus datos</h1>
              <Label
                htmlFor="correo"
                labelText="Ingresa Correo"
                inputType="email"
                onChange={handleCorreoChange}
              />
            </div>
            <div className="col-mb-3">
              <Label
                htmlFor="contrasena"
                labelText="Ingresa Contraseña"
                inputType="password"
                onChange={handleContrasenaChange}
              />
            </div>
            <div className="col-mb-3">
              {error && <p>Error: {error}</p>}
              <CustomButton
                link={"/"}
                color={"primary"}
                description={"Ir a "}
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
