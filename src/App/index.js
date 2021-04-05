import React from 'react'
import './App.css';
import Welcome from '../Settings/welcome'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
// Wrap the main component with AppProvider so Inner components can use Consume the context
import AppProvider from './AppProvider'
import Content from '../Shared/Content'

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
        <Content>
          <Welcome />
        </Content>
      </AppProvider>
    </AppLayout>
  );
}

export default App;
