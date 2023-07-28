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




const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
                element: <ToyDetail />,
                loader: ({ params }) => fetch(`http://localhost:5000/allToys/${params.id}`)
            },
            {
                path: 'addToy',
                element: <AddToy />
            },
            {
                path: '/myToys',
                element: <MyToys />,
                loader: () => fetch('http://localhost:5000/myToys')
            },
            {
                path: '/myToys/:id',
                element: <UpdateToys />,
                loader: ({ params }) => fetch(`http://localhost:5000/myToys/${params.id}`)
            }
        ]
    }
])



export default router;