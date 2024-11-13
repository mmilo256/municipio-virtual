import { useNavigate } from "react-router-dom"
import BotonClaveUnica from "./ui/BotonClaveUnica"

const Login = () => {

    const navigate = useNavigate()

    const login = () => {
        console.log("hola")
        navigate("/inicio")
    }

    return (
        <div className="grid grid-cols-5 min-h-svh bg-slate-50">
            <div className="col-span-3 bg-gradient-to-br from-sky-600 to-violet-800 flex flex-col justify-center text-center items-center text-white">
                <h2 className="text-4xl">Ilustre Municipalidad de Chonchi</h2>
                <h1 className="text-7xl font-bold">Municipio Virtual</h1>
            </div>
            <div className="p-16 col-span-2">
                <h2 className="text-sky-600 font-bold text-4xl mb-4">Municipio Virtual de Chonchi</h2>
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