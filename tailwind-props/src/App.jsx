import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)
  let MyObj = {
    Title: 'Afzal',
    age: 25,
  }
  let MyArr = ['Afzal', 'Ali', 'Khan'] 

  return (
    <>
      <Card title="Kuch Bhi" btntxt="Aur Padho"/>
      <Card title="Afzal" btntxt='Rehne do'/>
    </>
    
  )
}
<div></div>

export default App
