import styled from "styled-components"
const button = "orange"

export const RegisterWrapper = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
`
export const InputsWrapperForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: lightgrey;
  border: 3px solid darkgrey;
  width: 100%;
  /* height: 500px; */
`
export const TextTypedInput = styled.input`
  padding: 10px;
  height: 25px;
  background-color: aliceblue;
  width: 80%;
  :hover {
    background-color: grey;
  }
  margin-bottom: 15px;
`
export const SubmitterButtonAxios = styled.button`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  background-color: ${button};
`
