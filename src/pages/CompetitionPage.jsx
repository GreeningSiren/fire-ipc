import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import supabase from '../utils/supabase'

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
        <div className='main-content text-center'>

            <h1 className=''>{data.title}</h1>

            <p>Къде: {data.place}</p>

            <p>Кога: {convertDateToDDMMYYYY(data.date)}</p>

            <Link to="/calendar">Назад</Link>
        </div>
    ) : (
        <h1>Loading...</h1>
    )
}

import PropTypes from 'prop-types'
CompetitionPage.propTypes = {
    params: PropTypes.object,
}