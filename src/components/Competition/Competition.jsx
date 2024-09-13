import Text from './../Text/Text';
import './css/Competition.css';

export default function Competition({title, date, info, place, winner}) {
    return (
        <div className='competition-wrapper'>
            <h2 className='competition-title'><Text word=""></Text>{title}</h2>
            <div className='competition-date'><Text word=""></Text>Кога: {date}</div>
            <div className='competition-info'><Text word=""></Text>{info}</div>
            <div className='competition-place'><Text word=""></Text>Къде: {place}</div>
            <div className='competition-winner'><Text word=""></Text>{winner}</div>
        </div>
    )
}