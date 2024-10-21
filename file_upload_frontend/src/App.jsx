import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fileupload from './fileupload'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Fileupload></Fileupload>
    </div>
    )
}

export default App
