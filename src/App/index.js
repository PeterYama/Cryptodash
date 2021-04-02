import React from 'react'
import './App.css';
import Welcome from './welcome'
import styled, {css} from 'styled-components'

//Simple component create with styled components
const MyButtons = styled.div`
  color:green
  ${props => props.primary && css`
    background:white,
  `}
`
//Extending and modifying an exsisting style
const TomatoButton = styled(MyButtons)`
  color:tomato;
  border-color: tomato;
`

function App() {
  return (
    <div className="App">
      <Welcome name={"Peter"}/>
      <MyButtons> Hello </MyButtons>
      <MyButtons primary> Hello </MyButtons>
      <TomatoButton>Tomato</TomatoButton>
    </div>
  );
}

export default App;
