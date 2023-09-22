import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { Outlet, useRoutes } from 'react-router-dom'; // Import useRoutes

export const myRoutes=[
    {path:"/signup",element:<SignUp/>},
    {path:"/login",element:<Login/>}
]



export const PathRoutes=()=>{
    const element=useRoutes(myRoutes)
    return(

        <>
        <Outlet/>
        {element}
        </>
    )

}