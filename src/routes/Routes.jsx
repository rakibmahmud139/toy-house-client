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
                loader: () => fetch('http://localhost:5000/allToys')
            },
            {
                path: 'allToys/:id',
                element: <PrivateRoute><ToyDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: '/myToys',
                element: <PrivateRoute> <MyToys /></PrivateRoute>,
                loader: () => fetch('http://localhost:5000/myToys')
            },
            {
                path: '/myToys/:id',
                element: <UpdateToys />,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blog />
            }
        ]
    }
])



export default router;