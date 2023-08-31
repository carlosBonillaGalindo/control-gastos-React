import { useState } from 'react'
import Header from './components/Header'

import './App.css'

function App() {
  const [presupuesto, setPresupuesto] = useState(5000)

  return (
   <div>
    <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}
    />
   </div>
  )
}

export default App
