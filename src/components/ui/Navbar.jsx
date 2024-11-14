import logo from '../../assets/logo.png'
import Container from './Container'

const Navbar = () => {
    return (
        <header>
            <div className='bg-primary h-20'>
            </div>
            <nav className='bg-white shadow py-4'>
                <Container className="flex justify-between items-center">
                    <a href="https://municipalidadchonchi.cl">
                        <img className='h-16' src={logo} alt="logotipo municipalidad de chonchi" />
                    </a>
                    <div className='flex items-center gap-8'>
                        <ul className='flex gap-4 text-blue-950'>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/">Inicio</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/blog/">Noticias</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/multimedia/">Multimedia</a></li>
                            <li className='hover:text-cyan-500'><a href="http://intranetchonchi.smc.cl/">Intranet</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/contacto/">Contacto</a></li>
                        </ul>
                        <a className='py-1 px-3 bg-primary hover:bg-primaryHover text-white rounded' href="https://municipalidadchonchi.cl">Cerrar sesión</a>
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar