import LogoutButton from '../Loginout/LogoutButton';
import LoginButton from '../Loginout/LoginButton';
import './css/TopBaner.css';

const TopBaner = ({ session }) => {
    return (
        <div className='top-banner'>
            <img src="/images/logo.png" alt="Descriptive Alt Text" className="header-image" />
            {session && <div className='top-banner-greeting'>Hello {session.email}</div>}
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
