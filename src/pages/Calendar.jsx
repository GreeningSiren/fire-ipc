import Text from '../components/Text';
import Competition from '../components/Competition';
import './css/Calendar.css'
import supabase from './../utils/supabase'
import { useState, useEffect } from 'react';
import Header from '../components/Header';

export default function Calendar() {
    const [isLoading, setIsLoading] = useState(true)
    const [upcoming, setUpcoming] = useState([])
    const [past, setPast] = useState([])

    function convertDateToDDMMYYYY(dateString) {
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    }

    useEffect(() => {
        const getCompetitions = async () => {
            const { data, error } = await supabase
                .from('competitions')
                .select()
                .order('date', { ascending: true })
            console.log(data)

            if (error) {
                console.log(error)
            }

            const upcomingCompetitions = [];
            const pastCompetitions = [];
            // Iterate over the data to classify competitions
            data.forEach(competition => {
                if (new Date(competition.date) > new Date()) {
                    upcomingCompetitions.push(competition);
                } else {
                    pastCompetitions.push(competition);
                }
            });
            // Update state after classification is complete
            setUpcoming(upcomingCompetitions);
            setPast(pastCompetitions);

            setIsLoading(false)
        }
        getCompetitions()
    }, [])
    return(
        <div className='calendar-wrapper main-content'>
            <Header t d>Calendar</Header>
            <h1 className='calendar-title'><Text word="CalendarCompetition" /></h1>
            {!isLoading ? <div>
                <div className='calendar-next'><Text word="CalendarNext" /></div>
                <div className='calendar-competitions'>
                    {upcoming.map((competition) => <Competition key={competition.id} id={competition.id} title={competition.title} date={convertDateToDDMMYYYY(competition.date)} info={competition.info} place={competition.place} />)}
                </div>
                {past && <div className='calendar-next'><Text word="CalendarPast" /></div>}
                <div className='calendar-competitions'>
                    {past.map((competition) => <Competition key={competition.id} id={competition.id} title={competition.title} date={convertDateToDDMMYYYY(competition.date)} info={competition.info} place={competition.place} addParticipant medals={competition.medals}/>)}
                </div>
            </div> : <h1 className='calendar-next'>Loading...</h1>}
        </div>
    )
}