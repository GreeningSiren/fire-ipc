import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../utils/supabase'
import Text from '../components/Text'
import './css/CompetitionPage.css';
import TaekwondoForm from '../components/TaekwondoForm';
import ParticipantList from '../components/ParticipantList';
import Header from '../components/Header';
import isAdmin from '../utils/isAdmin';
import { useNavigate } from 'react-router-dom';

export default function CompetitionPage({ session }) {
    const navigate = useNavigate()
    const { id } = useParams()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if(!session) navigate('/login/?path=/competition/' + id)
        async function getCompetition() {
            const { data, error } = await supabase
                .from('competitions')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.log(error)
            } else {
                setData(data)
                setIsLoading(false)
            }
        }

        getCompetition()
        if(data.date && new Date(data.date) < new Date() && (session && !isAdmin(session))) navigator('/calendar/')
    }, [id, session, data.date, navigate])
    function convertDateToDDMMYYYY(dateString) {
        if (!dateString) return
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    }
    return session && !isLoading ? (
        <div className='main-content main-content-form text-center'>
            <Header t d>{data.title}</Header>

            <h1 className=''>{data.title}</h1>

            <div className='competition-place display-flex'>
                <div className='competition-where'><Text word="Where" />{data.place}</div>
                <div className='competition-when'><Text word="When" />{convertDateToDDMMYYYY(data.date)}</div>
            </div>

            <h2 className='form-title'>
                <Text word="AddParticipant" />
            </h2>

            <TaekwondoForm session={session} id={id} />

            <ParticipantList session={session} id={id} />

            <Link className='competition-back' to="/calendar"><Text word="Back"/></Link>
        </div>
    ) : (
        <h1 className='calendar-next main-content'>Loading...</h1>
    )
}

import PropTypes from 'prop-types'
CompetitionPage.propTypes = {
    params: PropTypes.object,
    session: PropTypes.object,
}