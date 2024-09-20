import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Contacts from './pages/Contacts.jsx'
import Calendar from './pages/Calendar.jsx'
import Admin from './pages/Admin.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx';
import TopBaner from './components/TopBaner.jsx';
// import LogoutButton from './components/LogoutButton.jsx'
import supabase from './utils/supabase.js';
// import { Auth } from '@supabase/auth-ui-react';
// import { ThemeSupa } from '@supabase/auth-ui-shared';
import LoginForm from './pages/LoginForm.jsx';
import Page404 from './pages/404.jsx'
import ResetPasswordForm from './pages/ResetPasswordForm.jsx'
import Footer from './components/Footer.jsx'
import CompetitionPage from './pages/CompetitionPage.jsx'
import Document from './pages/Documents.jsx'
import Gallery from './pages/Gallery.jsx'
import NewsPage from './pages/NewsPage.jsx'
import CampsPage from './pages/CampsPage.jsx'

// Create a router outside of the component


// Create the main component

function MainApp() { // eslint-disable-line react-refresh/only-export-components
  const [session, setSession] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const getUser = async () => {
      await supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      // Subscribe to authentication state changes
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      setIsLoading(false)
      // Fetch the session on mount
      // Cleanup subscription on unmount
      return () => subscription.unsubscribe()
    }
    getUser()

    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const type = params.get('type');

    // If the `type` parameter exists and equals 'recovery', redirect to /resetPassword
    if (type === 'recovery') {
      setTimeout(() => {window.location.href = '/resetPassword';}, 500)
    }
  }, [])

  const router = createBrowserRouter([
    {
      path: '/',
      element: <App session={session} />,
      errorElement: <Page404 />
    },
    {
      path: '/contacts',
      element: <Contacts />,
    },
    {
      path: '/admin',
      element: <Admin session={session} />,
    },
    {
      path: '/login',
      element: <LoginForm session={session} />
    },
    {
      path: '/resetPassword',
      element: <ResetPasswordForm />
    },
    {
      path: '/calendar',
      element: <Calendar />
    },
    {
      path: '/competition/:id',
      element: <CompetitionPage />
    },
    {
      path: '/documents',
      element: <Document />
    },
    {
      path: '/gallery',
      element: <Gallery />
    },
    {
      path: '/news',
      element: <NewsPage session={session} />
    },
    {
      path: '/camps',
      element: <CampsPage />
    }
  ])

  return !isLoading && (
    <div className='page-body'>
      <div className='page-content'>
        {session ? <TopBaner session={session.user} /> : <TopBaner />}
        <NavigationBar />
        <RouterProvider router={router} />
        <Footer />
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
