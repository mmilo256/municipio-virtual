import Layout from "../Layout"
import Button from "./Button"
import Container from "./Container"
import Heading from "./Heading"


const GuideLayout = ({ onClick, data }) => {

    return (
        <Layout>
            <Container>
                <div className="mb-4">
                    <Heading align="left">{data.titulo}</Heading>
                </div>
                <div className="grid grid-cols-9 gap-5 text-slate-700">
                    <main className="col-span-6 pr-10">
                        <article>
                            <Heading align="left" level={3}>Descripción</Heading>
                            <p className="text-justify">{data.descripcion}</p>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Información adicional</Heading>
                            <ul className="list-disc list-inside">
                                {data.infoAdicional.map((info, index) => (
                                    <li key={index} className="mb-2">{info}</li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Requisitos</Heading>
                            <ul className="list-disc list-inside">
                                {data.requisitos.map((info, index) => (
                                    <li key={index} className="mb-2">{info}</li>
                                ))}
                            </ul>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Costo</Heading>
                            <p>{data.costo}</p>
                        </article>
                        <article>
                            <Heading align="left" level={3}>Modalidad de pago</Heading>
                            <p>{data.modalidadPago}</p>
                        </article>
                    </main>
                    <div className="col-span-3 max-h-min shadow-lg rounded p-5 shadow-slate-400">
                        <Heading align="center" level={3}>Contacto y atención</Heading>
                        <Heading align="left" level={4}>Dirección</Heading>
                        <p>{data.direccion}</p>
                        <Heading align="left" level={4}>Horario de atención</Heading>
                        <p>{data.horarioAtencion}</p>
                        <Heading align="left" level={4}>Correo electrónico</Heading>
                        <p>{data.email}</p>
                        <Heading align="left" level={4}>Teléfono(s)</Heading>
                        {data.telefonos.map((num, index) => (
                            <p key={index}>{num}</p>
                        ))}
                        <div className="mt-4">
                            <Button onClick={onClick} variant="secondary" fullWidth>Iniciar trámite</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}

export default GuideLayout