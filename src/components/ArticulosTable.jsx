import ArticuloRow from './ArticuloRow'

function ArticulosTable({ articulos }) {
    if (articulos.length === 0) {
        return (
            <p className="rounded-lg border border-black/10 bg-white p-4 text-slate-700">
                No hay artículos para mostrar.
            </p>
        )
    }

    return (
        <div className="overflow-x-auto">
            <table className="w-full min-w-[850px] border-collapse text-left text-sm">
                <caption className="sr-only">Artículos del inventario</caption>

                <thead>
                    <tr className="border-b-2 border-slate-200 bg-slate-50 text-slate-700">
                        <th scope="col" className="px-3 py-2">Artículo</th>
                        <th scope="col" className="px-3 py-2">Marca</th>
                        <th scope="col" className="px-3 py-2">Categoría</th>
                        <th scope="col" className="px-3 py-2">Stock</th>
                        <th scope="col" className="px-3 py-2">Mínimo</th>
                        <th scope="col" className="px-3 py-2">Vencimiento</th>
                        <th scope="col" className="px-3 py-2">Estado de stock</th>
                        <th scope="col" className="px-3 py-2">Estado de vencimiento</th>
                    </tr>
                </thead>

                <tbody>
                    {articulos.map((articulo) => (
                        <ArticuloRow key={articulo.id} articulo={articulo} />
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ArticulosTable