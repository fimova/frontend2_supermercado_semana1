import { Link } from 'react-router'
import { useArticulos } from '../hooks/useArticulos'

function Carrito() {
    const {
        articulos,
        carrito,
        incrementarCantidad,
        disminuirCantidad,
    } = useArticulos()

    const lineas = carrito.flatMap((linea) => {
        const articulo = articulos.find(
            (item) => item.id === linea.articuloId,
        )

        return articulo ? [{ ...linea, articulo }] : []
    })

    const totalUnidades = lineas.reduce(
        (total, linea) => total + linea.cantidad,
        0,
    )

    return (
        <section className="mx-auto max-w-5xl">
            <h1 className="mb-3 text-2xl font-semibold text-sea-pine">
                Carrito de compras
            </h1>

            <p className="mb-5 text-sm text-slate-700">
                Las unidades agregadas al carrito ya están descontadas del inventario
                disponible.
            </p>

            {lineas.length === 0 ? (
                <div className="rounded-lg border border-black/10 bg-white p-5">
                    <p className="mb-3 text-slate-700">El carrito está vacío.</p>
                    <Link
                        to="/inventario/articulos"
                        className="text-chocolate underline"
                    >
                        Explorar artículos
                    </Link>
                </div>
            ) : (
                <>
                    <p className="mb-3 text-sm text-slate-700" aria-live="polite">
                        Unidades en el carrito: {totalUnidades}
                    </p>

                    <div className="overflow-x-auto rounded-lg border border-black/10 bg-white shadow-sm">
                        <table className="w-full min-w-[650px] text-left text-sm"> 
                            <caption className="sr-only">Artículos agregados al carrito</caption>
                            <thead className="border-b-2 border-slate-200 bg-slate-50">
                                <tr>
                                    <th scope="col" className="px-3 py-2">Artículo</th>
                                    <th scope="col" className="px-3 py-2">Marca</th>
                                    <th scope="col" className="px-3 py-2">Disponible</th>
                                    <th scope="col" className="px-3 py-2">Cantidad</th>
                                    <th scope="col" className="px-3 py-2">Modificar</th>
                                </tr>
                            </thead>

                            <tbody>
                                {lineas.map(({ articulo, cantidad }) => (
                                    <tr
                                        key={articulo.id}
                                        className="border-b border-slate-200 last:border-0"
                                    >
                                        <td className="px-3 py-3 font-medium">
                                            {articulo.nombre}
                                        </td>
                                        <td className="px-3 py-3">{articulo.marca}</td>
                                        <td className="px-3 py-3">{articulo.stock}</td>
                                        <td className="px-3 py-3">{cantidad}</td>
                                        <td className="px-3 py-3">
                                            <div className="flex items-center gap-2">
                                                <button
                                                    type="button"
                                                    onClick={() => disminuirCantidad(articulo.id)}
                                                    aria-label={`Disminuir cantidad de ${articulo.nombre}`}
                                                    className="h-8 w-8 rounded border border-slate-300 font-bold hover:bg-cream"
                                                >
                                                    −
                                                </button>

                                                <button
                                                    type="button"
                                                    onClick={() => incrementarCantidad(articulo.id)}
                                                    disabled={articulo.stock <= 0}
                                                    aria-label={`Aumentar cantidad de ${articulo.nombre}`}
                                                    className="h-8 w-8 rounded border border-slate-300 font-bold hover:bg-cream disabled:cursor-not-allowed disabled:opacity-40"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            )}
        </section>
    )
}

export default Carrito