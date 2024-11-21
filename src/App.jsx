import './App.css'
//import { useState } from 'react';
import { Link } from 'react-router-dom'
import Text from './components/Text';
import Header from './components/Header';
import isAdmin from './utils/isAdmin';

const App = ({ session }) => {
  //const [isVideoEnded, setIsVideoEnded] = useState(false);
  return (
    <>
    <Header t>Home</Header>
      <div className='main-content'>
        <div>
          <video
            className='video-logo'
            src="/images/video-logo.mp4"
            loop
            autoPlay
            muted
          />
          <Text word="MainTextOne" /><br />
          <Text word="MainTextTwo" /><br />
          <Text word="MainTextThree" /><br />
          <Text word="MainTextFour" /><br />
          <Text word="MainTextFive" /><br />
          <Text word="MainTextSix" /><br />
          <br />
          <div className='skt-content'><Text word="CopyRight" /></div>
        </div>
      </div>
      
      {session && isAdmin(session) && <Link to='/admin'>Admin Page 🤫</Link>}
    </>
  )
  // return isVideoEnded ?(
  //   <>
  //     <Header t>Home</Header>
  //     <div className='main-content'>
  //         <Text word="MainTextOne" /><br />
  //         <Text word="MainTextTwo" /><br />
  //         <Text word="MainTextThree" /><br />
  //         <Text word="MainTextFour" /><br />
  //         <Text word="MainTextFive" /><br />
  //         <Text word="MainTextSix" /><br />
  //         <br />
  //         <div className='skt-content'><Text word="CopyRight" /></div>
  //     </div>
      
  //     {session && session.user.id == "cd7e3c17-2a4f-4283-be06-0128f2fd057d" && <Link to='/admin'>Admin Page 🤫</Link>}
  //   </>
  // ): (
  //   <video
  //     src="/images/video-logo.mp4"
  //     autoPlay
  //     muted
  //     onEnded={() => setIsVideoEnded(true)}
  //   />
  // );
}
import PropTypes from 'prop-types'
App.propTypes = {
  session: PropTypes.object,
}

export default App
