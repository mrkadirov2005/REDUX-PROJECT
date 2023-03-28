import styled from "styled-components"

export const HomeWrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
`
export const MainWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  background-color: whitesmoke;
  border-color: whitesmoke;
  flex-direction: column;
  width: 100%;
  height: 100%;
`
export const MainWrapperImg = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  border-color: whitesmoke;
`

export const ListItem = styled.li`
  display: flex;
  list-style-type: none;
  width: 300px;
  height: auto;
  flex-direction: column;
  margin-bottom: 15px;
  background-color: orangered;
  border: 2px solid orange;
  padding: 10px;
`
export const ImgList = styled.img`
  display: flex;
  background-color: black;
  width: 300px;
  height: 350px;
  margin-bottom: 10px;
`
export const Price = styled.span`
  display: flex;
  font-size: 18px;
  font-style: italic;
  font-weight: 900;
  text-align: center;
  /* width: 100%; */
  margin-right: auto;
  margin-left: auto;
`
export const Info = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font: 700;
  color: blue;
  background-color: white;
`

export const PickerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: greenyellow;
`
