import { obtenerEstadoVencimiento } from '../utils/inventario'

function ProductoRow({ producto }) {
    const esBajoStock = producto.stock <= producto.minimo
    const estadoVencimiento = obtenerEstadoVencimiento(
        producto.diasParaVencer,
    )

    return (
        <tr className="border-b border-slate-200 last:border-0">
            <td className="px-2 py-2 align-middle">
                <div className="flex items-center">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                        className="mr-2 rounded-md"
                        width="40"
                        height="40"
                    />
                    <span className="text-slate-900">{producto.nombre}</span>
                </div>
            </td>
            <td className="px-2 py-2 align-middle text-slate-800">
                {producto.categoria}
            </td>
            <td className="px-2 py-2 align-middle text-slate-800">
                {producto.stock}
            </td>
            <td className="px-2 py-2 align-middle text-slate-800">
                {producto.minimo}
            </td>
            <td className="px-2 py-2 align-middle">
                <span
                    className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${estadoVencimiento.clases}`}
                >
                    {estadoVencimiento.texto}
                </span>
            </td>
            <td className="px-2 py-2 align-middle">
                {esBajoStock ? (
                    <span className="inline-flex items-center rounded-full bg-amber-200 px-2.5 py-0.5 text-xs font-semibold text-amber-900">
                        Bajo stock
                    </span>
                ) : (
                    <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        OK
                    </span>
                )}
            </td>
        </tr>
    )
}

export default ProductoRow