import React, {useState} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {

  const [step,setStep] = useState(0)
  //REFERENCIA
  // step = 0 ------> <DatosUsuario />
  // step = 1 ------> <DatosPersonales />
  // step = 2 ------> <DatosEntrega />
  // step = 3 ------> <Complete />
  //FORMA1 CON SWITCH
  //  const selectStep = () => {
  //    switch(step){
  //     case 0: return <DatosUsuario />
  //     break;
  //     case 1: return <DatosPersonales />
  //     break;
  //     case 2: return <DatosEntrega />
  //     break;
  //     case 3: return <Complete />
  //   }
  //  }

  //   FORMA 2 CON ARREGLO
  //   const steps =[
  //     0: <DatosUsuario />, 
  //     1: <DatosPersonales />, 
  //     2: <DatosEntrega />, 
  //     3: <Complete />
  // ]
  //FORMA 3 COMO OBJETO

  const updateStep = (step) => {
    console.log("actualizar paso", step)
    setStep(step)
  }

  const steps ={
    0: <DatosUsuario  updateStep = {updateStep}/>, 
    1: <DatosPersonales updateStep = {updateStep}/>, 
    2: <DatosEntrega updateStep = {updateStep}/>, 
    3: <Complete />
  }

  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">AluraFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step <3 && <Stepper step = {step}/>}
        {/* <DatosUsuario />
        <DatosPersonales />
        <DatosEntrega /> */}
        {steps[step]}
      </FormSpace>
    </Box>
  );
};

export default Form;
