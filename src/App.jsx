import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PermisosTransitorios from "./components/permisos-transitorios/PermisosTransitorios"
import Login from "./components/Login"
import PrivateRoute from "./components/PrivateRoute"
import Pruebas from "./components/Pruebas"

function App() {

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
