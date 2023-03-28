import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncThunks } from "../../store/actions";
import { getUserError } from "../../store/selectors";
import {
  InputsWrapperForm,
  RegisterWrapper,
  SubmitterButtonAxios,
  TextTypedInput,
} from "../../styles/RegisterStyles";
import { getUserLoading } from "../../store/selectors";
import { TextField } from "@mui/material";
import { StyledInputField,  StyledPasswordConfirmationInput,  StyledPasswordInput,  StyledPhoneNumberInput } from "./styles";
import { AllRoutes } from "../../Routes/Routing";

const RegisterPage = () => {

  const dispatch = useDispatch();
  const Gettenerror = useSelector(getUserError);
  const pending = useSelector(getUserLoading);
 
  const navigate = useNavigate();

  const registerUser = async (e) => {
    e.preventDefault();
    console.log(e);
    await dispatch(
      asyncThunks.register({
        username: e.target[0].value,
        phoneNumber: e.target[1].value,
        password: e.target[2].value,
        confirmPassword: e.target[3].value,
      })
    );
    navigate(AllRoutes.Login);
  };

  // const registerusersB = AuthApi.registerUsers
 return ( 
    <RegisterWrapper>
      <h1>{Gettenerror ? Gettenerror.message : null}</h1>
   
    <InputsWrapperForm component="form" onSubmit={registerUser}  >
      <StyledInputField id="outlined-basic"   />
      <StyledPhoneNumberInput id="filled basic"/>
      <StyledPasswordInput id="standard-basic"/>
      <StyledPasswordConfirmationInput id="standard-basic"/>
      <SubmitterButtonAxios>
          {pending ? "loading... " : "Register"}
        </SubmitterButtonAxios>

    </InputsWrapperForm>
    </RegisterWrapper>
    )
 



}





export default RegisterPage;
