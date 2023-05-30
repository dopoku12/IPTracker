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
  const [UsrInput, setUsrInput] = useState('');


  //local address
  const local = 'http://localhost:3003/api';
  const { data } = useFetch(local)

  //sends user input to backend
  const submitHandler = (e) => {
    e.preventDefault();

    axios({
      url: local,
      method: 'Post',
      data: UsrInput
    }).then((res) => {
      console.log(res.data)
      console.log(res)
    })
      .catch((err) => console.log(err))

  }

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
          <form onSubmit={submitHandler} className='input-group'>
            <input value={UsrInput}
              onChange={(e) => setUsrInput(e.target.value)}
              name="search"
              className='form-control rounded'
              placeholder='Search for a Client IP Address A.B.C.D' />

            <button type='submit' className='btn btn-dark'>
              <FaAngleRight />
            </button>
          </form>
        </nav>

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
