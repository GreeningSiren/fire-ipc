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
            <div className='main-content'>
                            Таекуондо клуб „Файър-София“ е основан през 2009 г., а от  2010 г. е официален член на Българска федерация по таекуондо-олимпийска версия.
                Нашата цел е разпространението на корейското бойно изкуство таекуондо сред деца, юноши и възрастни като средство за тяхното физическо и духовно развитие.
                Като дългогодишни последователи не само на спорта, но и на бойното изкуство, ние се стремим да изградим почтени, отговорни, организирани и търсещи знанието хора, въвеждайки ги в света на таекуондо и неговите принципи.
                Тренировките по таекуондо в СКТ „Файър-София“ са насочени не само към придобиването на технически умения за самозащита, физическа сила, издръжливост, гъвкавост и концентрация, но и към борбата срещу надигащата се агресия сред децата и младежите. Специално внимание в тренировъчния процес  отделяме на  дисциплината, уважението и работата в екип, които да изградят отборен дух  и да развият положителни черти  в характера на всеки трениращ.
                С течение на годините, с придобития във времето опит, а може би и благодарение на отдадеността ни в работата, дейността на клуба търпи постоянно развитие. СКТ „Файър-София“ все по-целенасочено търси възможности за личностното и социално развитие на своите кадри и за реализацията на  спортния им потенциал.  До момента клубът може да се похвали с 18 възпитаници, носители на  майсторска степен (черен пояс), изградени са 11 национални съдии по таекуондо,  нашите състезатели са извоювали над 700 медала и множество купи от държавни и международни състезания.
                Възпитаниците на клуба ни са пример за своите връстници не само в спорта, но и във всяка една сфера от ежедневните  си занимания и  за нас като техни треньори е гордост, че  с помощта на таекуондо,  успяваме да  изградим достойни и успешни млади хора, които имат ясна цел и посока  в живота и които са истински последователи на спорта, бойното изкуство и философското учение Таекуондо. 
                <br/>                                                                                                                                                                   
                <div className='skt-content'>СКТ „Файър-София” ®</div>
            </div>
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