import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../utils/supabase'
import Text from '../Components/Text/Text'
import './css/CompetitionPage.css';
import TaekwondoForm from '../components/TaekwondoForm/TaekwondoForm';
import ParticipantList from '../components/ParticipantList/ParticipantList';

export default function CompetitionPage() {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        async function getCompetition() {
            const { data, error } = await supabase
                .from('competitions')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                console.log(error)
            } else {
                console.log(data)
                setData(data)
            }
        }

        getCompetition()
        setIsLoading(false)
    }, [id])
    function convertDateToDDMMYYYY(dateString) {
        if (!dateString) return
        const [year, month, day] = dateString.split('-');
        return `${day}.${month}.${year}`;
    }

    return !isLoading ? (
        <div className='main-content main-content-form text-center'>

            <h1 className=''>{data.title}</h1>

            <div className='competition-place display-flex'>
                <div className='competition-where'><Text word="Where" />{data.place}</div>
                <div className='competition-when'><Text word="When" />{convertDateToDDMMYYYY(data.date)}</div>
            </div>

            <h2 className='form-title'>
                <Text word="AddParticipant" />
            </h2>

            <TaekwondoForm />

            <ParticipantList />

            <Link className='competition-back' to="/calendar"><Text word="Back"/></Link>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

import PropTypes from 'prop-types'
CompetitionPage.propTypes = {
    params: PropTypes.object,
}