import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import InventarioMenu from './components/InventarioMenu'
import Footer from './components/Footer'
import Inicio from './pages/Inicio'
import QuienesSomos from './pages/QuienesSomos'
import Contacto from './pages/Contacto'
import NuevoArticulo from './pages/NuevoArticulo'
import ListaArticulos from './pages/ListaArticulos'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Navbar />
      {/* Menú de inventario */}
      <InventarioMenu />

      <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />

          {/* Páginas de inventario */}
          <Route path="/inventario/nuevo" element={<NuevoArticulo />} />
          <Route path="/inventario/articulos" element={<ListaArticulos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App