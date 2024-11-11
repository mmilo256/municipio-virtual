import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/ui/Navbar"
import PermisosTransitorios from "./components/permisos-transitorios/PermisosTransitorios"
import Footer from "./components/ui/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/permisos-transitorios/*" element={<PermisosTransitorios />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
