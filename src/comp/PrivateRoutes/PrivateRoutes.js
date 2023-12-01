import { Navigate, Outlet, useLocation } from 'react-router-dom'
const PrivateRoutes = () => {

    let auth = { 'token': false }
    const user = JSON.parse(localStorage.getItem('user'))
    if (user && user.token) {

        auth = { 'token': true }
    }

    const location = useLocation()
    return (
        auth.token ? (
            <Outlet />
        ) : (
            <Navigate to='/Restaurant-Management-System/login' replace state={{ from: location }} />
        )
    )
}

const AdminPrivateRoutes = () => {

    let auth = { 'token': false }
    const user = JSON.parse(localStorage.getItem('admin'))
    if (user && user.token) {

        auth = { 'token': true }
    }

    const location = useLocation()
    return (
        auth.token ? (
            <Outlet />
        ) : (
            <Navigate to='/Restaurant-Management-System/adminLogin' replace state={{ from: location }} />
        )
    )
}

export { PrivateRoutes, AdminPrivateRoutes }