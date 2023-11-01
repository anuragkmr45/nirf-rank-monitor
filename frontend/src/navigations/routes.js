import Home from '../pages/index'
import Login from '../pages/auth'
import Dashboard from '../pages/dashboard'

export const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'LAZY LOADING | HOME',
    },
    {
        path: '/auth/login',
        element: <Login />,
        title: 'LAZY LOADING | Login',
    },

    // dashboard
    {
        path: '/dashboard',
        element: <Dashboard />,
        title: 'LAZY LOADING | Login',
    }

] 