import React, { useContext, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import {
  ListItem,
  ListWrapperUL,
  Span,
  TotalWrapper,
} from "../styles/HeaderStyles"
import img from "../img/basket.jpg"
import { useSelector } from "react-redux"
import { getIsLoggedIn, getTotalSumm } from "../store/selectors"
import { AllRoutes } from "../Routes/Routing"
import styled from "styled-components"

const Header = () => {
  const isloggedin = useSelector(getIsLoggedIn)
const navigate=useNavigate()
  const { pathname } = useLocation()

  const stated = useSelector(() => getTotalSumm)
  const routes = [
    { name: "Home", path: "home" },
    { name: "Basket", path: "/basket" },
    // { name: "Sell", path: "/sell" },
    // { name: "Log in", path: "login" },
  ]
  const nonloggedRegisters=[
    { name: "Log in", path: "login" },

  ]

  const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: ${pathname === AllRoutes.Login ? "darkblue" : "black"};
  `
  const isLoggedIn=useSelector(getIsLoggedIn)
  // if (isloggedin)
  return (
    <HeaderWrapper>
      <h1>M</h1>
      <ListWrapperUL className='--wrapper'>
        { isloggedin?  routes.map((route) => {
          return (
            <ListItem key={route.path}>
              <Link style={{ textDecoration: "none" }} to={route.path}>
                {route.name}
              </Link>
           </ListItem>
          )
        }) :   
        
        nonloggedRegisters.map((route) => {
          return (
            <ListItem key={route.path}>
              <Link style={{ textDecoration: "none" }} to={route.path}>
                {route.name}
              </Link>
           </ListItem>
          )
        })
        
        
         }
      </ListWrapperUL>
      <TotalWrapper>
        <img src={img} style={{ width: "50px" }} alt='' />
        {stated > 0 ? <Span>{stated} </Span> : <h1></h1>}
      </TotalWrapper>
      <button style={{color:"white"}} 
      onClick={()=>{window.localStorage.clear("persis:root");  return navigate(AllRoutes.Login) }}
      
      
      
       >sign out</button>

    </HeaderWrapper>
  )
}

export default Header
