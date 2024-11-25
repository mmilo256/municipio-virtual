import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { verifyToken } from "../services/authServices"
import useAuthStore from "../stores/useAuthStore"

const PrivateRoute = ({ children }) => {

    const user = useAuthStore(state => state.user)
    const setUser = useAuthStore(state => state.setUser)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        (async () => {
            try {
                const user = await verifyToken()
                setUser(user)
            } catch (error) {
                console.error("No se pudo verificar el token.", error.message)
                setUser(null)
            } finally {
                setLoading(false)
            }
        })()
    }, [setUser])

    

    if (loading) {
        return // Componente de página cargando
    }

    if (!user) {
        return <Navigate to="/" />
    }

    return children

}

export default PrivateRoute