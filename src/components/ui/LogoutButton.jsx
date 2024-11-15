import { useNavigate } from 'react-router-dom';
import LogoutIcon from '../../assets/logout.svg?react';

const LogoutButton = ({ username = "Cerrar sesión", darkMode = false, onClick }) => {

    const navigate = useNavigate()

    const handleLogout = () => {
        onClick && onClick()
        navigate("/")
    }

    return (
        <button onClick={handleLogout} className='flex items-center gap-2 hover:bg-slate-200 transition-colors p-2 rounded'>
            <span className={`font-light ${darkMode ? "text-white" : "text-primary"}`}>{username}</span>
            <LogoutIcon className={darkMode ? "stroke-white" : "stroke-primary"} />
        </button>
    )
}

export default LogoutButton