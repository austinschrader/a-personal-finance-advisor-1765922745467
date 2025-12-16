import React from 'react'
import ChatInterface from './components/ChatInterface'
import './styles/App.css'

function App() {
  return (
    <div className="app">
      <ChatInterface agentDescription="a personal finance advisor" />
    </div>
  )
}

export default App
