import { useNavigate } from "react-router-dom"
import Input from "../ui/Input"
import { useEffect, useState } from "react"
import usePermisosTransitoriosStore from "../../stores/usePermisosTransitoriosStore"
import { formatRut, onlyNumberInput, validateEmail } from "../../utils/utils"
import { ORG_TYPES } from "../../constants/constants"
import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const Form01 = () => {
    // Obtiene datos del formulario y la función para actualizar datos de la organización desde el store
    const formData = usePermisosTransitoriosStore(state => state.formData)
    const setOrgData = usePermisosTransitoriosStore(state => state.setOrgData)

    // Estados locales para cada campo del formulario
    const [name, setName] = useState(formData.orgData.name)
    const [rut, setRut] = useState(formData.orgData.rut)
    const [address, setAddress] = useState(formData.orgData.address)
    const [email, setEmail] = useState(formData.orgData.email)
    const [phone, setPhone] = useState(formData.orgData.phone)
    const [orgType, setOrgType] = useState(formData.orgData.orgType)

    const [isValid, setIsValid] = useState(false)

    // Hook para la navegación programática
    const navigate = useNavigate()

    // Función para navegar a la página anterior
    const onClickPrev = () => {
        navigate("/permisos-transitorios")
    }

    // Validar campos
    useEffect(() => {
        if (name && rut && address && email && phone && orgType) {
            if (validateEmail(email)) {
                setIsValid(true)
            } else {
                setIsValid(false)
            }
        } else {
            setIsValid(false)
        }
    }, [name, rut, address, email, phone, orgType])

    // Función para navegar a la página siguiente y actualizar los datos de la organización en el store
    const onClickNext = () => {
        // Crea un objeto con los datos del formulario
        const data = {
            name,
            rut,
            address,
            email,
            phone,
            orgType
        }
        // Actualiza el estado global con los datos de la organización
        setOrgData(data)
        // Navega a la página de datos del representante
        navigate("/permisos-transitorios/datos-representante")
    }



    return (
        <Container>
            <form>
                <Heading align="left">Solicitud de Autorización Transitoria</Heading>
                <Heading align="left" level={3}>1. Datos de la organización</Heading>
                <div className="grid md:grid-cols-2 gap-5">
                    {/* Renderiza los campos del formulario con valores y manejadores de cambio */}
                    <Input max={90} placeholder="Nombre de la organización" value={name} onChange={(e) => { setName(e.target.value) }} label="Nombre o razón social" />
                    <Input max={12} placeholder="77.777.777-K" value={rut} onChange={(e) => { setRut(formatRut(e.target.value)) }} label="RUT" />
                    <Input max={90} placeholder="José Pinto Pérez 1037" value={address} onChange={(e) => { setAddress(e.target.value) }} label="Domicilio" />
                    <Input max={40} placeholder="ejemplo@gmail.com" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" label="Correo electrónico" />
                    <Input max={9} placeholder="942250219" value={phone} onChange={(e) => { setPhone(onlyNumberInput(e.target.value)) }} type="text" label="Teléfono" />
                    <Input value={orgType} onChange={(e) => { setOrgType(e.target.value) }} type="select" options={ORG_TYPES} label="Tipo de organización" />
                </div>
                <div className="flex justify-end py-5 gap-4">
                    <Button onClick={onClickPrev} variant="secondary">Atrás</Button>
                    <Button disabled={!isValid} onClick={onClickNext}>Siguiente</Button>
                </div>
            </form>
        </Container>
    )
}

export default Form01
