import './App.css'
import { Link } from 'react-router-dom'


const App = ({ session }) => {
  return (
    <>
      <div className='page-content'>
        <Link to='/contacts'>Contacts</Link>
        <br />
        {session && session.user.id == "cd7e3c17-2a4f-4283-be06-0128f2fd057d" && <Link to='/admin'>Admin Page 🤫</Link>}
        
      </div>
    </>
  )
}
import PropTypes from 'prop-types'
App.propTypes = {
  session: PropTypes.object,
}

export default App
