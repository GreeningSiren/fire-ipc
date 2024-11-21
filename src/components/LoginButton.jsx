import Text from './Text';

export default function LoginButton() {
    const handleClick = () => {
        let path = window.location.pathname;
        window.location.href = '/login/?path=' + path
    }
    return (
        <div className="login-logout-button">
            <button className='button-main' onClick={handleClick}><Text word="Login" /></button>
        </div>
    )
}
