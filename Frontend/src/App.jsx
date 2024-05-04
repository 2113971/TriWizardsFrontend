import { useState } from 'react'
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
