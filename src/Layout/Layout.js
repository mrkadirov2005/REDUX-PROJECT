import React, { createContext } from "react"
import { Outlet } from "react-router-dom"
import Basket from "../Components/Basket"
import Header from "../Header/Header"
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}

export default Layout
