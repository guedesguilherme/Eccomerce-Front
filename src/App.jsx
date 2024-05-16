import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <div className='App'>
          <div className="navbar">
            <Navbar/> 
          </div>
        <div className="container">
          <Outlet/>
        </div>
      </div>
    </>
  )
}

export default App
