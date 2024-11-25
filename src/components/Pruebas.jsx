import { useNavigate } from "react-router-dom"
import { API_URL } from "../constants/constants"

const Pruebas = () => {

    const navigate = useNavigate()

    const BTN_STYLES = "bg-blue-500 text-center max-w-60 text-white px-3 py-2 rounded"
    const claveUnica_URL = `${API_URL}/login`

    const button1 = async () => {
        const response = await fetch(`${API_URL}/user-info`, { credentials: "include" })
        const data = await response.json()
        console.log(data)
        if (data.data) {
            sessionStorage.setItem('session', JSON.stringify(data))
            alert("Redirigiendo a inicio...")
            navigate("/inicio")
        
        } else {
            alert("No has iniciado sesión")
        }
    }

    return (
        <div className="flex flex-col gap-5">
            <a href={claveUnica_URL} className={BTN_STYLES}>1. Iniciar sesión en ClaveÚnica</a>
            <button onClick={button1} className={BTN_STYLES}>2. Comprueba si se ha iniciado sesión</button>
        </div>
    )
}

export default Pruebas