import Card from "./ui/Card"
import { FaRegNewspaper } from "react-icons/fa";
import Container from "./ui/Container";

const iconSize = 40
const cardsData = [
    {
        icon: <FaRegNewspaper size={iconSize} />,
        title: "Permisos Transitorios",
        desc: "Solicita autorizaciones temporales para eventos o actividades específicas.",
        href: "permisos-transitorios"
    },
    {
        icon: <FaRegNewspaper size={iconSize} />,
        title: "Solicitar uso Estadio Municipal",
        desc: "Reserva tu hora para usar el Estadio Municipal",
        href: "solicitar-estadio",
        soon: true
    }
]

const CardsGrid = () => {
    return (

        <Container className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cardsData.map((card, index) => (
                <Card
                    soon={card.soon}
                    key={index}
                    icon={card.icon}
                    title={card.title}
                    desc={card.desc}
                    href={card.href}
                />
            ))}
        </Container>

    )
}

export default CardsGrid