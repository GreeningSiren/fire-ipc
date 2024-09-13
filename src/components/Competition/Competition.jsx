import Text from './../Text/Text';
import './css/Competition.css';

export default function Competition({ title, date, info, place, winner }) {
    const toggleReadMode = (e) => {
        const card = e.currentTarget.parentElement; // Get the parent competition-wrapper
        const textElement = card.querySelector('.competition-info'); // Scope to the current card
        const button = e.currentTarget; // Reference the clicked button directly

        if (textElement.classList.contains('expanded')) {
            textElement.classList.remove('expanded');
            button.textContent = 'Read More';
        } else {
            textElement.classList.add('expanded');
            button.textContent = 'Read Less';
        }
    };

    return (
        <div className='competition-wrapper'>
            <h2 className='competition-title'><Text word=""></Text>{title}</h2>
            <div className='competition-date'><Text word=""></Text>Кога: {date}</div>
            <div className='competition-info'><Text word=""></Text>{info}</div>
            <div className='toggle-button' onClick={toggleReadMode}>Read More</div>
            <div className='competition-place'><Text word=""></Text>Къде: {place}</div>
            <div className='competition-winner'><Text word=""></Text>{winner}</div>
        </div>
    );
}
