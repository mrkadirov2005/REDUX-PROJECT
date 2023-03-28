import styled from "styled-components"
import { AllRoutes } from "../Routes/Routing"

export const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
export const MainWrapper = styled.section`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  border-color: whitesmoke;

  flex-direction: column;
  width: 100%;
`
export const HeadingWrapper = styled.h1`
  text-align: center;
  width: 100%;
`
export const SailWrapper = styled.section`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  padding: 15px;
  width: 100%;
`
export const InputsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  margin-bottom: 25px;
  /* flex-direction: column; */
`
export const ImgInput = styled.input`
  padding: 5px;
  border: 2px solid grey;
`
export const AmountInput = styled.input`
  padding: 5px;
  border: 2px solid grey;
`
export const PriceInput = styled.input`
  padding: 5px;
  border: 2px solid grey;
`
export const DescriptionInput = styled.textarea`
  padding: 5px;
  border: 2px solid grey;
  color: grey;
  resize: none;
  max-lines: 15;
  width: 50%;
  height: 50px;
  padding: 10px;
`
export const MainSellList = styled.ol`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
  border-color: whitesmoke;
`
