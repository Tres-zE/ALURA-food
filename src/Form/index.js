import React, {useState, useEffect} from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import DatosUsuario from "./DatosUsuario";
import DatosPersonales from "./DatosPersonales";
import DatosEntrega from "./DatosEntrega";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "../Step";

//VALIDACIONES
import { validarEmail, validarPassword } from "./DatosUsuario/Validaciones";

const Form = () => {

  const [step,setStep] = useState(0)
  const [pasos,setPasos] = useState({})

  useEffect(() => {
    console.log("useEffect")
  })

  useEffect(() => {
    console.log("Se ha actualizado el step: ", step)
  }, [step])

  //ASI SE MANDA A LLAMAR UNA API
  // useEffect(() => {
  //   async function getData(){
  //     try{
  //     const data = await fetch("https://jsonplaceholder.typicode.com/posts")
  //     const posts = await data.json()
  //     console.log(posts)
  //   }catch(e){
  //     console.log(e)
  //   }
  //   }

  //   getData()
     
  // })

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

  console.log("FORM COMPONENT")

  const onSubmit = (e) =>{
    e.preventDefault()
    let newStep = step + 1
    setStep(newStep)
    console.log("newStep", newStep)
    console.log(step)
  }

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value
    const valid = validator(value)
    console.log(value);
    console.log(valid)
    console.log("position", position)
    console.log("currentStep", currentStep)
    console.log("validator", validator)

    stepsFlow[0].inputs[0].label = "Nombre"
    console.log(stepsFlow)
  }

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa un correo electronico valido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa una contraseña valida, al menos de 8 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit
    },
    1: {
      inputs: [
        {
          label: "Correo electronico",
          type: "email",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa un correo electronico valido",
          validator: validarEmail,
        },
        {
          label: "Contraseña",
          type: "password",
          value: "",
          valid: null,
          onchange: handleChange,
          helperText: "Ingresa una contraseña valida, al menos de 8 caracteres y maximo 20",
          validator: validarPassword,
        },
      ],
      buttonText: "Siguiente",
      onSubmit
    }
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
        {/* {steps[step]} */}
        <Step data = {stepsFlow[step]} step={step}/>
      </FormSpace>                     
    </Box>
  );
};

export default Form;
