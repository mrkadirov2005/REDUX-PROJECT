import React from "react";
import { MainWrapper } from "../../styles/HomeStyles";
import {
  InputsWrapperForm,
  RegisterWrapper,
  TextTypedInput,
} from "../../styles/RegisterStyles";

import { useDispatch, useSelector } from "react-redux";
import { asyncThunks } from "../../store/actions";
import {  getUserError, getUserLoading } from "../../store/selectors";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { StyledInputField, StyledPasswordInput } from "./styles";
import { AllRoutes } from "../../Routes/Routing";



const Error = styled.p`
  @keyframes Errored {
    from {
      font-size: 25px;
      background-color: green;
      color: white;
    }
    to {
      margin: none;
      font-size: medium;
      background-color: red;
    }
  }
  color: black;
  background-color: orange;
  animation-name: Errored;
  animation-duration: 5s;
`;
const SubmitButton=styled.button`
border: 2px solid grey;
text-transform: uppercase;
color:green;
font-weight: bold;
:active{
  padding: 5px 25px;
  background-color:orange;
}
`


const Login = () => {
const navigate=useNavigate()
  const dispatch = useDispatch();
  const isLoading = useSelector(getUserLoading);
  const userError = useSelector(getUserError);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e)
    await dispatch(
      asyncThunks.login({
        phoneNumber: e.target[0].value,
        password: e.target[1].value,
      })
    );
    navigate("/home")
    
  };
  return (
    <RegisterWrapper>
      <MainWrapper>
        {userError && (
          <Error style={{  color: "red", }}   > {userError.message} </Error>
        )}
        {/* <InputsWrapperForm autoComplete="on" onSubmit={handleSubmit}> */}
        <form onSubmit={handleSubmit}>
        <StyledInputField id="oulined-input"/>
         <StyledPasswordInput id="oulined-Password"/>
        <SubmitButton onSubmit={handleSubmit} disabled={isLoading===true}>{isLoading ? "loading..." : "submit"}</SubmitButton>

        </form>
         

          {/* <TextTypedInput type="password" placeholder="password" /> */}
        {/* </InputsWrapperForm> */}
      </MainWrapper>
    </RegisterWrapper>
  );
};

export default Login;
