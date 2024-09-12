import LogoutButton from '../Loginout/LogoutButton';
import LoginButton from '../Loginout/LoginButton';
import './css/TopBaner.css';

const TopBaner = ({ session }) => {
    return (
        <div className='top-banner'>
        <img src="/images/logo.png" alt="Descriptive Alt Text" className="header-image" />
        {session && <h1>Hello {session.email}</h1>}
        {session && <LogoutButton />}
        {!session && <LoginButton />}
        </div>
    );
};

import PropTypes from 'prop-types';
TopBaner.propTypes = {
    session: PropTypes.object,
};

export default TopBaner;
