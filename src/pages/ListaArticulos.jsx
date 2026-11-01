import { useArticulos } from '../hooks/useArticulos'

function ListaArticulos() {
    const { articulos } = useArticulos()

    return (
        <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-2xl font-semibold text-sea-pine">
                Artículos disponibles
            </h2>
            <p className="mb-6 text-sm text-gray-700">
                Esta tabla muestra todos los artículos registrados.
            </p>

            {articulos.length === 0 ? (
                <p className="text-sm text-gray-600">
                    No hay artículos registrados en el inventario.
                </p>
            ) : (
                <div className="overflow-x-auto rounded-lg border border-black/10 bg-white shadow-sm">
                    <table className="w-full border-collapse text-left text-sm">
                        <thead>
                            <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                                <th className="px-3 py-2 font-semibold">ID</th>
                                <th className="px-3 py-2 font-semibold">Nombre</th>
                                <th className="px-3 py-2 font-semibold">Marca</th>
                                <th className="px-3 py-2 font-semibold">Tipo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articulos.map((articulo) => (
                                <tr
                                    key={articulo.id}
                                    className="border-b border-slate-200 last:border-0"
                                >
                                    <td className="px-3 py-2 align-middle text-slate-700">
                                        {articulo.id}
                                    </td>
                                    <td className="px-3 py-2 align-middle text-slate-900">
                                        {articulo.nombre}
                                    </td>
                                    <td className="px-3 py-2 align-middle text-slate-800">
                                        {articulo.marca}
                                    </td>
                                    <td className="px-3 py-2 align-middle text-slate-800">
                                        {articulo.tipo}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}

export default ListaArticulos