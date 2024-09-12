import { useState } from 'react';
import supabase from '../utils/supabase';

const ResetPasswordForm = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        const { data, error } = await supabase.auth.updateUser({
            password: newPassword
        })

        if (error) {
            setError(error.message);
            console.log(data)
        } else {
            setNewPassword('');
            setConfirmPassword('');
            setError(null);
            setSuccess("Password has been reset successfully!");
            setTimeout(() => {
                window.location.href = '/'
            }, 1000);
        }
        // Call to reset password via Supabase or any other service
    };

    return (
        <div>
            <h1>Reset Your Password</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>New Password:</label>
                    <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {success && <p style={{ color: 'green' }}>{success}</p>}
                <button type="submit">Reset Password</button>
            </form>
        </div>
    );
};

export default ResetPasswordForm;
