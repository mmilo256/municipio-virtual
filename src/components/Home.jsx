import CardsGrid from "./CardsGrid"
import Layout from "./Layout"
import Container from "./ui/Container"
import Heading from "./ui/Heading"

const Home = () => {
    return (
        <Layout>
            <div style={{ backgroundPosition: 'center 70%' }} className="relative bg-[url('/chonchi-aereo.jpg')] bg-cover bg-center py-32 mb-2">
                <div className="absolute inset-0 bg-primary bg-opacity-80 flex flex-col justify-center items-center">
                    <Container>
                        <Heading darkMode>MUNICIPIO VIRTUAL</Heading>
                        <p className="text-center text-slate-300">Accede a nuestros servicios en línea de manera fácil y rápida.</p>
                    </Container>
                </div>
            </div>
            <Heading level={3}>Servicios disponibles</Heading>

            <CardsGrid />
        </Layout>
    )
}

export default Home