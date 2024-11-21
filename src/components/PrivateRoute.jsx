import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {


    const token = "atoken"

    if (!token) {
        return <Navigate to="/" />
    }

    return children
}

export default PrivateRoute