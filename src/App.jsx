import { useState } from 'react'

import './App.css'
import ComponentWrapper from './Component/ComponentWrapper'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <ComponentWrapper order={1} data="helloww" />
      <ComponentWrapper order={2} data="helloww" />
      <ComponentWrapper order={3} data="helloww" />
      <ComponentWrapper order={4} data="helloww" />
    </div>


  )
}

export default App
