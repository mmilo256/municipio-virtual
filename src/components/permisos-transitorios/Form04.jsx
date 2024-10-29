import { useNavigate } from "react-router-dom"
import Upload from "../ui/Upload"
import usePermisosTransitoriosStore from "../../stores/usePermisosTransitoriosStore"
import { useEffect, useState } from "react"
import Alert from "../ui/Alert"
import { createApplication } from "../../services/webFormServices"
import Container from "../ui/Container"
import Heading from "../ui/Heading"
import Button from "../ui/Button"

const Form04 = () => {

    // Función para actualizar los datos de documentos en el estado global
    const formData = usePermisosTransitoriosStore(state => state.formData)
    const setDocsData = usePermisosTransitoriosStore(state => state.setDocsData)

    const [errorMessage, setErrorMessage] = useState("")

    const [showAlert, setShowAlert] = useState(false)

    // Estado local para manejar los archivos subidos
    const [files, setFiles] = useState(formData.docsData)

    const [isValid, setIsValid] = useState(false)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/permisos-transitorios/detalles-permiso")
    }

    useEffect(() => {
        let valid = true
        let errorMsg = ""

        // Verifica que todos los campos obligatorios estén llenos
        if (
            !formData.orgData.name ||
            !formData.orgData.rut ||
            !formData.orgData.address ||
            !formData.orgData.email ||
            !formData.orgData.phone ||
            !formData.orgData.orgType ||
            !formData.personData.name ||
            !formData.personData.rut ||
            !formData.personData.address ||
            !formData.personData.email ||
            !formData.personData.phone ||
            !formData.permissionData.name ||
            !formData.permissionData.place ||
            !formData.permissionData.startDate ||
            !formData.permissionData.startTime ||
            !formData.permissionData.endDate ||
            !formData.permissionData.endTime ||
            !formData.permissionData.alcohol ||
            !formData.permissionData.food ||
            !formData.permissionData.description ||
            !formData.permissionData.purpose
        ) {
            valid = false;
            errorMsg = "Debe rellenar todos los campos obligatorios";
        } else {
            // Validación de fechas
            const { startDate, endDate, startTime, endTime } = formData.permissionData;

            const startDateTime = new Date(`${startDate}T${startTime}`);
            const endDateTime = new Date(`${endDate}T${endTime}`);

            if (startDateTime >= endDateTime) {
                valid = false;
                errorMsg = "La fecha de inicio no puede ser posterior a la fecha de término";
            }
            if (files.length > 10) {
                valid = false
                errorMsg = "No se puede subir más de 10 archivos."
            }
        }

        setIsValid(valid);
        setErrorMessage(errorMsg);
    }, [formData, files.length]);


    // Función para manejar la acción del botón "Enviar solicitud"
    const onClickNext = async () => {
        // Actualiza el estado global con los archivos subidos
        await setDocsData(files)
        // Muestra un mensaje de éxito
        const data = new FormData()
        data.append('org_name', formData.orgData.name)
        data.append('org_rut', formData.orgData.rut)
        data.append('org_address', formData.orgData.address)
        data.append('org_email', formData.orgData.email)
        data.append('org_phone', formData.orgData.phone)
        data.append('org_type', formData.orgData.orgType)
        data.append('owner_name', formData.personData.name)
        data.append('owner_rut', formData.personData.rut)
        data.append('owner_address', formData.personData.address)
        data.append('owner_email', formData.personData.email)
        data.append('owner_phone', formData.personData.phone)
        data.append('owner_phone2', formData.personData.phone2)
        data.append('activity_name', formData.permissionData.name)
        data.append('place', formData.permissionData.place)
        data.append('start_date', formData.permissionData.startDate)
        data.append('start_time', formData.permissionData.startTime)
        data.append('end_date', formData.permissionData.endDate)
        data.append('end_time', formData.permissionData.endTime)
        data.append('is_alcohol', formData.permissionData.alcohol)
        data.append('is_food', formData.permissionData.food)
        data.append('description', formData.permissionData.description)
        data.append('purpose', formData.permissionData.purpose)
        files.forEach(file => {
            data.append('files', file)
        })

        const config = { headers: { 'Content-Type': 'multipart/form-data' } }

        if (isValid) {
            try {
                await createApplication(data, config)
                navigate("/permisos-transitorios/solicitud-enviada")
            } catch (error) {
                console.log(error)
            }
        } else {
            setShowAlert(true)
        }
    }

    return (
        // Renderiza el layout del formulario con título, botones de navegación y texto del botón "Enviar solicitud"
        <>
            <Alert variant="warning" text={errorMessage} visible={showAlert} setVisible={setShowAlert} />

            <Container>
                {/* Título principal del formulario */}
                <Heading>Formulario de Solicitud de Autorización Especial Transitoria</Heading>
                {/* Título específico para la sección del formulario */}
                <Heading align="left" level={3}>4. Antecedentes</Heading>
                {/* Renderiza los campos y componentes hijos del formulario */}
                <form>
                    <Upload files={files} setFiles={setFiles} label="Subir antecedentes y firma del representante legal" />

                    {/* Contenedor para los botones de navegación */}
                    <div className="flex gap-2 justify-end border-t border-t-slate-300 mt-6 pt-6">
                        {/* Botón para retroceder a la página anterior, si se proporciona la función onClickPrev */}
                        {onClickPrev && <Button variant="secondary" type="button" onClick={onClickPrev}>Anterior</Button>}
                        {/* Botón para avanzar al siguiente paso, si se proporciona la función onClickNext */}
                        {onClickNext && <Button variant="primary" type="button" onClick={onClickNext}>Enviar solicitud</Button>}
                    </div>
                </form>
            </Container>
        </>
    )
}

export default Form04
