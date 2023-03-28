import { createSlice } from "@reduxjs/toolkit"
import { mockProducts } from "../../../mocks/mocks"

export const initialState = {
  products: mockProducts,
}

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})
export const productsReducer = productsSlice.reducer
