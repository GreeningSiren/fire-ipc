import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../utils/supabase';
import Header from '../components/Header';
import './css/LoginForm.css'

export default function LoginForm({ session }) {
    if (!session) {
        return (
            <div className='main-content main-content-form'>
                <Header t d>Login</Header>
                <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa, extend: true, className: {
                    anchor: 'auth-a',
                    button: 'auth-button',
                    container: 'auth-container',
                    divider: 'auth-divider',
                    label: 'auth-label',
                    input: 'auth-input',
                    loader: 'auth-loader',
                    message: 'auth-message'
                }}}  providers={[]} />
            </div>
        )
    }else {
        const urlParams = new URLSearchParams(window.location.search);
        const path = urlParams.get('path');
        setTimeout(() => {window.location.href = path ? `${path}` : '/'}, 50)
    }
}

import PropTypes from 'prop-types'
LoginForm.propTypes = {
    session: PropTypes.object,
}

