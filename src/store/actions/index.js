import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./thunks/authThunk";

// first argument is name,second is pre-created function  

export const asyncThunks={
 login:createAsyncThunk("login",loginThunk),
 register:createAsyncThunk("register",registerThunk)
    
}