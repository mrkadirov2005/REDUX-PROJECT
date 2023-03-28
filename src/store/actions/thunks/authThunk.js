import { AuthApi } from "../../../api/user"

export const loginThunk=  async(userDetails,{rejectWithValue})=>{
    try {
        const response = await AuthApi.loginThunk(userDetails)
   return response.data
   } catch (error) {
    return  rejectWithValue(error.response.data)
     
   }
}
export const registerThunk= async(userDetails,{rejectWithValue})=>{
    try {
        const response =  await AuthApi.registerThunk(userDetails)
        return  response.data
        
      } catch (error) {
        return rejectWithValue(error.response.data)
      }
}
