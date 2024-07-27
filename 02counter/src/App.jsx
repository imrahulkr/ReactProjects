import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <h2>Value is : {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          increase
        </button>
        
        <button onClick={() => setCount((count) => count - 1)}>
          Decrease
        </button>
        </div>
    </>
  )
}

export default App
