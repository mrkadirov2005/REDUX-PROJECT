import { TextField } from "@mui/material";
import styled from "styled-components";

export const StyledInputField=styled(TextField).attrs({
    variant:"filled",
    type:"text",
    label:"phone number"
    })`
padding: 15px;
width: 80%;
border: 0;
outline:none;
background-color:grey;
margin: 255px;
`

export const StyledPasswordInput=styled(TextField).attrs({
    variant:"filled",
    type:"password",
    label:"password"
    })`
padding: 15px;
width: 80%;
border: 0;
outline:none;
background-color:grey;
margin: 25px;
`