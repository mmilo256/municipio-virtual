import LogoutIcon from '../../assets/logout.svg?react';

const LogoutButton = ({ username = "Cerrar sesión", darkMode = false }) => {


    const logout = () => {
        const logoutURL = "https://accounts.claveunica.gob.cl/api/v1/accounts/app/logout?redirect=logout_uri"
        window.location.href = logoutURL
        setTimeout(() => {
            window.location.href = "/"
        }, 1000);
    }

    return (
        <button onClick={logout} className='cursor-pointer flex items-center gap-2 hover:bg-slate-200 transition-colors p-2 rounded'>
            <span className={`font-light ${darkMode ? "text-white" : "text-primary"}`}>{username}</span>
            <LogoutIcon className={darkMode ? "stroke-white" : "stroke-primary"} />
        </button>
    )
}

export default LogoutButton