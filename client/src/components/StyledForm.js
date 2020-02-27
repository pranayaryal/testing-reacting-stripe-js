import styled from 'styled-components';

export const StyledForm =  styled.form`
 display: flex; 
 flex-direction: column;
 max-width: 70vw;
 text-align: center;
 padding-left: 10rem;
 padding-right: 10rem;
 padding-top: 5rem;
`

export const StyledLabel = styled.label`
  font-size: 1.5em;
  text-align: left;
  margin-bottom: 1.5em;
`

export const StyledAmountInput = styled.input`
  height: 2.5em;
  width: 50%;
  padding-left: 10px;
  padding-right: 10px;
`

export const StyledButton = styled.button`
  height: 4vh;
  width: 10vw;
  color: white;
  background: black;
  margin-left: 0;
  border-radius: 2px;
  margin-top: 1.5em;
`

export const StyledMessage = styled.p`
  color: red;
  margin-left: 0;
`