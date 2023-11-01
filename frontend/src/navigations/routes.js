import Home from '../pages/index'
import Dashboard from '../pages/dashboard'

export const routes = [
    {
        path: '/',
        element: <Home />,
        title: 'LAZY LOADING | HOME',
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        title: 'LAZY LOADING | Login',
    },
] 