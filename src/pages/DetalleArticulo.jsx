import { useState } from 'react'
import { Link, useParams } from 'react-router'
import { useArticulos } from '../hooks/useArticulos'
import {
    formatearFecha,
    obtenerEstadoVencimiento,
} from '../utils/inventario'

function DetalleArticulo() {
    const { id } = useParams()
    const { articulos, carrito, agregarAlCarrito } = useArticulos()
    const [mensaje, setMensaje] = useState('')

    const articulo = articulos.find((item) => item.id === id)

    if (!articulo) {
        return (
            <section className="mx-auto max-w-xl py-12 text-center">
                <h1 className="mb-3 text-2xl font-semibold text-chocolate">
                    Artículo no encontrado
                </h1>
                <Link
                    to="/inventario/articulos"
                    className="text-chocolate underline"
                >
                    Volver a los artículos
                </Link>
            </section>
        )
    }

    const cantidadEnCarrito =
        carrito.find((linea) => linea.articuloId === articulo.id)?.cantidad ?? 0

    const estadoVencimiento = obtenerEstadoVencimiento(
        articulo.fechaVencimiento,
    )

    const handleAgregar = () => {
        if (articulo.stock <= 0) {
            setMensaje('No hay unidades disponibles de este artículo.')
            return
        }

        agregarAlCarrito(articulo.id)
        setMensaje('Se agregó una unidad al carrito.')
    }

    return (
        <section className="mx-auto max-w-3xl">
            <Link
                to="/inventario/articulos"
                className="mb-5 inline-block text-sm text-chocolate underline"
            >
                ← Volver a los artículos
            </Link>

            <div className="grid gap-6 rounded-lg border border-black/10 bg-white p-5 shadow-sm sm:grid-cols-[180px_1fr]">
                <img
                    src={articulo.imagen}
                    alt={articulo.nombre}
                    className="h-40 w-40 rounded-lg object-cover"
                />

                <div>
                    <h1 className="mb-4 text-2xl font-semibold text-slate-900">
                        {articulo.nombre}
                    </h1>

                    <dl className="space-y-2 text-slate-700">
                        <div>
                            <dt className="inline font-semibold">Marca: </dt>
                            <dd className="inline">{articulo.marca}</dd>
                        </div>
                        <div>
                            <dt className="inline font-semibold">Categoría: </dt>
                            <dd className="inline">{articulo.tipo}</dd>
                        </div>
                        <div>
                            <dt className="inline font-semibold">Unidades disponibles: </dt>
                            <dd className="inline">{articulo.stock}</dd>
                        </div>
                        <div>
                            <dt className="inline font-semibold">Stock mínimo: </dt>
                            <dd className="inline">{articulo.minimo}</dd>
                        </div>
                        <div>
                            <dt className="inline font-semibold">Vencimiento: </dt>
                            <dd className="inline">
                                {formatearFecha(articulo.fechaVencimiento)}
                            </dd>
                        </div>
                    </dl>

                    <p className="mt-3">
                        <span
                            className={`rounded-full px-2 py-1 text-xs font-semibold ${estadoVencimiento.clases}`}
                        >
                            {estadoVencimiento.texto}
                        </span>
                    </p>

                    <button
                        type="button"
                        onClick={handleAgregar}
                        disabled={articulo.stock <= 0}
                        className="mt-5 rounded-lg bg-lettuce px-4 py-2 font-semibold text-chocolate transition-colors hover:bg-[#c2cf3f] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {articulo.stock > 0 ? 'Agregar al carrito' : 'Sin stock'}
                    </button>

                    <p className="mt-3 text-sm text-slate-700" aria-live="polite">
                        En el carrito: <strong>{cantidadEnCarrito}</strong>{' '}
                        {cantidadEnCarrito === 1 ? 'unidad' : 'unidades'}
                    </p>

                    {mensaje && (
                        <p className="mt-3 text-sm text-sea-pine" role="status">
                            {mensaje}
                        </p>
                    )}

                    <Link
                        to="/carrito"
                        className="ml-4 text-sm text-chocolate underline"
                    >
                        Ver carrito
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default DetalleArticulo