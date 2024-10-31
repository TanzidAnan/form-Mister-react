import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleForm from './Compontents/SimpleForm/SimpleForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SimpleForm></SimpleForm>
    </>
  )
}

export default App
