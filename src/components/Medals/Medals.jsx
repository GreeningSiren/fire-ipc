import Text from './../Text/Text';
import './css/Medals.css';

export default function Medals({medals}) {
    var {gold, silver, bronze} = medals.split('-');
    return (
        <div className="medals-wrapper">
            <div className='medals-gold'>Златни: {gold}</div>
            <div className='medals-silver'>Сребърни: {silver}</div>
            <div className='medals-bronze'>Бронзови: {bronze}</div>
        </div>
    )
}