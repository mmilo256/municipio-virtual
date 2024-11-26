import { Routes, Route, useNavigate } from "react-router-dom"
import Form01 from "./Form01"
import Form02 from "./Form02"
import Form03 from "./Form03"
import Form04 from "./Form04"
import FormCompleted from "./FormCompleted"
import GuideLayout from "../ui/GuideLayout"
import Button from "../ui/Button"
import { useEffect, useState } from "react"
import { fetchProcedureById } from "../../services/proceduresServices"

const PermisosTransitorios = () => {

    // Estados
    const [procedure, setProcedure] = useState({})

    // Hooks
    const navigate = useNavigate()

    // Obtener toda la información del trámite
    useEffect(() => {
        const loadProcedureData = async () => {
            const procedure = await fetchProcedureById(1)
            setProcedure(procedure)
        }
        loadProcedureData()
    }, [])

    const iniciarTramite = () => {
        navigate("datos-organizacion")
    }

    // Función para descargar documento
    const onDownloadDoc = () => {
        alert("Documento descargado")
    }

    const DownloadDocButton = () => {
        return (
            <Button onClick={onDownloadDoc}>Descargar documento</Button>
        )
    }

    return (
        <div>
            {/* Componente de navegación principal */}
            <Routes>
                <Route path="/" element={<GuideLayout data={procedure} onClick={iniciarTramite} extraReq={<DownloadDocButton />} />} />
                <Route path="datos-organizacion" element={<Form01 />} />
                <Route path="datos-representante" element={<Form02 />} />
                <Route path="detalles-permiso" element={<Form03 />} />
                <Route path="antecedentes" element={<Form04 />} />
                <Route path="solicitud-enviada" element={<FormCompleted />} />
            </Routes>
        </div>
    )
}

export default PermisosTransitorios