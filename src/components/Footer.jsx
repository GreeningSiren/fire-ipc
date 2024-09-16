import Text from './Text';
import './css/Footer.css';

export default function Footer() {
    return (
        <footer className="footer-wrapper">
            <div className='footer-copyright'><Text word="CopyRight" /></div>
            <div className='footer-left'>
                <div className='footer-text'>
                    <div className="footer-phone"><a href="tel:+359896865981">✆ <Text word="Phone" /></a></div>
                    <Text word="EmailText" /><a href='mailto:firetkd@yahoo.com' target='_blank'><strong><Text word="Email" /></strong></a>
                    <div className='footer-address'><Text word="Address" /></div>
                </div>
                <div className='footer-images'>
                    <img src="/images/logo.png" alt="Fire Logo" className="footer-image-logo" />
                    <img src="/images/firelogo.png" alt="Fire Logo" className="footer-image-firelogo" />
                </div>
            </div>
        </footer>
    )
}