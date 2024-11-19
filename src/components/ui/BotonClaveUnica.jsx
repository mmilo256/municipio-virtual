import claveUnica from '../../assets/claveunica.svg'

const BotonClaveUnica = ({ onClick, className, type = "button" }) => {

    if (type === "link") {
        return <a href={onClick} className={`transition-colors flex gap-[4px] h-[48px] items-center justify-center bg-[#0F69C4] hover:bg-[#07305A] px-[14px] py-[8px] ${className}`}>
            <img width={24} src={claveUnica} alt="" />
            <span className='text-base font-bold text-white'>Iniciar sesión</span>
        </a>
    }

    return (
        <button type={type} onClick={onClick} className={`transition-colors flex gap-[4px] h-[48px] items-center justify-center bg-[#0F69C4] hover:bg-[#07305A] px-[14px] py-[8px] ${className}`}>
            <img width={24} src={claveUnica} alt="" />
            <span className='text-base font-bold text-white'>Iniciar sesión</span>
        </button>
    )
}

export default BotonClaveUnica