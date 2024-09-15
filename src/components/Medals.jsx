import Text from './../Text/Text';
import './css/Medals.css';
import { useState, useEffect } from 'react';

export default function Medals({medals}) {
    const medal = medals.split('-');
    return (
        <div className="medals-wrapper">
            <div className='medals-gold'>Златни: {medal[0]}</div>
            <div className='medals-silver'>Сребърни: {medal[1]}</div>
            <div className='medals-bronze'>Бронзови: {medal[2]}</div>
        </div>
    )
}