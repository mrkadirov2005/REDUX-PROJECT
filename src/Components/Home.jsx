import React from "react"
import { HomeWrapper, MainWrapper, MainWrapperImg } from "../styles/HomeStyles"

// import {} from "../store/reducerMain"
import ProductsWrapper from "../pages/ProductsWrapper"
import { useSelector } from "react-redux"
import { getProductsList } from "../store/selectors"
// import ProductsWrapper from "./productsWrapper"
// images

const Home = () => {
  const products = useSelector(getProductsList)
  // console.log(products)

  return (
    <HomeWrapper>
      <h1>Free sale</h1>
      <MainWrapper>
        <MainWrapperImg>
          {products.map((product) => (
            <ProductsWrapper product={product} />
          ))}
        </MainWrapperImg>
      </MainWrapper>
    </HomeWrapper>

    // <HomeWrapper>
    //   <h1>Free sale</h1>
    //   <MainWrapper>
    //     <MainWrapperImg></MainWrapperImg>
    //   </MainWrapper>
    // </HomeWrapper>
  )
}

export default Home
