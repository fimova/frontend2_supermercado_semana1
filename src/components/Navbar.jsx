import { useState } from 'react'
import { Link, NavLink } from 'react-router'

const clasesNavLink = ({ isActive }) =>
  `block px-3 py-2 transition-colors ${isActive
    ? 'text-white font-semibold underline'
    : 'text-white/70 no-underline hover:text-white'
  }`

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false)

  const cerrarMenu = () => setMenuAbierto(false)

  return (
    <nav aria-label="Navegación principal" className="bg-chocolate text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between px-3 py-2">
        <Link
          className="py-2 text-xl font-semibold text-white no-underline"
          to="/"
          onClick={cerrarMenu}
        >
          SuperInventario
        </Link>

        <button
          type="button"
          className="rounded border border-white/25 px-3 py-1 text-white/80 transition-colors hover:text-white md:hidden"
          aria-controls="navbarNav"
          aria-expanded={menuAbierto}
          aria-label={
            menuAbierto ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'
          }
          onClick={() => setMenuAbierto((abierto) => !abierto)}
        >
          <svg
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <div
          id="navbarNav"
          className={`${menuAbierto ? 'block' : 'hidden'} w-full md:block md:w-auto`}
        >
          <ul className="m-0 flex list-none flex-col gap-1 p-0 md:ml-auto md:flex-row md:items-center md:gap-0">
            <li>
              <NavLink
                to="/"
                end
                className={clasesNavLink}
                onClick={cerrarMenu}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quienes-somos"
                className={clasesNavLink}
                onClick={cerrarMenu}
              >
                Quiénes somos
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacto"
                className={clasesNavLink}
                onClick={cerrarMenu}
              >
                Contáctanos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
