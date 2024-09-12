import supabase from '../../utils/supabase'

export default function LogoutButton() {
    const handleClick = () => {
        supabase.auth.signOut()
        // localStorage.removeItem('sb-bqwrnxhhfnlqmgpskuzy-auth-token') // da e sigurno
        console.log("logout")
        // setTimeout(() => {window.location.href = '/'}, 500)
        // window.open('/', '_self')
    }
    return (
        <div className='login-logout-button'>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}