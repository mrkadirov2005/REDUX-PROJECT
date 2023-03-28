import { useLocation } from "react-router-dom"
import styled from "styled-components"
import { AllRoutes } from "../Routes/Routing"

export const ListWrapperUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  text-decoration: none;
  list-style: none;
  font-size: 25px;
  color: black;
  font-weight: 700;
`

export const TotalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 5px;
  border-radius: 5px;
`

export const Span = styled.span`
  font-size: 25px;
  font-weight: 700;
  font-style: italic;
  background-color: rgb(173, 171, 171);
  border: 2px ridge brown;
  padding: 5px;
  height: 25px;
  display: flex;
  align-items: center;
`
export const ListItem = styled.li`
  display: flex;
  :hover {
    color: orange;
    text-decoration: underline;
    font-style: italic;
    flex-direction: column;
  }
`
