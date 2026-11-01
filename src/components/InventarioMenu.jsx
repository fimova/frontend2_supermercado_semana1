import { NavLink } from 'react-router-dom'

function InventarioMenu() {
  const clasesLink = ({ isActive }) =>
    `rounded px-3 py-1 text-sm no-underline transition-colors ${
      isActive
        ? 'bg-sea-pine text-cream font-semibold'
        : 'text-sea-pine hover:bg-sea-pine/10'
    }`

  return (
    <nav className="border-b border-sea-pine/20 bg-cream/80">
      <div className="mx-auto flex max-w-6xl items-center gap-2 px-3 py-2">
        <span className="text-xs font-semibold uppercase tracking-wide text-sea-pine/80">
          Inventario
        </span>
        <NavLink to="/inventario/nuevo" className={clasesLink}>
          Nuevo artículo
        </NavLink>
        <NavLink to="/inventario/articulos" className={clasesLink}>
          Lista de artículos
        </NavLink>
      </div>
    </nav>
  )
}

export default InventarioMenu