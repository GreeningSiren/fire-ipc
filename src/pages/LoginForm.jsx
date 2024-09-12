import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../utils/supabase';

export default function LoginForm({ session }) {
    if (!session) {
        return (
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
        )
    }else {
        setTimeout(() => {window.location.href = '/'}, 500)
    }
}

import PropTypes from 'prop-types'
LoginForm.propTypes = {
    session: PropTypes.object,
}