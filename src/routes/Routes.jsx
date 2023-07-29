import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AllToys from "../pages/allToys/AllToys";
import ToyDetail from "../pages/allToys/ToyDetail";
import AddToy from "../pages/addToy/AddToy";
import MyToys from "../pages/myToys/MyToys";
import UpdateToys from "../pages/updateToys/UpdateToys";
import PrivateRoute from "./PrivateRoute";
import Blog from "../pages/Blog/Blog";
import ErrorPage from "../pages/errorPage/ErrorPage";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signUp',
                element: <SignUp />
            },
            {
                path: 'allToys',
                element: <AllToys />,
                loader: () => fetch('https://toy-house-assignment-server.vercel.app/allToys')
            },
            {
                path: 'allToys/:id',
                element: <PrivateRoute><ToyDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-house-assignment-server.vercel.app/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute> <MyToys /></PrivateRoute>,
                loader: () => fetch('https://toy-house-assignment-server.vercel.app/myToys')
            },
            {
                path: '/myToys/:id',
                element: <UpdateToys />,
                loader: ({ params }) => fetch(`https://toy-house-assignment-server.vercel.app/myToys/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog />
            }
        ]
    }
])



export default router;