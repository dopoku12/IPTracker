import { useState } from 'react'
import Dashboard from './components/Dashboard'
import Searchbar from './components/Searchbar'
function App() {

  return (
    <div className="d-flex 
  flex-column
    justify-content-center
    align-items-center
    ">
      <h1 className='text-primary'>
        IP Address Tracker
      </h1>
      <nav>
        <Searchbar />
      </nav>
      <Dashboard />
    </div>
  )
}

export default App
