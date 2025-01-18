import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)


  const IncreaseValue = () => {
    
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const DecreaseValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Counter</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={IncreaseValue}
      >Increase value</button> 
      <br />
      <button
      onClick={DecreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
