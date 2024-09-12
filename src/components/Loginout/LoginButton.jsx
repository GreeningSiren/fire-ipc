export default function LoginButton() {
    const handleClick = () => {
        window.location.href = '/login'
    }
    return (
        <div>
            <button onClick={handleClick}>Login</button>
        </div>
    )
}