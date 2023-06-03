import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarInput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [direccion, setDireccion] = useState({value: '', valid:null})
  const [ciudad, setCiudad] = useState({value: '', valid:null})
  const [estado, setEstado] = useState({value: '', valid:null})
  
  return (  
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault()
        updateStep(3)
        console.log(direccion, ciudad, estado)
      }}
    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        onChange={ (input) =>{
          const value = input.target.value
          const valid = validarInput(value)
          setDireccion({value, valid})
          console.log(value, valid)
        } }
        error={direccion.valid === false}
          helperText={direccion.valid === false && "Ingresa tu direccion"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        onChange={ (input) =>{
          const value = input.target.value
          const valid = validarInput(value)
          setCiudad({value, valid})
          console.log(value, valid)
        } }
        error={ciudad.valid === false}
          helperText={ciudad.valid === false && "Ingresa tu ciudad"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        onChange={ (input) =>{
          const value = input.target.value
          const valid = validarInput(value)
          setEstado({value, valid})
          console.log(value, valid)
        } }
        error={estado.valid === false}
          helperText={estado.valid === false && "Ingresa tu Estado"}
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
