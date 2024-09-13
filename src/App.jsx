import './App.css'
import { Link } from 'react-router-dom'
import Text from './components/Text/Text';

const App = ({ session }) => {
  return (
    <>
      <div className='main-content'>
          <Text word="MainTextOne" /><br />
          <Text word="MainTextTwo" /><br />
          <Text word="MainTextThree" /><br />
          <Text word="MainTextFour" /><br />
          <Text word="MainTextFive" /><br />
          <Text word="MainTextSix" /><br />
          <br />
          <div className='skt-content'><Text word="CopyRight" /></div>
      </div>
      
      {session && session.user.id == "cd7e3c17-2a4f-4283-be06-0128f2fd057d" && <Link to='/admin'>Admin Page 🤫</Link>}
    </>
  )
}
import PropTypes from 'prop-types'
App.propTypes = {
  session: PropTypes.object,
}

export default App
