import { Link } from 'react-router'

function NotFound() {
    return (
        <div className="mx-auto max-w-xl py-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-chocolate">404</h1>

            <p className="mb-4 text-slate-700">
                La página buscada no existe o fue movida.
            </p>

            <Link
                to="/"
                className="inline-flex items-center rounded-md bg-lettuce px-4 py-2 text-sm font-medium text-chocolate no-underline transition-colors hover:bg-[#c2cf3f] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-chocolate"
            >
                Volver al inicio
            </Link>
        </div>
    )
}

export default NotFound