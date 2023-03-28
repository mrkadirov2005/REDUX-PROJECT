import "./App.css"
import { useLocation, useNavigate } from "react-router-dom"
import Routing, { AllRoutes } from "./Routes/Routing"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "./store/selectors"

function App() {
  const { pathname } = useLocation()
  const isLoggedIn = useSelector(getIsLoggedIn)
  const navigate = useNavigate()
//   useEffect(() => {
        
//  if (!isLoggedIn) {
//    if (pathname === AllRoutes.Login) {
//      return
//    }
//    return navigate(AllRoutes.Login)
//  } else {
//    navigate(AllRoutes.Home)
//  }
    
  // }, [isLoggedIn])}

  return <Routing />
}

export default App
