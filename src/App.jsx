import './App.css'
import { Link } from 'react-router-dom'


const App = () => {
  return (
    <>
      <div className='page-content'>
        <Link to='/contacts'>Contacts</Link>
        <br />
        <Link to='/admin'>Admin Page 🤫</Link>
      </div>
    </>
  )
}

export default App
