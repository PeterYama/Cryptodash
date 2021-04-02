import React from 'react'
import './App.css';
import Welcome from './welcome'
import styled, {css} from 'styled-components'
import AppLayout from './AppLayout'
import AppBar from './AppBar'

function App() {
  return (
    <AppLayout>
      <AppBar/>
        <Welcome />
    </AppLayout>
  );
}

export default App;
