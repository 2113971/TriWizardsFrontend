import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/App.css'
import CartPage from './pages/cart'

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.js';
import NavigationBar from './components/navigationBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <NavigationBar/>
    
    </div>
      
    </>
  )
}

export default App
