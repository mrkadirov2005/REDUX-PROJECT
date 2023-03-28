import React, { useReducer, useState } from "react"
import { useLocation } from "react-router-dom"
// import {  initialState,  numberReducer,  shoppingReducer,} from "../store/reducerMain"
import { ListItem } from "../styles/HomeStyles"
import {
  AmountInput,
  DescriptionInput,
  HeadingWrapper,
  ImgInput,
  InputsWrapper,
  MainSellList,
  MainWrapper,
  PriceInput,
  SailWrapper,
} from "../styles/SellStyles"
import { images } from "./Home"

// const initialImages = [ { path: "../img/....", price: 15, description: "cheap" } ]
// import { initialState } from "../reducers/reducerMain"

const Sell = () => {
  const [img, setImg] = useState("")
  const [readyImg, setReadyImg] = useState()

  const [cost, setCost] = useState(0)
  const [readycost, setReadyCost] = useState(0)

  const [Described, setDescribed] = useState(0)
  const [ReadyDescribed, setReadyDescribed] = useState(0)
  const [number, setNumber] = useState(0)

  const [permit, setPermit] = useState(false)

  const [ready, setReady] = useState({})

  const addReady = () => {}

  // console.log(img.targer.files[0])

  // console.log(typeof img, img)

  const handlePriceInput = (e) => setCost(e.target.value)

  const handleTextInput = (e) => setDescribed(e.target.value)
  //
  const preview = () => {
    !readyImg ? setReadyImg(URL.createObjectURL(img)) : setReadyImg("")

    cost ? setReadyCost(cost) : setReadyCost("")

    Described ? setReadyDescribed(Described) : setReadyDescribed("")

    setPermit(!permit)
  }

  return (
    <MainWrapper>
      <HeadingWrapper>Sell your products</HeadingWrapper>
      <SailWrapper>
        <InputsWrapper className='inputswrapper'>
          <ImgInput
            onChange={(event) => {
              setImg(event.target.value)
            }}
            placeholder='select your product'
            type='file'
            autoComplete='on'
          />
          <AmountInput
            onChange={(event) => {
              setNumber(event.target.value)
            }}
            placeholder='type the amount you have'
            type='number'
            autoComplete='on'
          />

          <PriceInput
            onChange={handlePriceInput}
            placeholder='type the Price in dollar'
            type='number'
            autoComplete='on'
          />
        </InputsWrapper>
        <DescriptionInput
          onChange={handleTextInput}
          placeholder='type the Description'
          type='text'
          autoComplete='on'
        />

        <button type='submit' onClick={preview}>
          {readyImg ? "reset" : "preview"}
        </button>
      </SailWrapper>

      <MainSellList>
        {permit ? (
          <ListItem key={img}>
            <img src={readyImg} alt='' />
            <h1>{readycost}</h1>
            <p>{ReadyDescribed}</p>
          </ListItem>
        ) : (
          <h1></h1>
        )}

        <button
          disabled={!ready}
          onClick={() => {
            // dispatch({
            //   type: "ADD-TO-GLOBAL",
            //   payload: {
            //     path: readyImg,
            //     price: readycost,
            //     description: ReadyDescribed,
            //     amount: number,
            //   },
            // })

            console.log(ready)
          }}>
          Sell
        </button>
      </MainSellList>
    </MainWrapper>
  )
}
export default Sell
