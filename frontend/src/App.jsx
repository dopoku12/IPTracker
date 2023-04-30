import Dashboard from './components/Dashboard'
import Searchbar from './components/Searchbar'
import Leafletmap from './components/Leafletmap'
import useFetch from './hooks/useFetch'
import Footer from './components/Footer'
import {
  FaGithub, FaLinkedin,
  FaEnvelope, FaRocket,
  FaAngleRight
}
  from 'react-icons/fa'

function App() {
  //external links
  const links = [
    {
      id: 3, colorCode: '8cac5', iconName: FaRocket,
      name: 'Portfolio', pathName: 'https://davidopoku-portfolio.netlify.app/'
    },

    {
      id: 4, colorCode: 'black', iconName: FaGithub,
      name: 'Github', pathName: 'https://github.com/dopoku12'
    },
    {
      id: 5, colorCode: ' #0077b5', iconName: FaLinkedin,
      name: 'Linkedin', pathName: 'https://www.linkedin.com/in/david-opoku-7008721b7'
    },
    {
      id: 6, colorCode: '78cac5', iconName: FaEnvelope,
      name: 'Email', pathName: ''
    }]
  const local = 'http://localhost:3003/api'
  const { data } = useFetch(local)
  console.log(data)

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
        <Searchbar FaAngleRight={FaAngleRight} />
        <Dashboard data={data} />
      </header>
      <main>
        {
          data && <Leafletmap data={data} />
        }
      </main>
      <Footer links={links} />
    </div>
  )
}

export default App
