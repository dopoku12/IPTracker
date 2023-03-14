import Dashboard from './components/Dashboard'
import Searchbar from './components/Searchbar'
import Leafletmap from './components/Leafletmap'
import usefetchapi from './hooks/usefetchapi'
import Footer from './components/Footer'
function App() {
  const { data } = usefetchapi()
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
        <Searchbar />
        <Dashboard />
      </header>
      <main>
        <Leafletmap />
      </main>
      <Footer />
    </div>
  )
}

export default App
