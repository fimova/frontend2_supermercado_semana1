import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="mx-auto max-w-xl py-16 text-center">
            <h1 className="mb-4 text-4xl font-bold text-emerald-700">404</h1>
            <p className="mb-4 text-gray-700">
                La página buscada no existe o fue movida.
            </p>
            <Link
                to="/"
                className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-700"
            >
                Volver al inicio
            </Link>
        </div>
    )
}

export default NotFound