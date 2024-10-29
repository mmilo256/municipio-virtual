import logo from '../../assets/logo.png'
import Container from './Container'

const Navbar = () => {
    return (
        <nav className='bg-white shadow py-2'>
            <Container className="flex justify-between items-center">
                <a href="https://municipalidadchonchi.cl">
                    <img className='h-16' src={logo} alt="logotipo municipalidad de chonchi" />
                </a>
                <a className='py-1 px-3 bg-primary hover:bg-primaryHover text-white rounded' href="https://municipalidadchonchi.cl">Volver al inicio</a>
            </Container>
        </nav>
    )
}

export default Navbar