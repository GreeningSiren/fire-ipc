import Text from './Text';
import './css/ParticipantList.css';

export default function ParticipantList() {
    return (
        <div className="participant-wrapper">
            <h3 className='participant-title'>Записани участници:</h3>
            <div className='display-flex participant'>
                <div className='participant-name'><Text word="Name" /></div>
                <div className='participant-poumsea'><Text word="Poomsae" /></div>
                <div className='participant-sparing'><Text word="Sparing" /></div>
            </div>
        </div>
    )
}