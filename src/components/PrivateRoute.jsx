import { Navigate } from "react-router-dom"
const PrivateRoute = ({ children }) => {

    const user = sessionStorage.getItem('session')

    if (!user) {
        return <Navigate to="/" />
    }

    return children

}

export default PrivateRoute