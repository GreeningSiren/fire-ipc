import { useEffect, useState } from 'react'
import supabase from '../utils/supabase'
import './css/Admin.css'
import { Link } from 'react-router-dom'

export default function Admin() {
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

    return (
        <>

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