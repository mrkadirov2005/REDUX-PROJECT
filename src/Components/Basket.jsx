import React from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { basketActions } from "../store/reducers/Slices/basketReducers"
import { getBasketProducts } from "../store/selectors"
import "./styles.css"
// styles are written in this component
const GlobalWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const UlItem = styled.ul`
  display: flex;
  background-color: grey;
  justify-content: space-between;
  // flex-wrap: wrap;
  width: 70%;
  height: 100vh;
`

const Basket = () => {
  const dispatch = useDispatch()
  const removeFromBasket = (product) => dispatch(basketActions.remove(product))

  const basketItems = useSelector(getBasketProducts)
  console.log(basketItems)
  return (
    <GlobalWrapper>
      <h1>basket</h1>
      <UlItem>
        {basketItems.map((basket) => {
          return (
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                width: 250,
                height: 350,
                backgroundColor: "brown",
              }}>
              <img
                style={{ width: "250px" }}
                src={basket.path}
                alt={basket.name}
              />
              <p
                style={{
                  color: "darkblue",
                  textTransform: "capitalize",
                  textAlign: "center",
                }}>
                {basket.description}
              </p>
              <span
                style={{
                  color: "darkblue",
                  textTransform: "capitalize",
                  textAlign: "center",
                }}>
                {basket.price}
              </span>
              <span
                style={{
                  color: "darkblue",
                  textTransform: "capitalize",
                  textAlign: "center",
                }}>
                {basket.quantity}
              </span>
              <button onClick={() => removeFromBasket(basket)}>delete</button>
            </li>
          )
        })}
      </UlItem>
    </GlobalWrapper>
  )
}

export default Basket
