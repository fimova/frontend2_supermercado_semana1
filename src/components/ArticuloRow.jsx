import { Link } from 'react-router'
import { esBajoStock, formatearFecha, obtenerEstadoVencimiento } from '../utils/inventario'

function ArticuloRow({ articulo }) {
    const bajoStock = esBajoStock(articulo)
    const estadoVencimiento = obtenerEstadoVencimiento(
        articulo.fechaVencimiento,
    )

    return (
        <tr className="border-b border-slate-200 last:border-0 hover:bg-cream/50">
            <td className="px-3 py-2 align-middle">
                <Link
                    to={`/inventario/articulos/${articulo.id}`}
                    className="flex items-center gap-2 font-medium text-chocolate hover:underline"
                >
                    <img
                        src={articulo.imagen}
                        alt=""
                        width="40"
                        height="40"
                        className="rounded-md"
                    />
                    <span>{articulo.nombre}</span>
                </Link>
            </td>

            <td className="px-3 py-2">{articulo.marca}</td>
            <td className="px-3 py-2">{articulo.tipo}</td>
            <td className="px-3 py-2">{articulo.stock}</td>
            <td className="px-3 py-2">{articulo.minimo}</td>
            <td className="px-3 py-2">
                {formatearFecha(articulo.fechaVencimiento)}
            </td>

            <td className="px-3 py-2">
                {bajoStock ? (
                    <span className="rounded-full bg-amber-100 px-2 py-1 text-xs font-semibold text-amber-900">
                        Bajo stock
                    </span>
                ) : (
                    <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                        OK
                    </span>
                )}
            </td>

            <td className="px-3 py-2">
                <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${estadoVencimiento.clases}`}
                >
                    {estadoVencimiento.texto}
                </span>
            </td>
        </tr>
    )
}

export default ArticuloRow