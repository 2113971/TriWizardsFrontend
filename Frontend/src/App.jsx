import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/App.css'
import CartPage from './pages/cart'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id='page-container'>
        <CartPage/>
      </div>
    </>
  )
}

export default App
