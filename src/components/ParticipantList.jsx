import Text from './../Text/Text';
import './css/ParticipantList.css';

export default function ParticipantList() {
    return (
        <div className="participant-wrapper">
            <h3 className='participant-title'>Записани участници:</h3>
            <div className='display-flex participant'>
                <div className='participant-name'>Име</div>
                <div className='participant-poumsea'>Пумсе</div>
                <div className='participant-sparing'>Спаринг</div>
            </div>
        </div>
    )
}