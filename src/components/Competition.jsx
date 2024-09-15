import { Link } from 'react-router-dom';
import Text from './Text';
import Medals from './Medals';
import './css/Competition.css';

export default function Competition({ id, title, date, info, place, addParticipant, medals }) {
    // const toggleReadMode = (e) => {
    //     const card = e.currentTarget.parentElement; // Get the parent competition-wrapper
    //     const textElement = card.querySelector('.competition-info'); // Scope to the current card
    //     const button = e.currentTarget; // Reference the clicked button directly

    //     if (textElement.classList.contains('expanded')) {
    //         textElement.classList.remove('expanded');
    //         button.textContent = 'Read More';
    //     } else {
    //         textElement.classList.add('expanded');
    //         button.textContent = 'Read Less';
    //     }
    // };

    return (
        <div className='competition-wrapper'>
            <h2 className='competition-title'>{title}</h2>
            <div className='competition-date'><Text word="When" />{date}</div>
            <div className='competition-info'>{info}</div>
            <div className='competition-place'><Text word="Where" />{place}</div>
            {!addParticipant && <Link className='toggle-button text-center' to={"/competition/" + id}><Text word="AddParticipant" /></Link>}
            {medals && <Medals medals={medals}/>}
        </div>
    );
}

import PropTypes from 'prop-types';
Competition.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    info: PropTypes.string,
    place: PropTypes.string.isRequired,
    addParticipant: PropTypes.any,
    medals: PropTypes.string,
}