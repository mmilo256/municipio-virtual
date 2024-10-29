import { useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import RadioGroup from "../ui/RadioGroup"
import usePermisosTransitoriosStore from "../../stores/usePermisosTransitoriosStore"
import { useEffect, useState } from "react"
import Button from "../ui/Button"
import Heading from "../ui/Heading"
import Container from "../ui/Container"

// Opciones para los campos de radio (Sí/No)
const opYesNo = [{ label: "Si", value: "true" }, { label: "No", value: "false" }]

const Form03 = () => {

    // Obtiene datos del formulario y la función para actualizar datos de permisos desde el store
    const formData = usePermisosTransitoriosStore(state => state.formData)
    const setPermissionData = usePermisosTransitoriosStore(state => state.setPermissionData)

    // Estados locales para cada campo del formulario, inicializados con datos del estado global
    const [name, setName] = useState(formData.permissionData.name)
    const [place, setPlace] = useState(formData.permissionData.place)
    const [startDate, setStartDate] = useState(formData.permissionData.startDate)
    const [startTime, setStartTime] = useState(formData.permissionData.startTime)
    const [endDate, setEndDate] = useState(formData.permissionData.endDate)
    const [endTime, setEndTime] = useState(formData.permissionData.endTime)
    const [alcohol, setAlcohol] = useState(formData.permissionData.alcohol)
    const [food, setFood] = useState(formData.permissionData.food)
    const [description, setDescription] = useState(formData.permissionData.description)
    const [purpose, setPurpose] = useState(formData.permissionData.purpose)

    const [isValid, setIsValid] = useState(false)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/permisos-transitorios/datos-representante")
    }

    // Validar campos
    useEffect(() => {
        if (name.length >= 3 && place.length >= 3 && startDate && startTime && endDate && endTime && alcohol && food && description.length >= 3 && purpose.length >= 3) {
            setIsValid(true)

        } else {
            setIsValid(false)
        }
    }, [name, place, startDate, startTime, endDate, endTime, alcohol, food, description, purpose])

    // Función para navegar a la página siguiente y actualizar los datos de la organización en el store
    const onClickNext = () => {
        // Crea un objeto con los datos del formulario
        const data = {
            name,
            place,
            startDate,
            startTime,
            endDate,
            endTime,
            alcohol,
            food,
            description,
            purpose
        }
        // Actualiza el estado global con los datos de la organización
        setPermissionData(data)
        // Navega a la página de datos del representante
        navigate("/permisos-transitorios/antecedentes")
    }

    return (
        <Container>
            <form>
                <Heading align="left">Solicitud de Autorización Transitoria</Heading>
                <Heading align="left" level={3}>1. Detalles del permiso</Heading>
                <div className="grid md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                        <Input max={90} placeholder="Ej: Bingo bailable" value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre de la actividad" />
                    </div>
                    <div className="md:col-span-2">
                        <Input max={90} placeholder="Ej: Gimnasio Municipal" value={place} onChange={(e) => { setPlace(e.target.value) }} label="Lugar de realización" />
                    </div>
                    <Input value={startDate} onChange={(e) => { setStartDate(e.target.value) }} type="date" label="Fecha de inicio" />
                    <Input value={startTime} onChange={(e) => { setStartTime(e.target.value) }} type="time" label="Hora de inicio" />
                    <Input value={endDate} onChange={(e) => { setEndDate(e.target.value) }} type="date" label="Fecha de término" />
                    <Input value={endTime} onChange={(e) => { setEndTime(e.target.value) }} type="time" label="Hora de término" />
                    <div className="md:col-span-2">
                        {/* Grupo de botones de radio para consumo de alcohol */}
                        <RadioGroup selectedValue={alcohol} onChange={setAlcohol} label="Consumo de alcohol" options={opYesNo} name="alcohol" />
                    </div>
                    {/* Grupo de botones de radio para venta de alimentos */}
                    <RadioGroup selectedValue={food} onChange={setFood} label="Venta de alimentos" options={opYesNo} name="alimentos" />
                    <div className="md:col-span-4">
                        {/* Campo de texto para descripción de la actividad */}
                        <Input max={250} placeholder="Breve descripción de la actividad a realizar" value={description} onChange={(e) => { setDescription(e.target.value) }} type="textarea" label="Descripción de la actividad" />
                    </div>
                    <div className="md:col-span-4">
                        {/* Campo de texto para destino de los fondos */}
                        <Input max={250} placeholder="Indicar para qué se usarán los fondos recaudados" value={purpose} onChange={(e) => { setPurpose(e.target.value) }} type="textarea" label="Destino de los fondos" />
                    </div>
                </div>
                <div className="flex justify-end py-5 gap-4">
                    <Button onClick={onClickPrev} variant="secondary">Atrás</Button>
                    <Button disabled={!isValid} onClick={onClickNext}>Siguiente</Button>
                </div>
            </form>
        </Container>
    )
}

export default Form03
