import { NavLink } from 'react-router'
import { useArticulos } from '../hooks/useArticulos'

const clasesLink = ({ isActive }) =>
  `rounded px-3 py-2 text-sm transition-colors ${isActive
    ? 'bg-sea-pine font-semibold text-cream'
    : 'text-sea-pine hover:bg-sea-pine/10'
  }`

function InventarioMenu() {
  const { carrito } = useArticulos()

  const totalUnidades = carrito.reduce(
    (total, linea) => total + linea.cantidad,
    0,
  )

  return (
    <nav aria-label="Navegación del inventario" className="border-b border-sea-pine/20 bg-cream/80">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center gap-2 px-3 py-2">
        <NavLink to="/inventario/nuevo" className={clasesLink}>
          Nuevo artículo
        </NavLink>

        <NavLink to="/inventario/articulos" className={clasesLink}>
          Lista de artículos
        </NavLink>

        <NavLink to="/carrito" className={clasesLink}>
          Carrito{totalUnidades > 0 ? ` (${totalUnidades})` : ''}
        </NavLink>
      </div>
    </nav>
  )
}

export default InventarioMenu