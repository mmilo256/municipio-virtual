import Layout from "../Layout"
import Button from "./Button"
import Container from "./Container"
import Heading from "./Heading"

const infoTramite = {
    titulo: "Solicitud de Autorización Especial Transitoria",
    descripcion: "Solicitud de un permiso para realizar eventos transitorios con propósitos comunitarios, educacionales y/o actividades con fines comerciales.",
    infoAdicional: [
        "La solicitud debe realizarse con al menos 5 días hábiles de anticipación y será evaluada por la Dirección de Administración Municipal.",
        "Las autorizaciones se otorgarán por un máximo de 3 días.",
        "Tras la actividad, la organización deberá informar el uso de los fondos a la Dirección de Desarrollo Comunitario en un plazo de 30 días.",
        "La limpieza y seguridad son responsabilidad de los organizadores."],
    requisitos: [
        "Cédula de identidad",
        "RUT Tributario (en caso de organizaciones)",
        "Certificado de vigencia de persona jurídica",
        "Documento que acredite la ocupación legal del recinto donde se realizará la actividad",
        "Declaración jurada simple que el presidente de la organización no está afecto a prohibiciones del artículo n°4 ley 19.925 de alcoholes (sólo si la autorización es con venta y consumo de alcohol)",
        "Certificado de antecedentes para fines especiales del presidente de la organización (sólo si la autorización es con venta y consumo de alcohol)",
        "NO debe tener rendiciones pendientes con la Municipalidad",
        "NO debe tener más de 3 permisos en el mismo año para el expendio de alcohol (exceptuando fechas nacionales y eventos turísticos)"
    ],
    costo: "No tiene costo"

}


const GuideLayout = () => {

    return (
        <Layout>
            <Container>
                <div className="mb-4">
                    <Heading align="left">{infoTramite.titulo}</Heading>
                </div>
                <div className="grid grid-cols-9 gap-5 text-slate-700">
                    <main className="col-span-6 pr-10">
                        <article>
                            <Heading align="left" level={3}>Descripción</Heading>
                            <p className="text-justify">{infoTramite.descripcion}</p>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Información adicional</Heading>
                            <ul className="list-disc list-inside">
                                {infoTramite.infoAdicional.map((info, index) => (
                                    <li key={index} className="mb-2">{info}</li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Requisitos</Heading>
                            <ul className="list-disc list-inside">
                                {infoTramite.requisitos.map((info, index) => (
                                    <li key={index} className="mb-2">{info}</li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Costo</Heading>
                            <p>{infoTramite.costo}</p>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Modalidad de pago</Heading>
                            <p>Opciones de pago si es que lo requiere</p>
                        </article>
                    </main>
                    <div className="col-span-3 max-h-min shadow-lg rounded p-5 shadow-slate-400">
                        <Heading align="center" level={3}>Contacto y atención</Heading>
                        <Heading align="left" level={4}>Dirección</Heading>
                        <p>Calle Ficticia 123</p>
                        <Heading align="left" level={4}>Horario de atención</Heading>
                        <p>Lunes a viernes de 9:00 a 13:30 hrs.</p>
                        <Heading align="left" level={4}>Correo electrónico</Heading>
                        <p>correo@gmail.com</p>
                        <Heading align="left" level={4}>Teléfono(s)</Heading>
                        <p>+569 39849854</p>
                        <p>+569 39849854</p>
                        <div className="mt-4">
                            <Button fullWidth>Iniciar trámite</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default GuideLayout