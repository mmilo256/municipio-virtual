import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import PermisosTransitorios from "./components/permisos-transitorios/PermisosTransitorios"
import Login from "./components/Login"

function App() {

  return (
    < main className="flex-grow font-roboto" >
      <Routes>
        <Route index element={<Login />} />
        <Route path="/inicio" element={<Home />} />
        <Route path="/permisos-transitorios/*" element={<PermisosTransitorios />} />
      </Routes>
    </main >

  )
}

export default App
