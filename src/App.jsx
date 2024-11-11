import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/ui/Navbar"
import PermisosTransitorios from "./components/permisos-transitorios/PermisosTransitorios"
import Footer from "./components/ui/Footer"
import { useEffect, useState } from "react"
import { getAllApplications } from "./services/webFormServices"

function App() {

  const [req, setReq] = useState([])

  useEffect(() => {
    (async () => {
      const data = await getAllApplications()
      setReq(data)
    })()
  })

  console.log(req)

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
