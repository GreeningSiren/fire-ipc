import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../utils/supabase';

export default function LoginForm({ session }) {
    if (!session) {
        return (
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
        )
    }else {
        setTimeout(() => {window.location.href = '/'}, 500)
    }
}

import PropTypes from 'prop-types'
LoginForm.propTypes = {
    session: PropTypes.object,
}