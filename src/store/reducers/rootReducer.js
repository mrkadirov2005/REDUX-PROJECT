import { combineReducers } from "@reduxjs/toolkit"
import { basketReducer } from "./Slices/basketReducers"
import { productsReducer } from "./Slices/productsReducer"
import { userReducer } from "./Slices/userSlice"

const store = combineReducers({
  basketReducer,
  productsReducer,
  userReducer,
})

export const persistentBlacklist = []
export default store
