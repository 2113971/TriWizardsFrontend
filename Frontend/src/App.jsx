import { useState } from 'react'
<<<<<<< HEAD
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/App.css'
import CartPage from './pages/cart'

=======
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.js';
import NavigationBar from './components/navigationBar';
>>>>>>> fe3cb7f94e923994cc005d3c07b7c5681156c228

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<<<<<<< HEAD
      <div id='page-container'>
        <CartPage/>
      </div>
=======
    <div>
      <NavigationBar/>
    
    </div>
      
>>>>>>> fe3cb7f94e923994cc005d3c07b7c5681156c228
    </>
  )
}

export default App
