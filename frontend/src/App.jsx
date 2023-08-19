import Dashboard from './components/Dashboard'
import Leafletmap from './components/Leafletmap'
import useFetch from './hooks/useFetch'
import Footer from './components/Footer'
import {
  FaGithub, FaLinkedin,
  FaEnvelope, FaRocket,
  FaAngleRight
} from 'react-icons/fa'
import { useState } from 'react'
import axios from 'axios'

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
      name: 'Email', pathName: '',
    }];
  //user entry value 
  const [usrInput, setUsrInput] = useState('');

  //local address
  const url = "/netlifyFunction";
  const { data, SetData } = useFetch(url)

  //sends user input to backend
  const submitHandler = (e) => {

    e.preventDefault();
    axios({
      method: 'POST',
      url: url,
      params: { usrInput: usrInput }
    })
      .then((res) => {
        SetData(res.data)
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="d-flex 
  flex-column
    justify-content-center
    align-items-center
    ">
      <header className="d-flex flex-column
      justify-content-center
      align-items-center">
        <h4 className=''>
          IP Address Tracker
        </h4>

        <form onSubmit={submitHandler} className=' input-group mb-3'>
          <input cl value={usrInput}
            onChange={(e) => setUsrInput(e.target.value)}
            name="search"
            className=' form-control rounded'
            placeholder='Search for a Client IP Address A.B.C.D' />
          <button type='submit' className='input-group-append btn  btn-dark'>
            <FaAngleRight />
          </button>
        </form>
      </header>

      <main className=''>
        <Dashboard data={data} />
        {
          data && <Leafletmap data={data} />
        }
      </main>
      <Footer links={links} />
    </div>
  )
}

export default App
