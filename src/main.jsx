import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacts from './pages/Contacts.jsx'
import Admin from './pages/Admin.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/Navigation/NavigationBar';
import TopBaner from './components/TopBaner/TopBaner';
// import LogoutButton from './components/LogoutButton.jsx'
import supabase from './utils/supabase.js';
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
import LoginForm from './pages/LoginForm.jsx';

// Create a router outside of the component


// Create the main component

function MainApp() { // eslint-disable-line react-refresh/only-export-components
  const [session, setSession] = useState(null)

  useEffect(() => {
    // Fetch the session on mount
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    // Subscribe to authentication state changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    // Cleanup subscription on unmount
    return () => subscription.unsubscribe()
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App session={session}/>,
    },
    {
      path: '/contacts',
      element: <Contacts />,
    },
    {
      path: '/admin',
      element: <Admin />,
    },
    {
      path: '/login',
      element: <LoginForm session={session} />
    }
  ])

  // if (!session) {
  //   return (
  //     <div className='page-body'>
  //       <div className='page-content'>
  //         <TopBaner />
  //         <NavigationBar />
  //         <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} providers={[]} />
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className='page-body'>
      <div className='page-content'>
        {session ? <TopBaner session={session.user} /> : <TopBaner />}
        <NavigationBar />
        <RouterProvider router={router} />
      </div>
    </div>
  )
}
// Render the MainApp component
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>
)
