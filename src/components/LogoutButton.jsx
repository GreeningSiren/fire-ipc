import supabase from '../utils/supabase'
import Text from './Text';

export default function LogoutButton() {
    const handleClick = async () => {
        await supabase.auth.signOut()
        // localStorage.removeItem('sb-bqwrnxhhfnlqmgpskuzy-auth-token') // da e sigurno
        console.log("logout")
        // setTimeout(() => {window.location.href = '/'}, 500)
        // window.open('/', '_self')
    }
    return (
        <div className='login-logout-button'>
            <button className='button-main' onClick={handleClick}><Text word="Logout" /></button>
        </div>
    )
}