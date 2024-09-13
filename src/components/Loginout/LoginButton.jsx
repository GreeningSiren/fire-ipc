import Text from './../Text/Text';

export default function LoginButton() {
    const handleClick = () => {
        window.location.href = '/login'
    }
    return (
        <div className="login-logout-button">
            <button onClick={handleClick}><Text word="Login" /></button>
        </div>
    )
}