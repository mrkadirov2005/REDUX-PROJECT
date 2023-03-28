import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { AllRoutes } from "../Routes/Routing"
import { getIsLoggedIn } from "../store/selectors"


const ProtectedLayout = ({ children }) => {

  const isLoggedIn=useSelector(getIsLoggedIn)
  if (!isLoggedIn) return <Navigate to={AllRoutes.Login} />

  return <Outlet/> || children
}

export default ProtectedLayout
