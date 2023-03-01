import { useState } from 'react'
import ColorConverter from './components/ColorConverter';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ColorConverter/>
  )
}

export default App
