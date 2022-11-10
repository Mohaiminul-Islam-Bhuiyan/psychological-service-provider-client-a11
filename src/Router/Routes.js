import { createBrowserRouter } from 'react-router-dom'
import Main from '../Layout/Main'
import Blog from '../Pages/Blog/Blog'
import ErrorPage from '../Pages/ErrorPage/ErrorPage'
import Home from '../Pages/Home/Home'
import AllServices from '../Pages/Home/Services/AllServices'
import Login from '../Pages/Login/Login'
import MakeReview from '../Pages/ServiceDetails/MakeReview'
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails'
import Signup from '../Pages/Signup/Signup'
import PrivateRoute from './PrivateRoute'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/allservices',
                element: <AllServices></AllServices>
            }
        ]
    }
])

export default router;