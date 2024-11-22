import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PermisosTransitorios from "./components/permisos-transitorios/PermisosTransitorios"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
<<<<<<< HEAD
import Pruebas from "./components/Pruebas"
=======
import { useEffect, useState } from "react"
import { getAccessToken } from "./services/authServices"
>>>>>>> c38b2e7d8d47e4181a3b8a915039f0a1b4176dc0

function App() {

  const [token, setToken] = useState("")

  useEffect(() => {
    (async() => {
      const data = await getAccessToken()
      setToken(data)
    })()
  }, [])

  console.log(token)

  return (
    < main className="flex-grow font-roboto" >
      <Routes>
        <Route index element={<Login />} />
        <Route path="/inicio" element={<PrivateRoute><Home /></PrivateRoute>} />
        <Route path="/pruebas" element={<Pruebas />} />
        <Route path="/permisos-transitorios/*" element={<PrivateRoute><PermisosTransitorios /></PrivateRoute>} />
      </Routes>
    </main >

  )
}

export default App
