

import './App.css'
// import { Button } from './components/ui/button'
import { Outlet } from 'react-router-dom'
function App() {
 

  return (
    <>
      {/* This Is Resume Builder !!!
      <button> Create</button> */}
      <Outlet/>
    </>
  )
}

export default App
