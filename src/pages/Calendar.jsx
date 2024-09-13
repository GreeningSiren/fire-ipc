import Text from './../components/Text/Text';
import Competition from './../components/Competition/Competition';
import './css/Calendar.css'

export default function Calendar() {
    return (
        <div className='calendar-wrapper main-content'>
            <h1 className='calendar-title'><Text word="CalendarCompetition" /></h1>
            <div className='calendar-next'><Text word="CalendarNext" /></div>
            <div className='calendar-competitions'>
                <Competition
                    title="Файър Опън"
                    date="22.10.2024"
                    info="Състезанието е част от подготовката на младите таекуондо картечници, за предстоящия коледен голям международен турнир, подходящ е за всички възрастови групи!"
                    place="Зала Асикс Арена"/>
                <Competition
                    title="Херея Опън"
                    date="30.10.2024"
                    info="Състезанието е част от подготовката на младите таекуондо картечници, за предстоящия коледен голям международен турнир!"
                    place="Зала София"/>
                <Competition
                    title="С Таекуондо Тийм Опън"
                    date="25.11.2024"
                    info="Състезанието е част от подготовката на младите таекуондо картечници, за предстоящия коледен голям международен турнир, подходящ е за всички възрастови групи!"
                    place="Зала Бургас Арена"/>
            </div>
            <div className='calendar-next'><Text word="CalendarPast" /></div>
            <Competition
                    title="Дупница Опън"
                    date="01.05.2024"
                    info="Състезанието е част от подготовката на младите таекуондо картечници, за предстоящия коледен голям международен турнир, подходящ е за всички възрастови групи!"
                    place="Зала Дупница Арена"
                    winner="Спечелени: 19 златни, 16 сребърни и 34 бронзови медала. 1во масто отборно във всички класове!!!"/>
        </div>
    )
}