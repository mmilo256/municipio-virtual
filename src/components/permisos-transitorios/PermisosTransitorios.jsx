import { Routes, Route } from "react-router-dom"
import Form01 from "./Form01"
import Form02 from "./Form02"
import Form03 from "./Form03"
import Form04 from "./Form04"
import FormCompleted from "./FormCompleted"
import GuideLayout from "../ui/GuideLayout"
const WebForm = () => {
    return (
        <div>
            {/* Componente de navegación principal */}
            <Routes>
                <Route path="/" element={<GuideLayout />} />
                <Route path="datos-organizacion" element={<Form01 />} />
                <Route path="datos-representante" element={<Form02 />} />
                <Route path="detalles-permiso" element={<Form03 />} />
                <Route path="antecedentes" element={<Form04 />} />
                <Route path="solicitud-enviada" element={<FormCompleted />} />
            </Routes>
        </div>
    )
}

export default WebForm