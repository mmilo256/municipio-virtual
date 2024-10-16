import { NavLink } from 'react-router-dom'

// Componente Button que puede ser un botón o un enlace estilizado
const Button = ({ children, variant = "primary", type = "button", href, onClick, disabled, fullWidth }) => {
    // Determina los estilos del botón según el tipo de variante
    let buttonStyles;
    switch (variant) {
        case "primary":
            buttonStyles = `bg-[#0F69C4] hover:bg-[#104B87] disabled:bg-blue-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center ${fullWidth && "w-full"}`
            break
        case "secondary":
            buttonStyles = `bg-white hover:bg-blue-100 border border-[#0F69C4] text-[#0F69C4] py-3 px-5 font-bold  text-center ${fullWidth && "w-full"}`
            break
        case "approval":
            buttonStyles = `bg-green-600 hover:bg-green-500 disabled:bg-green-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center ${fullWidth && "w-full"}`
            break
        case "reject":
            buttonStyles = `bg-red-600 hover:bg-red-500 disabled:bg-red-400 disabled:cursor-not-allowed text-white py-3 px-5 font-bold  text-center ${fullWidth && "w-full"}`
            break
    }

    // Renderiza un enlace o un botón según el tipo especificado
    return (
        type === "link"
            ? <NavLink disabled={disabled} to={href} className={`block transition-colors ${buttonStyles}`}>
                <span className='underline'>{children}</span>
            </NavLink>
            : <button disabled={disabled} onClick={onClick} type={type} className={`block transition-colors ${buttonStyles}`}>
                <span className='underline'>{children}</span>
            </button>
    )
}

export default Button
