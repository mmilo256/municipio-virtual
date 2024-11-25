import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import useAuthStore from "../stores/useAuthStore"
import { verifySession } from "../utils/utils"
import ErrorPage from "./ErrorPage"

const PrivateRoute = ({ children }) => {

    const user = useAuthStore(state => state.user)
    const setUser = useAuthStore(state => state.setUser)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {

        verifySession(setUser, setLoading, setError)

    }, [setUser])



    if (loading) {
        return // Componente de página cargando
    }

    if (error) {
        return <ErrorPage />
    }

    if (!user) {
        return <Navigate to="/" />
    }

    return children

}

export default PrivateRoute