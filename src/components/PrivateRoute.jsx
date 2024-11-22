import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {


    const token = "token"

    if (!token) {
        return <Navigate to="/" />
    }

    return children
}

export default PrivateRoute