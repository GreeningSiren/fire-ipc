import { useEffect, useState } from 'react'
import supabase from '../utils/supabase'
import './css/Admin.css'
import { Link } from 'react-router-dom'
import Header from '../components/Header';
import { Helmet } from 'react-helmet';
import isAdmin from '../utils/isAdmin';

export default function Admin({ session }) {
    const [users, setUsers] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        async function getUsers() {
            const { data, error } = await supabase
                .from('registered_users')
                .select('*')

            if (error) {
                console.log(error)
                setError(error)
                setUsers(null)
            } else {
                setError(null)
                setUsers(data)
            }
        }

        getUsers()
    }, [])

    if (!session) {
        window.location.href = '/'
    }
    if (session && !isAdmin(session)) {
        window.location.href = '/404'
        console.log(session.user.id)
        console.log("session.user.id != 'cd7e3c17-2a4f-4283-be06-0128f2fd057d'")
    }

    return (
        <>
            <Header t>Admin</Header>
            <Helmet><meta name="robots" content="noindex" /></Helmet>
            {!users && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            {users && (
                <table className="table-auto w-full">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2">Id</th>
                            <th className="px-4 py-2">Full Name</th>
                            <th className="px-4 py-2">Phone Number</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Origin Country</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map(user => (
                            <tr key={user.id} className="border-b border-gray-300">
                                <td className="px-4 py-2">{user.id}</td>
                                <td className="px-4 py-2">{user.full_name}</td>
                                <td className="px-4 py-2">{user.phone_number}</td>
                                <td className="px-4 py-2">{user.email}</td>
                                <td className="px-4 py-2">{user.origin_country}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <br />
            <Link to="/">Back</Link>
        </>
    )
}

import PropTypes from 'prop-types'
Admin.propTypes = {
    session: PropTypes.object,
}