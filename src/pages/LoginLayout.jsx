import React, { useState } from "react"
import { LogginIn } from "../styles/loginLayout"
import Login from "../Components/loginPage/Login"
import RegisterPage from "../Components/RegisterPage/RegisterPage"
import styled from "styled-components"

export const Button=styled.button`
padding: 5px 15px;
margin: 0;
background-color: aliceblue ;
border: 1px solid grey;
font-size: 30px;
text-transform: capitalize;


:hover{
background-color: orange;
}
:active{
  background-color: green;
}

`
const Message=styled.h1`
color:darkblue;
background-color: aliceblue;
text-transform: capitalize;
`




const LoginLayout = () => {
const fontWeight=400

  const [isLoginForm, setIsLogInForm] = useState(false)
  const handleRegister = () => setIsLogInForm(!isLoginForm)


  
  return (
    <LogginIn>
      {!isLoginForm ? (
        <div style={{width:"100%"}}>
          <RegisterPage />
         <Message style={{fontWeight:`${fontWeight}`}}> if you have already registered, please click <Button onClick={handleRegister}>login</Button> button</Message>
        </div>
      ) : (
        <div style={{width:"100%"}}>
          <Login />
          
          <Message  style={{fontWeight:`${fontWeight}`}}> if you have not  registered  yet, please click <Button onClick={handleRegister}>register</Button> button</Message>
        </div>
      )}
    </LogginIn>
  )
}

export default LoginLayout
