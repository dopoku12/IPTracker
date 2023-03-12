import Dashboard from './components/Dashboard'
import Searchbar from './components/Searchbar'
import Leafletmap from './components/Leafletmap'
import usefetchapi from './hooks/usefetchapi'
function App() {
  usefetchapi()
  return (
    <div className="d-flex 
  flex-column
    justify-content-center
    align-items-center
    ">
      <header>
        <h1 className='text-primary'>
          IP Address Tracker
        </h1>
        <nav>
          <Searchbar />
        </nav>
        <Dashboard />
      </header>
      <main>
        <Leafletmap />
      </main>
    </div>
  )
}

export default App
