import Text from './../Text/Text';
import './css/Footer.css';

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className='footer-copyright'><Text word="CopyRight" /></div>
            <div className="footer-phone"><a href="tel:+359896865981">✆ <Text word="Phone" /></a></div>
            <a href='mailto:firetkd@yahoo.com' target='_blank'><strong><Text word="Email" /></strong></a>
            <div className='footer-address'><Text word="Address" /></div>
        </div>
    )
}