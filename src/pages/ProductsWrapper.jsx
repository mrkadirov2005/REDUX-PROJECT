import { React, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  basketActions,
  basketReducer,
} from "../store/reducers/Slices/basketReducers"
import { getBasketProducts } from "../store/selectors"
// import { loadState } from "../store/reducerMain"
import {
  ImgList,
  Info,
  ListItem,
  PickerButton,
  Price,
} from "../styles/HomeStyles"

const ProductsWrapper = ({ product }) => {
  const dispatch = useDispatch()
  const basketProducts = useSelector(getBasketProducts)

  // isBasketProducts

  const basketProduct = basketProducts.find(
    (basketItem) => basketItem.id === product.id
  )
  const addToProducts = (product) => dispatch(basketActions.Add(product))
  const RemoveFromProducts = (product) =>
    dispatch(basketActions.remove(product))

  const increaseQuantity = (product) => {
    const { id, price, path } = product

    dispatch(basketActions.increase({ id, price, path }))
  }
  const decreaseQuantity = (product) => {
    const { id, price } = product

    dispatch(basketActions.decrease({ id, price }))
  }
  return (
    <ListItem key={product.id}>
      <ImgList src={product.path} alt={product.description} />
      <p>{product.name}</p>
      <Price>{product.price}$</Price>
      <Info>{product.description}</Info>

      <PickerButton>
        {!basketProduct ? (
          <button onClick={() => addToProducts(product)}>add to basket</button>
        ) : (
          <div>
            <button onClick={() => decreaseQuantity(product)}>-</button>
            <span>
              {basketProduct.quantity > 0 ? basketProduct.quantity : null}
            </span>

            <button
              onClick={() => {
                increaseQuantity(product)
              }}>
              +
            </button>
          </div>
        )}
      </PickerButton>
    </ListItem>
  )
}

export default ProductsWrapper
