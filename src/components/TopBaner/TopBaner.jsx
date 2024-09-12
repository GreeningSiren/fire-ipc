import LogoutButton from '../Loginout/LogoutButton';
import LoginButton from '../Loginout/LoginButton';
import './css/TopBaner.css';

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
            <img src="/images/logo.png" alt="Descriptive Alt Text" className="header-image" />

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
            </div>
            <a href="tel:+359896865981">✆ +359896865981</a>

            {/* Greeting and Session Logic */}
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
