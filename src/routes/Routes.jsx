import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import AllToys from "../pages/allToys/AllToys";
import ToyDetail from "../pages/allToys/ToyDetail";
import AddToy from "../pages/addToy/AddToy";




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
            }
        ]
    }
])



export default router;