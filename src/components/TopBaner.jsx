import LogoutButton from './LogoutButton.jsx';
import LoginButton from './LoginButton.jsx';
import './css/TopBaner.css';
import Text from './Text.jsx';

const TopBaner = ({ session }) => {

    // Function to handle language change
    const addEnglish = (en) => {
        if (en) {
            // document.body.classList.add('en');
            localStorage.setItem('en', 'true');
            window.location.reload();
        } else {
            localStorage.removeItem('en');
            window.location.reload()
        }
    }

    return (
        <div className='top-banner'>
            <div className='header-image'>
                <img src="/images/firelogo.png" alt="Fire Logo" className="header-image-firelogo" />
                <img src="/images/logo.png" alt="Fire Logo" className="header-image-logo" />
            </div>
            {/* Language Flags */}
            <div className="language-switcher">
                <img
                    src="/images/flags/en.png"
                    alt="English"
                    className="flag"
                    onClick={() => addEnglish(true)}
                    style={{ cursor: 'pointer' }}
                />
                <img
                    src="/images/flags/bg.png"
                    alt="Bulgarian"
                    className="flag"
                    onClick={() => addEnglish(false)}
                    style={{ cursor: 'pointer' }}
                />
                <div className='top-banner-phone'>
                    <a href="tel:+359896865981">✆ <Text word="Phone" /></a>
                </div>
            </div>

            <div className='top-banner-login'>
                {/* Greeting and Session Logic */}
                {session && <div className='top-banner-greeting'><Text word="Greeting" /> {session.email}</div>}
                {session && <LogoutButton />}
                {!session && <LoginButton />}
            </div>
        </div>
    );
};

import PropTypes from 'prop-types';
TopBaner.propTypes = {
    session: PropTypes.object,
};

export default TopBaner;
