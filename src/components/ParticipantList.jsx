import Text from './Text';
import './css/ParticipantList.css';
import { useState, useEffect } from 'react';
import supabase from '../utils/supabase';
import isAdmin from '../utils/isAdmin';

export default function ParticipantList({ id, session }) {
    const [isLoading, setIsLoading] = useState(true)
    const [competition, setCompetition] = useState({})

    useEffect(() => {
        async function getCompetition() {
            const { data, error } = await supabase
                .from('competitors')
                .select('*')
                .eq('comp_id', id)
                .order('first_name', { ascending: true })

            if (error) {
                console.log(error)
            } else {
                const sortedCompetitors = (competition) => competition.sort((a, b) => {
                    if (a.email === session.user.email && b.email !== session.user.email) return -1;
                    if (b.email === session.user.email && a.email !== session.user.email) return 1;
                    return a.first_name.localeCompare(b.first_name);
                  });
                setCompetition(sortedCompetitors(data))
                setIsLoading(false)
            }




        }

        getCompetition()
    }, [id, session.user.email])


    async function handlePay(competitor) {
        const paid = competitor.paid
        setCompetition(competition.map(c => { // set frontend state for paid
            if (c.id === competitor.id) {
                return {...c, paid: !c.paid}
            }
            return c
        }))
        const {data, error} = await supabase // set backend state for paid
            .from('competitors')
            .update({paid: !paid})
            .eq('id', competitor.id)
            .eq('comp_id', id)
        console.log(id)
        if (error) {
            console.log(error)
        }
        if (data) {
            console.log(data) // nqma da ima data
        }

    }

    async function handleDelete(competitor) {
        const {data, error} = await supabase
            .from('competitors')
            .delete()
            .eq('id', competitor.id)
            .eq('comp_id', id)
        if (error) {
            console.log(error)
        } else {
            setCompetition(competition.filter(c => c.id !== competitor.id))
        }
        if (data) {
            console.log(data) // nqma da ima data
        }
    }
    return !isLoading ?(
        <div className="participant-wrapper">
            <h3 className='participant-title'>Записани участници:</h3>
            <h4>Брой Записани: {competition.length}</h4>
            <div className='display-flex participant'>
                <div className='participant-name'><Text word="Name" /></div>
                <div className='participant-poumsea'><Text word="Poomsae" /></div>
                <div className='participant-sparing'><Text word="Sparing" /></div>
                <div className='participant-sparing'><Text word="Freestyle" /></div>
                {session && isAdmin(session) && <div className='participant-sparing'><Text word="Paid" /></div>}
                {session && competition.some((competitor) => (isAdmin(session) || session.user.email === competitor.email)) && <div className='participant-sparing'><Text word="Delete" /></div>}
            </div>
            {competition.map(competitor => (
                <div key={competitor.id} className='display-flex participant'>
                    <div className='participant-name'>{competitor.first_name} {competitor.last_name}</div>
                    <div className='participant-poumsea'>{competitor.poomsae ? '✅' : '❌'}</div>
                    <div className='participant-sparing'>{competitor.sparring ? '✅' : '❌'}</div>
                    <div className='participant-sparing'>{competitor.freestyle ? '✅' : '❌'}</div>
                    {session && isAdmin(session) && <div className='participant-sparing'><input type="checkbox" checked={competitor.paid} onChange={() => handlePay(competitor)}/></div>}
                    {session && (isAdmin(session) || session.user.email === competitor.email) && <div className='participant-sparing'><button onClick={() => handleDelete(competitor)}>Delete</button></div>}
                </div>
            ))}
        </div>
    ): (
        <h2>Loading competitors</h2>
    )
}

import PropTypes from 'prop-types'
ParticipantList.propTypes = {
    id: PropTypes.string,
    session: PropTypes.object,
}
