import { useNavigate } from "react-router-dom"
import BotonClaveUnica from "./ui/BotonClaveUnica"

const Login = () => {

    const navigate = useNavigate()

    const login = () => {
        console.log("hola")
        navigate("/inicio")
    }
    return (
        <div className="grid grid-cols-7 min-h-svh bg-slate-50">
            <div className="relative col-span-4 bg-[url('/chonchi-aereo.jpg')]">
                <div className="absolute inset-0 bg-primary bg-opacity-85 flex flex-col justify-center text-center items-center text-white">
                    <h2 className="text-4xl opacity-50">Ilustre Municipalidad de Chonchi</h2>
                    <h1 className="text-7xl font-bold">Municipio <span className="text-secondary">Virtual</span></h1>
                </div>
            </div>
            <div className="p-16 col-span-3">
                <h2 className="text-primary font-bold text-4xl mb-4">Municipio Virtual de Chonchi</h2>
                <div className="text-slate-600 text-xl">
                    <p className="leading-8">A través de este portal, podrá acceder a una amplia variedad de trámites y servicios ofrecidos por la <strong>Municipalidad de Chonchi.</strong></p>
                    <p className="my-5">¿Cómo funciona?</p>
                    <ol className="list-disc list-inside leading-8">
                        <li>Ingrese al portal utilizando su <strong>ClaveÚnica.</strong></li>
                        <li>Seleccione el servicio o trámite que desea realizar.</li>
                        <li>Complete los campos solicitados con la información requerida.</li>
                        <li>Recibirá notificaciones sobre el estado y resultado de su solicitud a través de correo electrónico u otros medios de contacto disponibles.</li>
                    </ol>
                </div>
                <div className="my-5">
                    <BotonClaveUnica onClick={login} />
                </div>
            </div>
        </div>
    )
}

export default Login