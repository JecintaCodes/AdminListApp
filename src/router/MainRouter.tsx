import {createBrowserRouter} from "react-router-dom"
import Layout from "../common/Layout"
import Dashboard from "../page/Dashboard"
import ListHistory from "../page/ListHistory"
import ErrorPage from "../page/ErrorPage"
import OrderHistroy from "../page/OrderHistroy"
import Users from "../page/Users"

export const MainRouter = createBrowserRouter([{
    path:"admin",
    element:<Layout/>,
    children:[{
        index: true,
        element:<Dashboard/>
    },
{
    path:"list-histroy",
    element:<ListHistory/>
},
{
    path:"order-histroy",
    element:<OrderHistroy/>
},
{
    path:"users",
    element:<Users/>
},
],


  
},
{
    path:"*",
    element:<ErrorPage/>
},])