import React from 'react'
import './App.css';
import Welcome from './settings'
import AppLayout from './AppLayout'
import AppBar from './AppBar'
// Wrap the main component with AppProvider so Inner components can use Consume the context
import AppProvider from './AppProvider'

function App() {
  return (
    <AppLayout>
      <AppProvider>
        <AppBar/>
          <Welcome />
      </AppProvider>
    </AppLayout>
  );
}

export default App;
