import Text from './Text';

export default function LoginButton() {
    const handleClick = () => {
        window.location.href = '/login'
    }
    return (
        <div className="login-logout-button">
            <button className='button-main' onClick={handleClick}><Text word="Login" /></button>
        </div>
    )
}