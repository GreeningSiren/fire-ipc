import './App.css'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
      <Link to='/contacts'>Contacts</Link>
      <br />
      <Link to='/admin'>Admin Page 🤫</Link>
    </>
  )
}

export default App
