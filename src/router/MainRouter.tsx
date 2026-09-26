import {createBrowserRouter} from "react-router-dom"
import Layout from "../common/Layout"
import Dashboard from "../page/Dashboard"

export const MainRouter = createBrowserRouter([{
    path:"admin",
    element:<Layout/>,
    children:[{
        index: true,
        element:<Dashboard/>
    }]
}])