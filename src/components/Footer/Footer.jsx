import Text from './../Text/Text';
import './css/Footer.css';

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className='footer-copyright'><Text word="CopyRight"></Text></div>
            <div className="footer-phone"><a href="tel:+359896865981">✆ <Text word="Phone"></Text></a></div>
            <a href='mailto:firetkd@abv.bg' target='_blank'><strong><Text word="Email"></Text></strong></a>
            <div className='footer-address'><Text word="Address"></Text></div>
        </div>
    )
}