import { useState } from 'react'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>

      <button onClick={()=>setShow(!show)}>
        {show?"hide element below":"show element"}
      </button>
      {show && <div>toggle show</div>}
    </>
  )
}

export default App
