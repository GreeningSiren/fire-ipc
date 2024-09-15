import Text from './Text';
import './css/Medals.css';

export default function Medals({medals}) {
    const medal = medals.split('-');
    return (
        <div className="medals-wrapper">
            <div className='medals-gold'><Text word="Gold" />{medal[0]}</div>
            <div className='medals-silver'><Text word="Silver" />{medal[1]}</div>
            <div className='medals-bronze'><Text word="Bronze" />{medal[2]}</div>
        </div>
    )
}

import PropTypes from 'prop-types';
Medals.propTypes = {
    medals: PropTypes.array,
}