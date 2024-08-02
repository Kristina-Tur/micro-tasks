import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App, {PATH} from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {LoginPage} from "../components/pages/LoginPage";

export const PrivateRoutes = () => {
    const isAuth = false
    return isAuth ? <Outlet/> : <Navigate to={'/login'}/>
};

const publicRoutes: RouteObject[] = [
    /*{path: {'/'},element: <Navigate to={PATH.Adidas}/>},*/
    {path: '/*', element: <Error404/>},
    {path: PATH.ERROR, element: <Error404/>},
    {path: PATH.Adidas, element: <Adidas/>},
    {path: PATH.Puma, element: <Puma/>},
    {path: PATH.Abibas, element: <Abibas/>},
    {path: PATH.Prices, element: <Prices/>},
    {path: PATH.Model, element: <Model/>},
    {path: PATH.Login, element: <LoginPage/>},
]

const privateRoutes: RouteObject[] = [
    {
        path: PATH.Protected,
        element: (
            <ProtectedRoute>
                <ProtectedPage/>
            </ProtectedRoute>
        )
    },
]

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,/*<Crosses/>*/
        errorElement: <Navigate to={PATH.ERROR}/>,
        children: [
            {
                element: <PrivateRoutes/>,
                children: privateRoutes
            },
            ...publicRoutes
        ]
    }
]);