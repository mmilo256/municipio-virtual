import Button from "../ui/Button"
import Container from "../ui/Container"
import Heading from "../ui/Heading"

const FormGuide = () => {
    return (
        <Container>
            <Heading level={1}>Solicitud de Autorización <br /> Especial Transitoria</Heading>


            <p className="text-xl font-bold mb-2">Instrucciones</p>
            <p className="text-sm mb-4">La solicitud debe realizarse con al menos <span className="font-semibold">5 días hábiles</span> de anticipación y será evaluada por la <span className="font-semibold">Dirección de Administración Municipal</span>. Las autorizaciones se otorgarán por un <span className="font-semibold">máximo de 3 días</span>. Tras la actividad, la organización deberá informar el uso de los fondos a la <span className="font-semibold">Dirección de Desarrollo Comunitario</span> en un <span className="font-semibold">plazo de 30 días</span>. No se otorgarán permisos a quienes tengan <span className="font-semibold">rendiciones pendientes ni más de 3 autorizaciones por año para el expendio de alcohol</span>, excepto en fiestas nacionales o eventos turísticos. La limpieza y seguridad son responsabilidad de los organizadores.</p>


            <p className="text-xl font-bold mb-2">Requisitos</p>
            <p className="text-sm bg-amber-200 inline-block px-2 py-1 mb-2 text-amber-800 ">IMPORTANTE: Antes de continuar con la solicitud, asegúrese de contar con los siguientes antecedentes digitalizados</p>
            <ul className="list-disc list-inside mb-3 text-sm">
                <li>Cédula de identidad del presidente de la organización</li>
                <li>RUT Tributario, en caso de organizaciones</li>
                <li>Certificado de vigencia de persona jurídica</li>
                <li>Documento que acredite la ocupación legal del recinto donde se realizará la actividad</li>
                <li>Declaración jurada simple que el presidente de la organización no está afecto a prohibiciones del artículo n°4 ley 19.925 de alcoholes (sólo si la autorización es con venta y consumo de alcohol)</li>
                <li>Certificado de antecedentes para fines especiales del presidente de la organización (sólo si la autorización es con venta y consumo de alcohol)</li>
            </ul>
            <p className="font-semibold text-sm mb-2">
                Además, debe descargar el siguiente documento, imprimirlo, obtener la firma del representante legal de su organización, y luego subirlo al formulario junto
                con los demás antecedentes.
            </p>
            <div className="flex justify-center sm:justify-start py-4">
                <Button variant="secondary">Descargar documento</Button>
            </div>
            <p className="my-3 text-sm">Una vez teniendo todos los documentos digitalizados, puede continuar con la solicitud.</p>

            <div className="ml-auto sm:max-w-48 bg-red-200">
                <Button type="link" fullWidth href="datos-organizacion" variant="primary">Iniciar solicitud</Button>
            </div>

        </Container>
    )
}

export default FormGuide