import { useState } from 'react';
import logo from '../../assets/logo.png'
import Container from './Container'
import { IoMenu } from "react-icons/io5";
import { FaTimes } from "react-icons/fa";
import LogoutButton from './LogoutButton';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)

    const handleToggleMenu = () => {
        setToggleMenu(!toggleMenu)
    }

    const handleLogout = () => {
        setToggleMenu(false)
    }

    return (
        <header>
            <div className='bg-primary h-20'>
            </div>
            <nav className='bg-white shadow py-4'>
                <Container className="flex justify-between items-center">
                    <a href="https://municipalidadchonchi.cl">
                        <img className='h-16' src={logo} alt="logotipo municipalidad de chonchi" />
                    </a>
                    <button onClick={handleToggleMenu} className='md:hidden bg-slate-800 text-white rounded p-1'><IoMenu size={35} /> </button>
                    {/* Menú de navegación para pantallas móviles */}
                    <div className={`md:hidden fixed inset-0 bg-black bg-opacity-80 z-10 ${toggleMenu ? "block" : "hidden"}`}>

                        <ul className='bg-slate-800 bg-opacity-90 text-white pt-16 font-medium flex flex-col absolute bottom-0 top-0 w-[90%]'>
                            <button onClick={handleToggleMenu} className='absolute right-2 top-5 z-50'><FaTimes size={35} /></button>
                            <li className='border-b border-b-slate-500 p-3'><a href="https://municipalidadchonchi.cl/">Inicio</a></li>
                            <li className='border-b border-b-slate-500 p-3'><a href="https://municipalidadchonchi.cl/web/blog/">Noticias</a></li>
                            <li className='border-b border-b-slate-500 p-3'><a href="https://municipalidadchonchi.cl/web/multimedia/">Multimedia</a></li>
                            <li className='border-b border-b-slate-500 p-3'><a href="http://intranetchonchi.smc.cl/">Intranet</a></li>
                            <li className='border-b border-b-slate-500 p-3'><a href="https://municipalidadchonchi.cl/web/contacto/">Contacto</a></li>
                            <div className='p-3 my-5'>
                                <LogoutButton onClick={handleLogout} darkMode />
                            </div>
                        </ul>
                    </div>
                    {/* Menú de navegación para pantallas grandes */}
                    <div className='hidden md:flex items-center gap-8'>
                        <ul className='flex gap-4 text-blue-950'>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/">Inicio</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/blog/">Noticias</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/multimedia/">Multimedia</a></li>
                            <li className='hover:text-cyan-500'><a href="http://intranetchonchi.smc.cl/">Intranet</a></li>
                            <li className='hover:text-cyan-500'><a href="https://municipalidadchonchi.cl/web/contacto/">Contacto</a></li>
                        </ul>
                        <LogoutButton />
                    </div>
                </Container>
            </nav>
        </header>
    )
}

export default Navbar