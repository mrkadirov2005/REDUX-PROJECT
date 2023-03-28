import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import Layout from "../Layout/Layout"
import Basket from "../Components/Basket"
import Home from "../Components/Home"
import RegisterPage from "../Components/RegisterPage/RegisterPage"
import LoginLayout from "../pages/LoginLayout"
import ProtectedLayout from "../Components/ProtectedLayout"

export const AllRoutes = {
  Navigated: "/",
  Home: "home",
  Basket: "basket",
  Sell: "sell",
  Register: "register",
  Login: "/login",
}
const Routing = () => {
  return (
    <Routes>

      <Route element={<Layout />}>
      <Route path={"/"} element={<Navigate to={AllRoutes.Home} />} />
        <Route path={AllRoutes.Register} element={<RegisterPage />} />
        <Route path={AllRoutes.Login} element={<LoginLayout />} />
        <Route path={AllRoutes.Basket} element={<Basket />} />
        <Route element={<ProtectedLayout />}>
          <Route path={AllRoutes.Home} element={<Home />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default Routing
