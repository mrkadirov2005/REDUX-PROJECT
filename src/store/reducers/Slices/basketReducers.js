import { createSlice } from "@reduxjs/toolkit"
import { mockProducts } from "../../../mocks/mocks"

export const initialState = {
  products: [],
  totalSum: 0,
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    Add: (state, action) => {
      state.totalSum = state.totalSum + action.payload.price
      state.products = [...state.products, { ...action.payload, quantity: 1 }]
    },
    remove: (state, action) => {
      state.totalSum = state.totalSum - action.payload.price
      state.products = state.products.filter(
        (basketItem) => basketItem.id !== action.payload.id
      )
    },
    increase: (state, action) => {
      state.products = state.products.map((basketItem) => {
        const isExist = basketItem.id === action.payload.id
        if (isExist) {
          return { ...basketItem, quantity: basketItem.quantity + 1 }
        }
        return basketItem
      })
      state.totalSum = state.totalSum + action.payload.price
    },
    decrease: (state, action) => {
      state.products = state.products.map((basketItem) => {
        const isExist = basketItem.id === action.payload.id
        if (isExist) {
          return { ...basketItem, quantity: basketItem.quantity - 1 }
        }
        return basketItem
      })
      state.totalSum = state.totalSum - action.payload.price
    },
  },
})
export const basketActions = basketSlice.actions

export const basketReducer = basketSlice.reducer
